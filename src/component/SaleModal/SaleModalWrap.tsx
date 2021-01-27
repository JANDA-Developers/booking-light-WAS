import { IUseModal } from '@janda-com/front';
import React, { useContext } from 'react';
import SaleModal from './SaleModal';
import SalesModalContext, { SalesContextProvider } from "./context";

interface IProp {
    modalHook: IUseModal
}

export const SaleModalWrap: React.FC<IProp> = ({ modalHook }) => {

    const context = useContext(SalesModalContext)

    return <SalesContextProvider value={context} >
        <SaleModal modalHook={modalHook} />;
    </SalesContextProvider>
};

export default SaleModalWrap;
