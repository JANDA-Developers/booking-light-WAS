import { Flex } from '@janda-com/front';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import AppContext from '../../context';
import HeaderWrap from '../header/HeaderWrap';
import Sidebar from '../sidebar/Sidebar';

interface IProp { }

export const Layout: React.FC<IProp> = ({ children }) => {
    const [sideBarOpen, setSideBarOpen] = useState(true);

    return <Flex className="layout" oneone >
        <Sidebar setSide={setSideBarOpen} isOpen={sideBarOpen} />
        <div className="layout__contents">
            <HeaderWrap setSide={setSideBarOpen} sideOpen={sideBarOpen} />
            {children}
        </div>
    </Flex>;
};
