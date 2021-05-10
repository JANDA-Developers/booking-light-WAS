import React, { useState } from "react";
import {
    InputText,
    JDbutton,
    JDcard,
    JDconfiger,
    JDcontainer,
    JDhorizen,
    Mb,
    useInput,
} from "@janda-com/front";
import { FormCreater } from "../../../component/formCreater/FormCreater";
import {
    BoardDocInput,
    BoardInput,
    Fattribute,
    Fboard,
    UserRole,
} from "../../../type/api";
import {
    useBoardCreate,
    useBoardDelete,
    useBoardUpdate,
} from "../../../hook/useBoard";
import { CardBtn } from "../../../component/btns/ModalBtn";
import { ALLOW_LOGINS } from "../../../type/const";
import { useCopy } from "../../../hook/useCopy";
import { BackStepBar } from "../../../component/backstepBar/BackstepBar";
import { omits } from "../../../utils/omits";
import { completeMsg } from "../../../utils/onCompletedMessage";

export type BaseFiledKey = keyof Pick<
    BoardDocInput,
    | "thumb"
    | "title"
    | "attachFiles"
    | "isOpen"
    | "summary"
    | "subTitle"
    | "keyWards"
    | "contents"
>;

const PermissionItems = ALLOW_LOGINS.map((role) => ({
    _id: role,
    name: role,
}));

export const BasicFields: BaseFiledKey[] = [
    "contents",
    "isOpen",
    "title",
    "thumb",
    "summary",
    "subTitle",
    "keyWards",
];

interface IProp {
    board?: Fboard;
}

export const BoardConfiger: React.FC<IProp> = ({ board }) => {
    const isCreate = !board;
    const [boardDelete] = useBoardDelete({
        onCompleted: ({ BoardDelete }) => {
            completeMsg(BoardDelete, "보드 삭제완료");
        },
    });
    const [boardUpdate] = useBoardUpdate({
        onCompleted: ({ BoardUpdate }) => {
            completeMsg(BoardUpdate, "보드 업데이트 완료");
        },
    });
    const [boardCreate] = useBoardCreate({
        onCompleted: ({ BoardCreate }) => {
            completeMsg(BoardCreate, "보드 생성 완료");
        },
    });
    const [attrs, setAttrs] = useCopy<Fattribute[]>(board?.inputs || []);
    const [eanbleItems, setEanbleItems] = useCopy<string[]>(
        board?.fields || []
    );
    const [readPermission, setReadPermssion] = useCopy<UserRole[]>(
        board?.readPermission || []
    );
    const [writePermission, setWritePermssion] = useCopy<UserRole[]>(
        board?.writePermission || []
    );
    const nameHook = useInput(board?.name || "");
    const keyHook = useInput(board?.key || "");

    const baseItems = BasicFields.map((filed) => ({
        _id: filed,
        name: filed,
    }));

    const attrItems = attrs.map((attr) => ({
        _id: attr.key,
        name: attr.label || "",
    }));

    const next: BoardInput = {
        key: keyHook.value,
        inputs: attrs,
        fields: eanbleItems,
        name: nameHook.value,
        readPermission,
        writePermission,
    };

    const handleBoardCreate = () => {
        boardCreate({
            variables: {
                input: omits(next),
            },
        });
    };

    const handleBoardUpdate = () => {
        boardUpdate({
            variables: {
                boardId: board?._id,
                input: omits(next),
            },
        });
    };

    const handleDeleteBoard = () => {
        boardDelete({
            variables: {
                boardId: board?._id,
            },
        });
    };

    const allItems = [...baseItems, ...attrItems];

    return (
        <div>
            <JDcontainer verticalPadding>
                <BackStepBar mb label="뒤로가기" />
                <JDcard
                    foot={
                        <div>
                            <CardBtn
                                thema="primary"
                                onClick={handleBoardCreate}
                                hide={!isCreate}
                                mr
                            >
                                게시판 생성
                            </CardBtn>
                            <CardBtn
                                thema="primary"
                                onClick={handleBoardUpdate}
                                hide={isCreate}
                                mr
                            >
                                게시판 수정
                            </CardBtn>
                            <CardBtn
                                thema="error"
                                onClick={handleDeleteBoard}
                                hide={isCreate}
                                mr
                            >
                                게시판 삭제
                            </CardBtn>
                        </div>
                    }
                >
                    <InputText mb label="보드타이틀" {...nameHook} />
                    <InputText mb label="보드키" {...keyHook} />
                    <FormCreater setAttributes={setAttrs} attributes={attrs} />
                    <Mb mb="huge" />
                    <JDconfiger
                        enableHeader="사용필드"
                        unableHeader="미사용필드"
                        enableIds={eanbleItems}
                        onEnableChange={setEanbleItems}
                        allItem={allItems}
                    />
                    <JDhorizen margin={4} />
                    <JDconfiger
                        enableHeader="읽기허용"
                        unableHeader="읽기미허용"
                        onEnableChange={setReadPermssion as any}
                        enableIds={readPermission}
                        allItem={PermissionItems}
                    />
                    <JDhorizen margin={4} />
                    <JDconfiger
                        enableHeader="쓰기허용"
                        unableHeader="쓰기미허용"
                        onEnableChange={setWritePermssion as any}
                        enableIds={writePermission}
                        allItem={PermissionItems}
                    />
                </JDcard>
            </JDcontainer>
        </div>
    );
};
