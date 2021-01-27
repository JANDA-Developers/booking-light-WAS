import React from 'react';
import { autoComma, JDhorizen, Bold, Flex, JDalign, JDbadge, JDbutton, JDcard, JDphotoFrame, JDtypho, s4, Split, Thin, JDpreloader } from "@janda-com/front";
import DotButton from '../../../component/dotButton/DotButton';
import { IProduct } from '../interface';
import { useMutation } from '@apollo/client';
import { productImageSet, productImageSetVariables } from "../../../type/api";
import { useFileUpload } from '../../../hook/useFileUpload';
import { PRODUCT_IMG_SET } from '../../../apollo/mutations';
interface IProps extends IProduct {
    handleEdit?: () => void;
}

const Product: React.FC<IProps> = ({ _id: productId, capacity, code, createdAt, images, name, price, subtitle, description, handleEdit }) => {
    const tags: any[] = [];

    const [imgAddMu, { loading: imgAddLoading }] = useMutation<productImageSet, productImageSetVariables>(PRODUCT_IMG_SET)
    const { fileManager, loading: upLoading, viewImage } = useFileUpload({
        groupName: "상점",
        overriden: true,
        directUpload: true,
        onFileUpload: (ids) => {
            imgAddMu({
                variables: {
                    images: ids,
                    productId
                }
            })
        },
        defaultImages: images || []
    });

    const img = viewImage;

    return (
        <>
            <JDcard mb className="product" key={`list-${productId}`}>
                <JDpreloader floating loading={imgAddLoading || upLoading} />
                <Flex oneone >
                    <JDphotoFrame src={img} uploader={fileManager} mr="large" isBgImg className="product__photo" />
                    <div>
                        <Flex between>
                            <div>
                                <Flex mb="small">
                                    {tags.map(tag => <JDbadge size="small" thema="primary" mode="border" key={s4()} >{tag}</JDbadge>)}
                                </Flex>
                                <Bold weight={700} mb="small" size="h6">
                                    {name}
                                </Bold>
                                <JDtypho>{description}</JDtypho>
                            </div>
                            {handleEdit && <JDalign text="right">
                                <JDbutton style={{
                                    color: "white"
                                }} mb="normal" onClick={handleEdit} size="small" label="수정하기" br="square" mode="flat" thema="lightPrimary" />
                                <JDtypho size="h5" weight={900} >
                                    KRW {autoComma(price)}
                                </JDtypho>
                            </JDalign>}
                        </Flex>
                        <JDhorizen margin={3} />
                        <Flex style={{
                            width: "100%"
                        }} between>
                            <Flex>
                                <Bold mr="normal">판매</Bold>
                                <Thin mr="normal">162</Thin>
                                <Split />
                                <Bold mr="normal">판매</Bold>
                                <Thin>162</Thin>
                            </Flex>
                            <JDtypho>location</JDtypho>
                        </Flex>
                    </div>
                </Flex>
            </JDcard>
        </>
    )
}

export default Product
