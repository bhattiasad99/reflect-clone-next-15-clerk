import React from 'react'
import Feature from './Feature'
import { features } from './features'

const FeaturesSectionComponent = () => {
    return (
        <section id='features' className='flex flex-col md:flex-row justify-stretch gap-4 '>
            {features.map(eachFeature => {
                const props = {
                    title: eachFeature.title,
                    description: eachFeature.description,
                    icon: eachFeature.icon
                }

                return <Feature
                    key={eachFeature.title}
                    {...props}
                />
            })}
        </section>
    )
}

export default FeaturesSectionComponent