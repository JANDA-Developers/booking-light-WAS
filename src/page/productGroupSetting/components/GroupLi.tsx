import { Flex, JDbutton, JDcard, JDtypho } from '@janda-com/front';
import { JDatomExtentionSet } from '@janda-com/front/dist/types/interface';
import { IDiv } from '@janda-com/sms/dist/types/interface';
import React from 'react';

interface IProp extends JDatomExtentionSet, IDiv {
    name: string;
    handleDelete: () => void;
    handleEdit: () => void;
}

export const GroupLi: React.FC<IProp> = ({ handleDelete, handleEdit, name, ...props }) => {
    return <JDcard {...props}>
        <Flex vCenter between>
            <JDtypho mr="huge">
                {name}
            </JDtypho>
            <div>
                <JDbutton onClick={handleEdit} padding="small" size="small" br="square" mr thema="grey4" mode="flat">수정</JDbutton>
                <JDbutton onClick={handleDelete} padding="small" size="small" br="square" thema="error" mode="flat">삭제</JDbutton>
            </div>
        </Flex>
    </JDcard>;
};

export default GroupLi;