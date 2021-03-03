import React from 'react';
import FroalaEditorView from 'react-froala-wysiwyg/FroalaEditorView';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';
interface IProp {
    model: string | undefined | null
}

export const EditorView: React.FC<IProp> = ({ model }) => {
    return <FroalaEditorView model={model} />;
};
