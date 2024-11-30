import React from 'react'
import RightBox from '../MainFeatureComponent/RightBox'
import { sectionClasses } from '../MainFeatureComponent'
import { ChartBar } from 'lucide-react'
import LandingPageFeature from '@/components/templates/LandingPageFeature'

const MoodAnalytics = () => {
    return (
        <section className={sectionClasses}>

            <RightBox />
            <LandingPageFeature
                icon={<ChartBar size={20} color="#916524" />}
                title="Mood Analytics"
                description="Track your emotional journey with powerful analytics:"
                points={[
                    "Visual Mood Trends",
                    "Pattern Recognition"
                ]}
            />

        </section>
    )
}

export default MoodAnalytics