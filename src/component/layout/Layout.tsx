import { Flex } from '@janda-com/front';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../../context';
import HeaderWrap from '../header/HeaderWrap';
import Sidebar from '../sidebar/Sidebar';

interface IProp { }

export const Layout: React.FC<IProp> = ({ children }) => {
    const { user } = useContext(AppContext);
    const [isOpen, setIsOpen] = useState(true);
    const history = useHistory();


    return <Flex oneone >
        <Sidebar isOpen={isOpen} />
        <div>
            <HeaderWrap setSide={setIsOpen} sideOpen={isOpen} />
            {children}
        </div>
    </Flex>;
};
