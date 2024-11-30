import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel'
import { testimonials } from './testimonials'
import Testimonial from './Testimonial'

const TestimonialsCarousel = () => {
    return (
        <Carousel className="w-full max-w-[80vw] mx-auto mb-16">
            <CarouselContent className="-ml-1">
                {testimonials.map(eachTestimonial => {
                    return <CarouselItem key={eachTestimonial.id} className="pl-1 md:basis-1/2 lg:basis-1/3">
                        <Testimonial {...eachTestimonial} />
                    </CarouselItem>
                })}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
        </Carousel>
    )
}

export default TestimonialsCarousel