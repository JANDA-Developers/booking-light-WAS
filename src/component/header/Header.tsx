import React, { useContext } from 'react'
import { Flex, JDalign, JDicon, JDselect, opFind } from '@janda-com/front';
import { IIcons } from '@janda-com/front/dist/components/icons/declation';
import { TElements } from '@janda-com/front/dist/types/interface';
import AppContext from '../../context';
import { ProductBookingCreateInput } from '../../type/api';

interface IProps {
    onMenuClick: () => void;
}

const Header: React.FC<IProps> = ({ children, onMenuClick }) => {
    const context = useContext(AppContext);
    const { storeOptions, selectedStore, updateContext, stores } = context

    return (
        <header className="header">
            <JDalign flex={{
                vCenter: true,
                between: true
            }} className="header__items">
                <Flex vCenter>
                    <JDicon mr="huge" size="small" hover onClick={onMenuClick} color="white" icon="menu" />
                    <JDselect selectedOption={opFind(selectedStore?._id, storeOptions)} className="header__storeSelect" autoSize
                        onChange={(op) => {
                            const target = stores.find(sto => sto._id === op.value);
                            context.selectedStore = target;
                            console.log({ context });
                            updateContext({ ...context })
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