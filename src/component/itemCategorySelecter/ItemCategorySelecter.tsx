import { JDselect, opFind } from '@janda-com/front';
import { JDselectProps } from '@janda-com/front/dist/components/select/SelectBox';
import { IselectedOption } from '@janda-com/front/dist/types/interface';
import React from 'react';
import { useCategoryList } from '../../hook/useCategory';

interface IProp extends JDselectProps {
    storeId: string
    catId?: string | null;
    onChange: (catOps?: IselectedOption) => void;
}

export const ItemCategorySelecter: React.FC<IProp> = ({ storeId, onChange, catId, ...props }) => {

    const { items: categories } = useCategoryList({
        fixingFilter: {
            _storeId__eq: storeId,
        }
    })

    const catOps: IselectedOption[] = categories.map(cat => ({
        label: cat.label,
        value: cat._id
    }))

    const selcetedCat = opFind(catId, catOps, true)

    return <JDselect selectedOption={selcetedCat} onChange={onChange} options={catOps} {...props} />;
};
