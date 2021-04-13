import { Flex, JDbutton, JDcard, JDmodal, useModal } from '@janda-com/front';
import React, { useState } from 'react';
import { Fattribute } from '../../type/api';
import { Controller } from './components/Controller';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import { AttributeInput } from './components/AttributeInput';
import { reorder } from '../../utils/reorder';
import { ISet } from '@janda-com/front/dist/types/interface';
import { JDicon } from '../icons/Icons';
import { Dragger } from '../dragger/Dragger';
import { Grab } from '../../atom/Grab';


interface IProp {
    setAttributes: ISet<Fattribute[]>;
    attributes: Fattribute[]
}

export const FormCreater: React.FC<IProp> = ({ attributes, setAttributes }) => {
    const modalHook = useModal<{ key: string }>();

    const handleDrop = (ordered: Fattribute[]) => {
        setAttributes([...ordered])
    }

    const handleAttributeCreate = (attribute: Fattribute) => {
        attributes.push(attribute);
        setAttributes([...attributes]);
    }

    const handleAttributeEdit = (attribute: Fattribute) => {
        const index = attributes.findIndex(attr => attr.key === attribute.key);
        attributes.splice(index, 1, attribute);
        modalHook.closeModal();
        setAttributes([...attributes]);
    }

    const handleDelete = (attribute: Fattribute) => () => {
        const filtered = attributes.filter(attr => attr.key !== attribute.key);
        setAttributes([...filtered]);
    }

    const selectedAttribute = attributes.find(attribute => attribute.key === modalHook.info?.key);

    return <JDcard className="formCreater" flex={{ oneone: true }} mode="border">
        <Flex grow>
            <JDcard head={<Flex between vCenter><span>미리보기</span> <div>
            </div></Flex>} mode="border" mr>
                <Dragger<Fattribute> onOrder={handleDrop} handle ulClassName={"formCreater__draggWrap"} idKey="key" items={attributes}
                    ItemRender={(attribute, index, { dragHandleProps }) =>
                        <Flex className="formCreater__inputCell" mb vCenter>
                            <AttributeInput onEdit={() => {
                                modalHook.openModal({ key: attribute.key })
                            }} onDelete={handleDelete(attribute)} attribute={attribute} />
                            <Grab className="formCreater__grab" {...dragHandleProps} />
                        </Flex>}
                />
            </JDcard>
            <Controller key={"create" + attributes.length} onSubmit={handleAttributeCreate} />
        </Flex>
        <JDmodal {...modalHook}>
            <Controller key={modalHook.info?.key} attribute={selectedAttribute} onSubmit={handleAttributeEdit} />
        </JDmodal>
    </JDcard>;
};


