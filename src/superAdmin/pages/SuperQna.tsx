import { JDcontainer, JDpageHeader, useModal, WindowSize } from '@janda-com/front';
import React from 'react';
import { DotButton } from "../../component/dotButton/DotButton"
import { CardBtn } from '../../component/btns/ModalBtn';
import { FoldCard } from '../../atom/folderCard/FoldCard';
import { useBoardDocList } from "../../hook/useBoardDoc";
import { FboardDoc } from '../../type/api';
import { useHistory } from 'react-router';
import { SuperAdminPaths } from '../SuperAdminApp';
import { BoardKeys } from "../../type/enum";
interface IProp { }

export const SuperQna: React.FC<IProp> = () => {
    const history = useHistory();


    const { items } = useBoardDocList()

    const handleEdit = (doc: FboardDoc) => () => {
        history.push(SuperAdminPaths.boardWrite + "/" + BoardKeys.QNA + "/" + doc._id);
    }

    const handleCreate = () => {
        history.push(SuperAdminPaths.boardWrite + "/" + BoardKeys.QNA)
    }

    return <div>
        <JDpageHeader title="QNA 작성하기" desc="QNA 작성" />
        <JDcontainer verticalPadding size={WindowSize.full}>
            {items?.map(item =>
                <FoldCard key={item._id} body={<div dangerouslySetInnerHTML={{ __html: item.contents }} />} title={item.title} mb foot={
                    <CardBtn onClick={handleEdit(item)}>수정하기</CardBtn>
                } />
            )}
            <DotButton onClick={handleCreate}>추가하기</DotButton>
        </JDcontainer>
    </div>;
};

export default SuperQna;