import LandingPageFeature from "@/components/templates/LandingPageFeature"
import RightBox from "./RightBox"
import { FileText } from "lucide-react"

export const sectionClasses = 'flex [&>*]:w-full gap-6 my-10'

const MainFeatureComponent = () => {
    return (
        <section className={sectionClasses}>
            <LandingPageFeature
                icon={<FileText size={20} color="#916524" />}
                title="Rich Text Editor"
                description="Express yourself fully with our powerful editor featuring:"
                points={[
                    "Format text with ease",
                    "Embed links"
                ]}
            />
            <RightBox />
        </section>
    )
}

export default MainFeatureComponent