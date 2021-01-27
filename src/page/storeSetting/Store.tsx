import React, { useEffect } from 'react';
import { JDicon, JDcard, JDphotoFrame, JDbutton, JDtypho, JDalign, Bold, Thin, Split, JDhorizen, Flex, useFilesManager, JDpreloader, onCompletedMessage } from "@janda-com/front";
import { IStore } from './interface';
import { useMutation } from '@apollo/client';
import { STORE_IMG_ADD, STORE_IMG_SET } from '../../apollo/mutations';
import { storeImageAdd, storeImageAddVariables, storeImageSet, storeImageSetVariables } from '../../type/api';
import { useFileUpload } from '../../hook/useFileUpload';
import dayjs from "dayjs"
import { completeMsg } from '../../utils/utils';

interface IProps {
    store: IStore
    onDelete: () => void;
    onEdit: () => void;
}

const Store: React.FC<IProps> = ({ store, onDelete, onEdit }) => {

    const { name, _id: storeId, images, description, code, zoneinfo } = store;
    const [imgAddMu, { loading: imgAddLoading }] = useMutation<storeImageSet, storeImageSetVariables>(STORE_IMG_SET, {
        onCompleted: ({ StoreImageSet }) => {
            completeMsg(StoreImageSet, "이미지 변경", "이미지 변경 실패")
        }
    })
    const { fileManager, loading: upLoading, viewImage } = useFileUpload({
        defaultImages: images || [],
        groupName: "상점",
        overriden: true,
        directUpload: true,
        onFileUpload: (ids) => {
            imgAddMu({
                variables: {
                    images: ids,
                    storeId
                }
            })
        },
    });

    const img = viewImage;

    return <JDcard mb="normal" className="store">
        <JDpreloader floating loading={upLoading || imgAddLoading} />
        <Flex between center>
            <JDalign mr="huge" flex={{
                vCenter: true
            }} style={{
                width: '100%'
            }}>

                <JDphotoFrame cooldinate={{
                    left: 0,
                    top: 0,
                    bottom: 0,
                    rihgt: 0
                }} uploader={fileManager} mr="huge" isBgImg className="store__img" src={img} />
                <div style={{
                    width: '100%'
                }} >
                    <JDalign mb="normal" flex>
                        <JDtypho mb="no" mr="normal" weight={600} size="h6">
                            {name}
                        </JDtypho>
                        <JDalign flex style={{
                            alignSelf: "flex-end"
                        }}>
                            <JDicon mr="tiny" icon="location" />
                            <Thin weight={100}>
                                {zoneinfo.callingCode}
                            </Thin>
                        </JDalign>
                    </JDalign>
                    <JDalign flex={{
                        vCenter: true
                    }}>
                        <Bold mr="normal">
                            상품
                        </Bold>
                        <Thin >
                            {store.products.length}
                        </Thin>
                        <Split />
                        <Bold mr="normal">
                            코드
                        </Bold>
                        <Thin>
                            {code}
                            {/* 별도 쿼리가 필요함 items들을 store로 필터해서 가져와야함. =>번거로움 */}
                        </Thin>
                        <Split />
                        <Bold mr="normal">
                            생성일
                    </Bold>
                        <Thin >
                            {dayjs(store.createdAt).format("YYYY.MM.DD")}
                        </Thin>
                        <Split />
                        <Bold mr="normal">
                            회원
                    </Bold>
                        <Thin >
                            42명
                    </Thin>
                    </JDalign>
                    <JDhorizen margin={2} />
                    <Thin size="small">
                        {description}
                    </Thin>
                </div>
            </JDalign>
            <div style={{
                maxWidth: "min-content"
            }}>
                <JDbutton onClick={onEdit} mb="normal" br="square" mode="border">수정하기</JDbutton>
                <JDbutton onClick={onDelete} br="square" mode="flat" thema="point">삭제하기</JDbutton>
            </div>
        </Flex>
    </JDcard>
}

export default Store;