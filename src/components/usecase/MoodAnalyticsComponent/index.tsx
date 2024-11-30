import React from 'react'
import { sectionClasses } from '../MainFeatureComponent'
import { ChartBar } from 'lucide-react'
import LandingPageFeature from '@/components/templates/LandingPageFeature'
import LeftBox from './LeftBox'

const MoodAnalytics = () => {
    return (
        <section className={sectionClasses}>
            <LeftBox />
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