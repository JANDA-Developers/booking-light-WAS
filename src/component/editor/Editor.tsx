import React, { useEffect, useState } from 'react';
import 'froala-editor/js/froala_editor.pkgd.min.js';
import 'froala-editor/js/languages/ko.js';
import 'froala-editor/js/plugins/video.min.js';
import 'froala-editor/js/plugins/image.min.js';
import 'froala-editor/js/plugins/colors.min.js';
import 'froala-editor/js/plugins/font_family.min.js';
import 'froala-editor/js/plugins/paragraph_format.min.js';
import 'froala-editor/js/plugins/align.min.js';
import 'froala-editor/js/plugins/char_counter.min.js';
import 'froala-editor/js/plugins/code_beautifier.min.js';
import 'froala-editor/js/plugins/code_view.min.js';
import 'froala-editor/js/plugins/draggable.min.js';
import 'froala-editor/js/plugins/emoticons.min.js';
import 'froala-editor/js/plugins/entities.min.js';
import 'froala-editor/js/plugins/file.min.js';
import 'froala-editor/js/plugins/font_size.min.js';
import 'froala-editor/js/plugins/fullscreen.min.js';
import 'froala-editor/js/plugins/help.min.js';
import 'froala-editor/js/plugins/image_manager.min.js';
import 'froala-editor/js/plugins/inline_class.min.js';
import 'froala-editor/js/plugins/inline_style.min.js';
import 'froala-editor/js/plugins/line_breaker.min.js';
import 'froala-editor/js/plugins/line_height.min.js';
import 'froala-editor/js/plugins/link.min.js';
import 'froala-editor/js/plugins/lists.min.js';
import 'froala-editor/js/plugins/paragraph_format.min.js';
import 'froala-editor/js/plugins/paragraph_style.min.js';
import 'froala-editor/js/plugins/print.min.js';
import 'froala-editor/js/plugins/quick_insert.min.js';
import 'froala-editor/js/plugins/quote.min.js';
import 'froala-editor/js/plugins/save.min.js';
import 'froala-editor/js/plugins/special_characters.min.js';
import 'froala-editor/js/plugins/table.min.js';
import 'froala-editor/js/plugins/url.min.js';
import 'froala-editor/js/plugins/video.min.js';
import 'froala-editor/js/plugins/word_paste.min.js';
import 'froala-editor/css/plugins/video.min.css';
import 'froala-editor/css/plugins/table.min.css';
import 'froala-editor/css/plugins/special_characters.min.css';
import 'froala-editor/css/plugins/quick_insert.min.css';
import 'froala-editor/css/plugins/line_breaker.min.css';
import 'froala-editor/css/plugins/image_manager.min.css';
import 'froala-editor/css/plugins/image.min.css';
import 'froala-editor/css/plugins/help.min.css';
import 'froala-editor/css/plugins/fullscreen.min.css';
import 'froala-editor/css/plugins/file.min.css';
import 'froala-editor/css/plugins/emoticons.min.css';
import 'froala-editor/css/plugins/draggable.min.css';
import 'froala-editor/css/plugins/colors.min.css';
import 'froala-editor/css/plugins/code_view.min.css';
import 'froala-editor/css/plugins/char_counter.min.css';

import 'froala-editor/js/third_party/embedly.min.js';
import 'froala-editor/css/third_party/embedly.min.css';
import 'froala-editor/js/third_party/image_tui.min.js';
// Require Editor CSS files.
import 'froala-editor/css/third_party/image_tui.min.css';
import 'froala-editor/css/froala_style.min.css';
import 'froala-editor/css/froala_editor.pkgd.min.css';

// Require Font Awesome.
import 'font-awesome/css/font-awesome.css';

import FroalaEditor from 'react-froala-wysiwyg';
import { ISet } from '@janda-com/front/dist/types/interface';
import { IJDalignProp, JDalign, JDcard, JDlabel, JDloadingCard, JDpreloader } from '@janda-com/front';
export interface IEditorProps extends IJDalignProp {
    onChange?: (data: any) => void;
    readOnly?: boolean;
    model?: string;
    setModel?: ISet<string>;
    label?: string;
}

const S3KeyGenAPI = "https://kbsjl5pnsi.execute-api.ap-northeast-2.amazonaws.com/dev/froala-keygen"

export const JDEditor: React.FC<IEditorProps> = ({
    onChange: handleChange,
    model,
    label,
    setModel,
    ...props
}) => {
    const [s3Key, setS3Key] = useState()

    useEffect(() => {
        fetch(S3KeyGenAPI, {
            method: 'post',
        }).then(response =>
            response.json()
        ).then(data => { setS3Key(JSON.parse(data.body)) });
    }, [])

    // @ts-ignore
    const key = s3Key?.bucket

    if (!key) return <JDloadingCard style={{ height: "450px" }} loading={true} />;
    return <JDalign {...props} >
        {label && <JDlabel txt={label} />}
        <FroalaEditor
            tag='textarea'
            config={{
                key: "1CC3kD9D7F5A3D4D3bHIMFF1EWBXIJb1BZLZFh1i1MXQLjE4C3F3I3B4A5E5E3B3D2==",
                imageUploadToS3: s3Key,
                placeholderText: 'Edit Your Content Here!',
                charCounterCount: false,
                // @ts-ignore
                height: 250,
                imageUpload: true,
                imageDefaultAlign: 'left',
                imageDefaultDisplay: 'inline-block',
                // Set max image size to 5MB.
                imageMaxSize: 5 * 1024 * 1024,
                // Allow to upload PNG and JPG.
                imageAllowedTypes: ['jpeg', 'jpg', 'png', 'gif'],
                imageAltButtons: ['imageBack'],
                language: 'ko',
                toolbarSticky: false,
                toolbarButtons: {
                    // Key represents the more button from the toolbar.
                    moreText: {
                        // List of buttons used in the  group.
                        buttons: ['bold', 'italic', 'underline', 'strikeThrough', 'subscript', 'superscript', 'fontFamily', 'fontSize', 'textColor', 'backgroundColor', 'inlineClass', 'inlineStyle', 'clearFormatting'],

                        // Alignment of the group in the toolbar.
                        align: 'left',

                        // By default, 3 buttons are shown in the main toolbar. The rest of them are available when using the more button.
                        buttonsVisible: 3
                    },


                    moreParagraph: {
                        buttons: ['alignLeft', 'alignCenter', 'formatOLSimple', 'alignRight', 'alignJustify', 'formatOL', 'formatUL', 'paragraphFormat', 'paragraphStyle', 'lineHeight', 'outdent', 'indent', 'quote'],
                        align: 'left',
                        buttonsVisible: 3
                    },

                    moreRich: {
                        buttons: ['insertLink', 'insertImage', 'insertVideo', 'insertTable', 'emoticons', 'fontAwesome', 'specialCharacters', 'embedly', 'insertFile', 'insertHR'],
                        align: 'left',
                        buttonsVisible: 3
                    },

                    moreMisc: {
                        buttons: ['undo', 'redo', 'fullscreen', 'print', 'getPDF', 'spellChecker', 'selectAll', 'html', 'help'],
                        align: 'right',
                        buttonsVisible: 2
                    }
                }
            }}
            model={model}
            onModelChange={(data: string) => {
                setModel?.(data);
            }}
        />
    </JDalign>
}

export default JDEditor