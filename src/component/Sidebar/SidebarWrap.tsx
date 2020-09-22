import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Sidebar, { IProps as ISideBarProps } from './Sidebar';

interface IProp extends Partial<ISideBarProps> { }

export const SideBarWrap: React.FC<IProp> = ({ ...props }) => {
    const [isOpen, setIsOpen] = useState(true);
    const history = useHistory();

    return <div >
        <Sidebar
            onMypage={() => {
                history.push("/mypage")
            }}
            onLogin={() => { }} onClose={() => {
                setIsOpen(false)
            }}
            isOpen={isOpen}
            useInfo={{
                name: "김민재"
            }}
        />
    </div>;
};

