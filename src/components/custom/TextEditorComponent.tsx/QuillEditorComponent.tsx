'use client'
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useState } from 'react';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';

export type QuillEditorProps = {
    initialValue?: string,
    onValueChange?: (val: string) => void
}

const QuillEditorComponent: FC<QuillEditorProps> = ({ initialValue = '', onValueChange = () => { return } }) => {
    const [value, setValue] = useState(initialValue);

    useEffect(() => {
        onValueChange(value)
    }, [value])

    return <ReactQuill theme="snow" value={value} onChange={setValue} />;
}

export default QuillEditorComponent;