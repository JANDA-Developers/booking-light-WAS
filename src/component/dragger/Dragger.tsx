import { ISet, TElements } from '@janda-com/front/dist/types/interface';
import React, { PropsWithChildren } from 'react';
import { DragDropContext, Draggable, Droppable, DropResult } from 'react-beautiful-dnd';
import { reorder } from '../../utils/reorder';

interface IProp<T = any> {
    ulClassName?: string
    dir?: "vertical" | "horizontal"
    idKey: keyof T;
    items: T[];
    ItemRender: (item: T, index: number, provider: any) => TElements;
    onOrder: (ordered: T[]) => void;
    handle?: boolean;
}

export const Draager = <T,>({ handle, dir = "vertical", items, idKey, ItemRender, onOrder, ulClassName }: PropsWithChildren<IProp<T>>): JSX.Element => {
    const handleDrop = (result: DropResult) => {
        const ordered = reorder(items, result.source.index, result.destination?.index!);
        onOrder([...ordered]);
    }

    const getHandleProp = (prop: any) => {
        return handle ? {} : prop
    }

    return <div>
        <DragDropContext onDragEnd={handleDrop}>
            <Droppable direction={dir} droppableId="droppable">
                {(provided, snapshot) => (
                    <ul className={`${ulClassName} droppable`} ref={provided.innerRef}  {...provided.droppableProps}>
                        {items.map((item, index) =>
                            <Draggable draggableId={item[idKey] as any} index={index} key={item[idKey] as any}>
                                {(provided: any) => (
                                    <li
                                        className={`formCreater__draggList`}
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...getHandleProp(provided.dragHandleProps)}
                                    >
                                        {ItemRender(item, index, provided)}
                                    </li>
                                )}
                            </Draggable>
                        )}
                        {provided.placeholder}
                    </ul>
                )}
            </Droppable>
        </DragDropContext>
    </div>;
};
