'use client'

import { useRouter } from "next/navigation"
import { Button } from "../ui/button";

const PreviousPageComponent = () => {
    const router = useRouter();


    return (
        <Button onClick={() => {
            router.back();
        }}>Go Back</Button>
    )
}

export default PreviousPageComponent