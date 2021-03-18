import { Flex, JDbutton, JDlabel, JDselect, JDswitch, opFind } from '@janda-com/front';
import React, { useContext } from 'react';
import { notificationTemplateList_NotificationTemplateList_items_trigger } from '../../../type/api';
import { EVENT_OPS } from '../../../type/const';
import { NotificationContext } from '../context';

interface IProp {
    trigger: notificationTemplateList_NotificationTemplateList_items_trigger;
    onChange: (trigger: notificationTemplateList_NotificationTemplateList_items_trigger) => void;
    onDelete: () => void;
}

export const TriggerCreater: React.FC<IProp> = ({ trigger, onChange, onDelete: handleDelete }) => {
    const { sendersOps } = useContext(NotificationContext);
    const { event, isEnabled, sender } = trigger;

    return <Flex oneone mb vCenter between >
        {/* 발신자선택 */}
        <JDselect mr label="발신자" selectedOption={opFind(sender, sendersOps)} options={sendersOps} onChange={(ops) => {
            trigger.sender = ops.value;
            onChange(trigger)
        }} />
        {/* 이벤트선택 */}
        <JDselect mr label="발신상황" selectedOption={opFind(event, EVENT_OPS)} options={EVENT_OPS} onChange={(ops) => {
            trigger.event = ops.value;
            onChange(trigger)
        }} />
        <JDswitch mr label="활성화" checked={isEnabled} onChange={(next) => {
            trigger.isEnabled = next;
            onChange(trigger)
        }} />
        <JDbutton style={{ marginTop: "1.3rem" }} onClick={handleDelete} mode="border" size="small" thema="error">삭제하기</JDbutton>
    </Flex>;
};
