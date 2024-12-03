'use server'

import { getMoodById } from "@/app/lib/moods";
import { auth } from "@clerk/nextjs/server"
import { getPixabayImage } from "./public";
import { DraftModel, EntryModel, UserModel } from "@/app/lib/models";
import { revalidatePath } from "next/cache";
import { Entry } from "@prisma/client";

type NewJournalPayload = {
    mood: string;
    title: string;
    content: string;
    collectionId?: string;
}

export const createJournalEntry = async (data: NewJournalPayload): Promise<Entry> => {
    try {
        const { userId } = await auth();
        if (!userId) {
            throw new Error("Unauthorized")
        }

        // arcjet rate limiting

        const user = await UserModel.findUnique({
            where: {
                clerkUserId: userId
            }
        });

        if (!user) {
            throw new Error("User not found")
        }

        const mood = getMoodById(data.mood);

        if (!mood) {
            throw new Error("Invalid Mood ID!")
        }

        const moodImageUrl = await getPixabayImage(mood.pixabayQuery);

        if (!moodImageUrl) {
            throw new Error("Error in Pixabay")
        }

        const entry = await EntryModel.create({
            data: {
                title: data.title,
                content: data.content,
                mood: mood.id,
                moodScore: mood.score,
                moodImageUrl: moodImageUrl,
                userId: user.id,
                collectionId: data.collectionId || undefined
            }
        })

        await DraftModel.deleteMany({
            where: {
                userId: user.id
            }
        })

        revalidatePath('/dashboard');

        return entry;
    } catch (err: any) {
        throw new Error(err.message)
    }
}