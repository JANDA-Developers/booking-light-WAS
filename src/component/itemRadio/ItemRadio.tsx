import { Flex, JDbutton } from '@janda-com/front';
import React, { useContext } from 'react';
import AppContext from '../../context';
import { me_Me_stores_items } from '../../type/api';

interface IProp {
    itemIdFilter?: string
    handleSelectItem: (item?: me_Me_stores_items) => void;
}

export const ItemRadio: React.FC<IProp> = ({ handleSelectItem, itemIdFilter }) => {
    const _handleSelectItem = (item?: me_Me_stores_items) => () => {
        handleSelectItem(item)
    }
    const { selectedStore } = useContext(AppContext);
    return <Flex mb wrap >
        <JDbutton mr thema={undefined === itemIdFilter ? "primary" : undefined} onClick={_handleSelectItem(undefined)}>전체보기</JDbutton>
        {selectedStore?.items?.map(item =>
            <JDbutton key={item._id} mr thema={item._id === itemIdFilter ? "primary" : undefined} onClick={_handleSelectItem(item)}>{item.name}</JDbutton>
        )}
    </Flex>;
};
