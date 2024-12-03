import TypographyComponent from "@/components/custom/TypographyComponent"
import { FC } from "react"
import Sample from "./UI/Sample"
import { ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import LinkComponent from "@/components/custom/LinkComponent"

type IProps = {
    advice: string
}

const HeroComponent: FC<IProps> = ({ advice }) => {
    return (
        <div className="py-16">
            <div className="max-w-5xl mx-auto text-center space-y-8 mb-8">
                <TypographyComponent className="gradient-title" variant="h1" >
                    Your Space to Reflect. <br />
                    Your Story to Tell.
                </TypographyComponent>
                <TypographyComponent className="text-lg md: text-xl text-primary-dark mb-8">Capture your thoughts, track your moods, and reflect on your journey in a beautiful, secure space.</TypographyComponent>
            </div>
            <Sample heading={advice} />
            <div className="flex justify-center items-center my-4 gap-2">
                <LinkComponent href="/dashboard">
                    <Button className="rounded-3xl" size='lg' variant='default'>Start Writing <ChevronRight /></Button>
                </LinkComponent>
                <LinkComponent href="#features">
                    <Button className="rounded-3xl border-primary-dark text-primary-dark" size='lg' variant='outline'>Learn More</Button>
                </LinkComponent>
            </div>
        </div>
    )
}

export default HeroComponent