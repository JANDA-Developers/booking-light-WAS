import { Flex, JDbutton } from '@janda-com/front';
import React, { useContext } from 'react';
import AppContext from '../../context';
import { me_Me_stores_items } from '../../type/api';

interface IProp<T extends string | string[]> {
    itemIdFilter?: T
    handleSelectItem: (item?: T extends string ? me_Me_stores_items : string[]) => void;
}

export const ItemRadio: React.FC<IProp<string>> = ({ handleSelectItem, itemIdFilter }) => {
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


export const ItemRadios: React.FC<IProp<string[]>> = ({ handleSelectItem, itemIdFilter }) => {
    const _handleSelectItem = (item?: me_Me_stores_items) => () => {
        if (!item) handleSelectItem(undefined);
        else {
            const filterIds = (itemIdFilter || []);
            if (filterIds.includes(item._id)) {
                const index = filterIds.findIndex(id => id === item._id);
                filterIds.splice(index, 1);
                handleSelectItem([...filterIds])
                return;
            }
            filterIds.push(item._id)
            handleSelectItem([...filterIds])
        }
    }
    const { selectedStore } = useContext(AppContext);
    return <Flex mb wrap >
        <JDbutton mr thema={undefined === itemIdFilter ? "primary" : undefined} onClick={_handleSelectItem(undefined)}>전체보기</JDbutton>
        {selectedStore?.items?.map(item =>
            <JDbutton key={item._id} mr thema={itemIdFilter?.includes(item._id) ? "primary" : undefined} onClick={_handleSelectItem(item)}>{item.name}</JDbutton>
        )}
    </Flex>;
};
