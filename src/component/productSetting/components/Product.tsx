import React from 'react';
import PhotoFrame, { autoComma, JDalign, JDbadge, JDbutton, JDcard, JDicon, JDphotoFrame, JDtypho, s4 } from "@janda-com/front";
import { TProduct } from '../ProductSetting';
import { B, Flex, Horizen, Split, Thin } from '../../../atom/B';
import DottedButton from '../../dottedButton/DottedButton';

interface IProps extends TProduct { }

const Product: React.FC<IProps> = ({ _id, tags, title, desc, address, price }) => {

    const handleTotalPrice = (price: number, num: number) => {
        return autoComma(price * num);
    }

    return (
        <>
            <JDcard className="product" key={`list-${_id}`}>
                <Flex oneone >
                    <JDphotoFrame mr="large" isBgImg className="product__photo" />
                    <div>
                        <Flex between>
                            <div>
                                <Flex mb="small">
                                    {tags.map(t => <JDbadge size="small" thema="primary" mode="border" key={s4()} >{t}</JDbadge>)}
                                </Flex>
                                <B weight={700} mb="small" size="h6">
                                    {title}
                                </B>
                                <JDtypho>{desc}</JDtypho>
                            </div>
                            <JDalign text="right">
                                <JDbutton mb="normal" size="small" label="수정하기" br="square" mode="flat" thema="lightPrimary" />
                                <JDtypho size="h5" weight={900} >
                                    KRW {autoComma(price)}
                                </JDtypho>
                            </JDalign>
                        </Flex>
                        <Horizen margin={3} />
                        <Flex style={{
                            width: "100%"
                        }} between>
                            <Flex>
                                <B mr="normal">판매</B>
                                <Thin mr="normal">162</Thin>
                                <Split />
                                <B mr="normal">판매</B>
                                <Thin>162</Thin>
                            </Flex>
                            <JDtypho>{address}</JDtypho>
                        </Flex>
                    </div>
                </Flex>
            </JDcard>
            <DottedButton />
        </>
    )
}

export default Product
