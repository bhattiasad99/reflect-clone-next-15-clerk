import { Card } from '@/components/ui/card'
import React, { FC } from 'react'
import { TestimonialType } from './testimonials'
import TypographyComponent from '@/components/custom/TypographyComponent'

const Testimonial: FC<TestimonialType> = ({ name, profession, testimonial }) => {
    return (
        <div className="p-1">
            <Card className='p-4 space-y-1'>
                <TypographyComponent classExtends='text-primary italic h-16 w-full line-clamp-3'>&quot;{testimonial}&quot;</TypographyComponent>
                <TypographyComponent classExtends='text-titles font-semibold'>{name}</TypographyComponent>
                <TypographyComponent classExtends='text-primary text-xs'>{profession}</TypographyComponent>
            </Card>
        </div>
    )
}

export default Testimonial