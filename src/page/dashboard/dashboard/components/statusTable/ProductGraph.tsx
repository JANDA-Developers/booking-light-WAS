import { Flex, JDphotoFrame } from '@janda-com/front';
import React from 'react';
import BarGraph from '../../../../../component/barGraph/BarGraph';

interface IProp { }

export const ProductGraph: React.FC<IProp> = () => {


    // useCount 4번 <- 하나의 쿼리로 묶어야할듯
    // capcity 조회한번


    return <Flex>
        <JDphotoFrame />
        <BarGraph total={200} _id="as" parts={[{
            amount: 50,
            color: "#cffeqq"
        }, {
            amount: 50,
            color: "red"
        }, {
            amount: 50,
            color: "blue"
        }, {
            amount: 50,
            color: "green"
        }]} />
    </Flex>;
};
