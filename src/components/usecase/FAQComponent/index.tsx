import AccordionsComponent from '@/components/custom/AccordionsComponent'
import TypographyComponent from '@/components/custom/TypographyComponent'
import React from 'react'
import { faqs } from './faqs'

const FAQComponent = () => {
    return (
        <section>
            <TypographyComponent classExtends='w-full text-center title-2 mb-8'>Frequently Asked Questions</TypographyComponent>
            <AccordionsComponent menus={[...faqs.map(eachFaq => ({ label: eachFaq.q, content: eachFaq.a }))]} />
        </section>
    )
}

export default FAQComponent