import LeftText from "./LeftText"
import RightBox from "./RightBox"

const MainFeatureComponent = () => {
    return (
        <section className="flex [&>*]:w-full gap-6 my-10">
            <LeftText />
            <RightBox />
        </section>
    )
}

export default MainFeatureComponent