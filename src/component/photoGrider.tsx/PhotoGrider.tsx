import { Flex, JDphotoFrame } from '@janda-com/front';
import React, { useRef, useState } from 'react';
import { DropResult } from 'react-beautiful-dnd';
import { useAttributes } from '../../hook/useAttributes';
import { useFileUploads } from '../../hook/useFIle';
import { useFileUpload, useSingleUpload } from '../../hook/useUpload';
import { Ffile } from '../../type/api';
import { reorder } from '../../utils/reorder';
import DotButton from '../dotButton/DotButton';
import { Draager } from '../dragger/Dragger';
import { JDicon } from '../icons/Icons';

interface IProp {
    files: Ffile[]
    onChange: (files: Ffile[]) => void;
}

export const PhotoGrider: React.FC<IProp> = ({ files, onChange }) => {
    const uploaderRef = useRef<HTMLInputElement>(null);
    const { onChange: fileChange } = useFileUpload();
    const [selectPhoto, setSelectPhoto] = useState<undefined | number>(0)

    const handlePhotoClick = (index?: number) => () => {
        setSelectPhoto(index)
        uploaderRef?.current?.click();
    };


    const handleChangeFile = (index?: number) => async (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = await fileChange(e);
        if (!file) return;
        if (index) {
            files.splice(index, 1, file);
        } else {
            files.push(file);
        }
        onChange([...files]);
    }

    const handleClose = (index: number) => () => {
        files.splice(index, 1);
        onChange([...files]);
    }


    return <Flex className="photoGrider">
        <Draager<Ffile>
            items={files}
            idKey={"_id"}
            handle
            ulClassName="photoGrider__ul"
            onOrder={onChange}
            dir="horizontal"
            ItemRender={
                (item, index, props) => <div className="photoGrider__cell">
                    <JDphotoFrame className="photoGrider__img" isBgImg src={item.uri} onClick={handlePhotoClick(index)} />
                    <div className="photoGrider__photoGrab" {...props.dragHandleProps} />
                    <Flex className="photoGrider__icons">
                        <JDicon className="photoGrider__icon" onClick={handlePhotoClick(index)} size="superTiny" icon="camera" />
                        <JDicon className="photoGrider__icon photoGrider__icon--close" onClick={handleClose(index)} size="superTiny" icon="close" />
                    </Flex>
                </div>}
        />
        <DotButton onClick={handlePhotoClick()} className="photoGrider__cell photoGrider__addCard" />
        <input
            style={{
                position: 'absolute',
                opacity: 0,
                width: '1px',
                height: '1px',
            }}
            type="file"
            onChange={handleChangeFile(selectPhoto)}
            ref={uploaderRef}
        />
    </Flex>;
};