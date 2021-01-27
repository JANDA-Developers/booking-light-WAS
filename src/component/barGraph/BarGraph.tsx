import React from "react";
import { Flex } from "@janda-com/front"

type TPart = {
    amount: number;
    color: string;
}

interface IProps {
    total: number;
    parts: TPart[]
    _id: string;
}

export const BarGraph: React.FC<IProps> = ({ parts, total, _id }) => <Flex>
    {parts.map((part, index) =>
        <div key={_id + index} style={{ width: (part.amount / total) * 100 + "%", backgroundColor: part.color }}></div>
    )}
</Flex>

export default BarGraph;