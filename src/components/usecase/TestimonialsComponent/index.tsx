import TypographyComponent from '@/components/custom/TypographyComponent'

import React from 'react'
import TestimonialsCarousel from './TestimonialsCarousel'

const TestimonialsComponent = () => {
    return (
        <div>
            <TypographyComponent variant='h2' classExtends={`w-full text-center title-2 mb-8`}>What Our Writers Say</TypographyComponent>
            <TestimonialsCarousel />
        </div>
    )
}

export default TestimonialsComponent