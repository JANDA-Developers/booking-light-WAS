import React, { useContext } from 'react'
import { Flex, JDalign, JDselect, opFind } from '@janda-com/front';
import AppContext from '../../context';
import { SuperAppContext } from '../../superAdmin/helper/superContext';
import { JDicon } from '../icons/Icons';

interface IProps {
    sideOpen?: boolean;
    onMenuClick?: () => void;
}

const Header: React.FC<IProps> = ({ children, onMenuClick, sideOpen }) => {
    const context = useContext(AppContext);
    const { superMe } = useContext(SuperAppContext);
    const { storeOptions, selectedStore, updateContext, stores, selectStore } = context

    return (
        <header className="header">
            <JDalign flex={{
                vCenter: true,
                between: true
            }} className="header__items">
                <Flex vCenter>
                    <JDicon mr="huge" size="small" hover onClick={onMenuClick} color="white" icon={sideOpen ? "menu" : "verticalDots"} />
                    <JDselect hide={!!superMe}
                        selectedOption={opFind(selectedStore?._id, storeOptions)}
                        className="header__storeSelect" autoSize
                        onChange={(op) => {
                            selectStore(op.value);
                        }} options={storeOptions}>
                    </JDselect>
                </Flex>
                <div>
                    {children}
                </div>
            </JDalign>
        </header>
    )
}

export default Header