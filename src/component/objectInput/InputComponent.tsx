import React from "react";
import { Col, Flex, Grid, InputText, isLast, JDlabel, JDswitch, JDtagInput } from "@janda-com/front"
import JDEditor from "../editor/Editor";

export enum JDinputType {
    warning = 'warning',
    notice = 'notice',
    text = "text",
    map = "map",
    line = "line",
    switch = "switch",
    colour = 'colour',
    listLine = 'listLine',
    img = "img",
    timespace = "timespace",
    channelTak = "channelTalk",
    share = "share",
    api = "api",
    editor = "editor",
    link = "link",
    array = "array",
    tag = "tag"
}

interface IInputComponentProps {
    KEY?: string;
    label?: string;
    type?: JDinputType,
    arrayMeta?: any
    onChange: (data: any, index?: number) => void
    onDeleteArray?: (index: number) => void;
    onAddArray?: (data: any) => void;
    value: any,
}

export const InputComponent: React.FC<IInputComponentProps> = ({ onAddArray, KEY, label, type = JDinputType.text, value, onChange, onDeleteArray, arrayMeta }) => {

    switch (type) {

        case JDinputType.warning:
            return <div className="adminEdit__warning">
                <strong className="adminEdit__warningTitle">Warning</strong>
                <span className="adminEdit__warningText">{label}</span>
            </div>

        case JDinputType.notice:
            return <div className="adminEdit__notice">
                <strong className="adminEdit__noticeTitle">Notice</strong>
                <span className="adminEdit__noticeText">{label}</span>
            </div>

        case JDinputType.line:
            return <div className="adminEdit__newSection">
                {label}
            </div>

        case JDinputType.listLine:
            return <div className="adminEdit__listLine">
                {label}
            </div>

        case JDinputType.switch:
            return <div className="adminEdit__switch">
                <JDlabel txt={label} className="mr" />
                <JDswitch checked={value} onChange={() => {
                    onChange(!value);
                }} />
            </div>
        case JDinputType.text:
            return <InputText mb label={label} value={value} onChange={onChange} />
        case JDinputType.editor:
            return <JDEditor model={value} setModel={onChange} onChange={onChange} />
        case JDinputType.link:
            return <InputText mb placeholder="링크 주소를 입력 해주세요." label={label} value={value} onChange={onChange} />
        // case JDinputType.timespace:
        //     return <InputText mb placeholder="타임스페이스 주소입력" label={label} value={value} onChange={onChange} />
        case JDinputType.timespace:
            return <InputText mb placeholder="타임스페이스 주소입력" label={label} value={value} onChange={onChange} />
        case JDinputType.tag:
            return <div>
                <JDlabel txt={label} />
                <JDtagInput mb tags={value} setTags={onChange} />
            </div>
        case JDinputType.channelTak:
            return <InputText label="채널톡 연동하기" iconOnClick={() => { alert("/") }} iconProps={{ tooltip: "채널톡 연동 가이드 보기", hover: true }} icon="info" placeholder="채널톡 연동키" mb value={value} onChange={onChange} />
        default: return <div />
    }
}