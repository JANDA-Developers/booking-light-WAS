import React from 'react';
import  { autoComma,JDhorizen, Bold, Flex, JDalign, JDbadge, JDbutton, JDcard, JDphotoFrame, JDtypho, s4, Split, Thin } from "@janda-com/front";
import { TProduct } from '../ProductSetting';
import DottedButton from '../../dottedButton/DottedButton';

interface IProps extends TProduct {
    _id: string;
}

const Product: React.FC<IProps> = ({ _id, tags, title, desc, address, price }) => {


    return (
        <>
            <JDcard mb className="product" key={`list-${_id}`}>
                <Flex oneone >
                    <JDphotoFrame mr="large" isBgImg className="product__photo" />
                    <div>
                        <Flex between>
                            <div>
                                <Flex mb="small">
                                    {tags.map(tag => <JDbadge size="small" thema="primary" mode="border" key={s4()} >{tag}</JDbadge>)}
                                </Flex>
                                <Bold weight={700} mb="small" size="h6">
                                    {title}
                                </Bold>
                                <JDtypho>{desc}</JDtypho>
                            </div>
                            <JDalign text="right">
                                <JDbutton mb="normal" size="small" label="수정하기" br="square" mode="flat" thema="lightPrimary" />
                                <JDtypho size="h5" weight={900} >
                                    KRW {autoComma(price)}
                                </JDtypho>
                            </JDalign>
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
