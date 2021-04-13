import { JDcontainer, JDpageHeader, useModal, WindowSize } from '@janda-com/front';
import React from 'react';
import { useHistory } from 'react-router';
import { FoldCard } from '../../atom/folderCard/FoldCard';
import DotButton from '../../component/dotButton/DotButton';
import { useBoardDocList } from "../../hook/useBoardDoc";
import { Paths } from '../../MainRouter';
interface IProp { }

export const Qna: React.FC<IProp> = () => {
    const { items } = useBoardDocList()
    const history = useHistory();

    // const mapping = items.filter(item => {
    //     const attr =item.attrs.find(attr => attr.key === "type")
    //     attr?.value
    // })

    const handleToWrite = () => {
        history.push(Paths.qna)
    }

    return <div>
        <JDpageHeader title="서비스 템플릿" desc="서비스 템플릿" />
        <JDcontainer verticalPadding size={WindowSize.lg}>
            {items?.map(item =>
                <FoldCard key={item._id} body={<div dangerouslySetInnerHTML={{ __html: item.contents }} />} title={item.title} mb />
            )}
        </JDcontainer>
    </div>;
};

export default Qna;