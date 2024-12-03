'use client'

import { CKEditor, useCKEditorCloud } from '@ckeditor/ckeditor5-react';
import { FC } from 'react';

export type CKEditorProps = {
    initialInput?: string
}

const CKEditorComponent: FC<CKEditorProps> = ({ initialInput = '<p>Hello world!</p>' }) => {
    const cloud = useCKEditorCloud({
        version: '44.0.0',
        premium: true
    });

    if (cloud.status === 'error') {
        return <div>Error!</div>;
    }

    if (cloud.status === 'loading') {
        return <div>Loading...</div>;
    }

    const {
        ClassicEditor,
        Essentials,
        Paragraph,
        Bold,
        Italic,
    } = cloud.CKEditor;

    const { FormatPainter } = cloud.CKEditorPremiumFeatures;

    return (
        <CKEditor
            editor={ClassicEditor}
            data={initialInput}
            config={{
                licenseKey: 'eyJhbGciOiJFUzI1NiJ9.eyJleHAiOjE3MzQ0Nzk5OTksImp0aSI6IjU1YTljOTY3LTA5YjctNDc2OS05MmE1LTdhOGVjOGNmOWQwYSIsInVzYWdlRW5kcG9pbnQiOiJodHRwczovL3Byb3h5LWV2ZW50LmNrZWRpdG9yLmNvbSIsImRpc3RyaWJ1dGlvbkNoYW5uZWwiOlsiY2xvdWQiLCJkcnVwYWwiLCJzaCJdLCJ3aGl0ZUxhYmVsIjp0cnVlLCJsaWNlbnNlVHlwZSI6InRyaWFsIiwiZmVhdHVyZXMiOlsiKiJdLCJ2YyI6IjYyYzlkMTdjIn0.VWKMfFmlVK_FEY3HSqde02gDbm34z9Udg-lPS57GomKw41bYSwtx1QNcpzVcaEIa5eIQOE7PzWUawA9zr1jDHQ',
                plugins: [Essentials, Paragraph, Bold, Italic, FormatPainter],
                toolbar: ['undo', 'redo', '|', 'bold', 'italic', '|', 'formatPainter']
            }}
        />
    );

}

export default CKEditorComponent