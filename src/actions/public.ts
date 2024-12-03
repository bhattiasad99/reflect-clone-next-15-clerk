'use server'
import { unstable_cache } from "next/cache";

export const getDailyPrompt = unstable_cache(async (): Promise<{
    id: null | number,
    advice: string
}> => {
    try {
        const res = await fetch('https://api.adviceslip.com/advice', {
            cache: 'no-store'
        })

        const data = await res.json();

        return data.slip;
    } catch (err: any) {
        console.error(err.message)
        return {
            id: null,
            advice: "What`s on your mind today?"
        }
    }

}, ["daily-prompt"],
    {
        revalidate: 86400,
        tags: ["daily-prompt"]
    }
)

export const getPixabayImage = async (query: string): Promise<string | null> => {
    try {
        const res = await fetch(`https://pixabay.com/api?q=${query}&key=${process.env.PIXABAY_API_KEY}&min_width=1280&min_height=720&image_type=illustration&category=feelings`)

        const data = await res.json();

        return data.hits[0]?.largeImageUrl || null;
    } catch (err) {
        console.error("PIXABAY API error: ", err)
        return null
    }
}