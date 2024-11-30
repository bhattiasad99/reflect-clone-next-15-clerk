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