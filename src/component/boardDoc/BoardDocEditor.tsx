import { JDbutton, JDcard, JDswitch, Mb } from '@janda-com/front';
import React, { useState } from 'react';
import { useBoardDocCreate, useBoardDocDelete, useBoardDocUpdate } from '../../hook/useBoardDoc';
import { useCopy } from '../../hook/useCopy';
import { BoardDocInput, Fboard, FboardDoc, FboardDoc_attrs } from '../../type/api';
import { omits } from '../../utils/omits';
import { completeMsg } from '../../utils/onCompletedMessage';
import JDEditor from '../editor/Editor';
import { BoardInputs } from './components/BoardInputs';


interface IProp {
    board: Fboard;
    onDelete: () => void;
    onUpdate: (doc: FboardDoc) => void;
    onCreated: (doc: FboardDoc) => void;
    boardDoc?: FboardDoc
}

export const BoardDocEditor: React.FC<IProp> = ({
    board,
    onCreated,
    onDelete,
    onUpdate,
    boardDoc
}) => {

    const [attributes, setAttributes] = useCopy(board.inputs);
    const isCreate = !boardDoc;
    const [docInput, setDocInput] = useState<BoardDocInput>({
        title: boardDoc?.title || "",
        contents: boardDoc?.contents || "",
        tags: boardDoc?.tags || [],
        attrs: boardDoc?.attrs || board.inputs,
        isOpen: boardDoc?.isOpen || false,
    })

    const [createBoard] = useBoardDocCreate({
        onCompleted: ({ BoardDocCreate }) => {
            if (completeMsg(BoardDocCreate, "글쓰기가 완료 되었습니다.")) {
                onCreated(BoardDocCreate.data!)
            }
        }
    })
    const [updateBoard] = useBoardDocUpdate({
        onCompleted: ({ BoardDocUpdate }) => {
            if (completeMsg(BoardDocUpdate, "업데이트 완료")) {
                onUpdate(BoardDocUpdate.data!)
            }
        }
    })
    const [deleteBoard] = useBoardDocDelete({
        onCompleted: ({ BoardDocDelete }) => {
            if (completeMsg(BoardDocDelete, "지우기 완료")) {
                onDelete()
            }
        }
    })

    const handleCreateBoard = () => {
        createBoard({
            variables: {
                boardKey: board.key,
                input: {
                    ...omits(docInput)
                }
            }
        })
    }


    const handleUpdateBoard = () => {
        updateBoard({
            variables: {
                boardDocId: boardDoc!._id,
                input: {
                    ...docInput as any
                }
            }
        })
    }

    const handleDelete = () => {
        deleteBoard({
            variables: {
                boardDocId: boardDoc!._id
            }
        })
    }

    return <JDcard foot={<div>
        <JDbutton mr thema="primary" hide={!isCreate} onClick={handleCreateBoard} label="생성하기" />
        <JDbutton mr thema="primary" hide={isCreate} onClick={handleUpdateBoard} label="수정하기" />
        <JDbutton mr thema="error" hide={isCreate} onClick={handleDelete} label="삭제하기" />
    </div>} >
        <div>
            <BoardInputs
                keys={board.fields}
                attrs={docInput.attrs as FboardDoc_attrs[]}
            />
            <JDEditor model={docInput.contents} setModel={(val) => {
                docInput.contents = val as any;
                setDocInput({
                    ...docInput
                })
            }} />
        </div>
    </JDcard>;
};
