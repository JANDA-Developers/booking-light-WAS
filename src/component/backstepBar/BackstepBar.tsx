import { JDicon, Flex, JDcard } from '@janda-com/front';
import { CardProps } from '@janda-com/front/dist/components/cards/Card';
import { JDatomExtentionSet } from '@janda-com/front/dist/types/interface';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Paths } from '../../MainRouter';

interface IProp extends CardProps, JDatomExtentionSet {
    label?: string;
    go?: (() => void) | string;
}

export const BackStepBar: React.FC<IProp> = ({ label = "뒤로가기", go, ...props }) => {
    const history = useHistory();

    const handleBack = () => {
        if (!go) {
            history.go(-1);
            return;
        }
        if (typeof go === "string") {
            history.push(go || Paths.main)
        }
        else {
            go?.();
        }
    }

    return <JDcard hover onClick={handleBack} {...props} >
        <Flex between vCenter>
            {label}
            <JDicon icon="arrowBack" />
        </Flex>
    </JDcard>;
};
