import { InputText } from '@janda-com/front';
import React from 'react';
import { whenEnter } from '../../utils/whenEnter';

interface IProp {
    search: string,
    setSearch: any
    onSearch: (search: string) => void;

}

export const LargeSearcher: React.FC<IProp> = ({ onSearch, search, setSearch }) => {
    return <InputText
        mb
        value={search}
        type="email"
        id="LoginEmail"
        Size="big"
        placeholder={'검색어 입력'}
        onChange={setSearch as any}
        br="round"
        icon="magnifier"
        iconHover
        iconOnClick={() => { onSearch(search) }}
        onKeyPress={whenEnter(() => { onSearch(search) })}
    />;
};
