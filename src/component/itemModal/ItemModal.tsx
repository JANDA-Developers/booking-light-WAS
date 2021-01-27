import { Bold, Col, Flex, Grid, IUseModal, JDmodal } from '@janda-com/front';
import { InputText } from '@janda-com/front';
import React, { useContext, useState } from 'react';
import AppContext from '../../context';
import { itemList_ItemList_items as IITem } from "../../type/api";
import { ModalBtn } from '../btns/ModalBtn';


export type TItemModalInfo = {
    user?: IITem
}

type TData = Partial<IITem>;

interface IProp {
    modalHook: IUseModal<TItemModalInfo>
}

export const ItemModal: React.FC<IProp> = ({ modalHook }) => {
    const { info, isOpen } = modalHook;

    if (!info) throw Error("info should be provide");
    const { user } = info;
    const [data, setData] = useState<TData>({
        ...user
    })

    const { name } = data;

    return <JDmodal pannel={{
        buttons: [{
            children: "예약취소",
        }]
    }} {...modalHook}
        head={{
            element: <Flex vEnd><Bold>{name}</Bold> 님</Flex>
        }}
    >
        <Grid>
            <Col full={6}>
                <InputText label="" />
            </Col>
            <Col full={6}>

            </Col>
        </Grid>
    </JDmodal>;
};
