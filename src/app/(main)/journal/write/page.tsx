'use client'
import TypographyComponent from '@/components/custom/TypographyComponent'
import WriteNewJournalComponent from '@/components/usecase/WriteNewJournalComponent'

const WriteJournal = () => {
    return (
        <div className='flex flex-col gap-3'>
            <TypographyComponent variant='h2' className='gradient-title text-6xl'>What&apos;s on your mind?</TypographyComponent>
            <WriteNewJournalComponent />
        </div>
    )
}

export default WriteJournal