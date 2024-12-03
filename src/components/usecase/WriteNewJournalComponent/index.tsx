'use client'

import { MOODS } from '@/app/lib/moods'
import SelectComponent from '@/components/custom/SelectComponent'
import TextEditorComponent from '@/components/custom/TextEditorComponent.tsx'
import TextFieldComponent from '@/components/custom/TextFieldComponent'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod';
import { journalSchema } from '@/app/lib/schema'

const WriteNewJournalComponent = () => {
    const { register, handleSubmit, control } = useForm({
        resolver: zodResolver(journalSchema),
        defaultValues: {
            title: '',
            content: '',
            mood: '',
            collectionId: ''
        }
    });

    return (
        <>
            <TextFieldComponent label="Title" />
            <SelectComponent label="How are you feeling?" placeholder="Select a mood..." options={MOODS.map(eachMood => ({ label: `${eachMood.emoji} ${eachMood.label}`, value: eachMood.id }))} />
            <TextEditorComponent source="quill" editorProps={{
                onValueChange: (val: string) => {
                    console.log("here: ", val)
                }
            }} />
        </>
    )
}

export default WriteNewJournalComponent