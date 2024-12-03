'use client'
import { FC } from "react"
import CKEditorComponent, { CKEditorProps } from "./CKEditorComponent"
import QuillEditorComponent, { QuillEditorProps } from "./QuillEditorComponent"

type IProps =
    | { source: 'CKEditor', editorProps?: CKEditorProps }
    | { source: 'quill', editorProps?: QuillEditorProps };

const TextEditorComponent: FC<IProps> = ({ source = 'CKEditor', editorProps }) => {
    switch (source) {
        case 'CKEditor':
            return <CKEditorComponent {...editorProps as CKEditorProps} />
        case 'quill':
            return <QuillEditorComponent {...editorProps as QuillEditorProps} />
    }
}

export default TextEditorComponent