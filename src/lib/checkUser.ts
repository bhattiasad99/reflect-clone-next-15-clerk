import { currentUser } from "@clerk/nextjs/server"
import { User } from "@prisma/client";
import { UserModel } from "@/app/lib/models";

export const checkUser = async (): Promise<User | null> => {
    const user = await currentUser();

    if (!user) {
        return null
    }

    try {
        const loggedInUser = await UserModel.findUnique({
            where: {
                clerkUserId: user.id
            }
        })

        if (loggedInUser) {
            return loggedInUser;
        }

        const newUser = await UserModel.create({
            data: {
                clerkUserId: user.id,
                name: `${user.firstName} ${user.lastName}`,
                imageUrl: user.imageUrl,
                email: user.emailAddresses[0].emailAddress
            }
        })

        return newUser;
    } catch (err: any) {
        console.error(err.message)
        return null;
    }
}