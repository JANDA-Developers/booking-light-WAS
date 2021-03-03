import { JDbutton, JDexceptionPage } from '@janda-com/front';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { Centerlize } from '../../component/centerlize/Centerlize';
import { Paths } from '../../MainRouter';

interface IProp { }

export const Page404: React.FC<IProp> = () => {

    const history = useHistory();

    return <Centerlize  >
        <JDexceptionPage Button={<JDbutton onClick={
            () => history.push(Paths.main)
        }>홈으로</JDbutton>} type="404" />
    </Centerlize>;
};
