import { Flex, JDbutton, JDlabel, JDselect, JDswitch, opFind } from '@janda-com/front';
import React, { useContext } from 'react';
import AppContext from '../../../context';
import { NotificationMethod, notificationTemplateList_NotificationTemplateList_items_trigger } from '../../../type/api';
import { DEFAULT_SENDER, EVENT_OPS } from '../../../type/const';
import { NotificationContext } from '../context';

interface IProp {
    templateMethod: NotificationMethod
    trigger: notificationTemplateList_NotificationTemplateList_items_trigger;
    onChange: (trigger: notificationTemplateList_NotificationTemplateList_items_trigger) => void;
    onDelete: () => void;
}

export const TriggerCreater: React.FC<IProp> = ({ trigger, onChange, onDelete: handleDelete, templateMethod }) => {
    const { storeOptions } = useContext(AppContext);
    const { smsSendersOps, emailSendersOps } = useContext(NotificationContext);
    const { event, isEnabled, sender, storeIds } = trigger;
    const targetOps = storeOptions.filter(op => storeIds.includes(op.value));

    const isSMS = templateMethod === NotificationMethod.SMS;
    const option = isSMS ? smsSendersOps : emailSendersOps;
    return <Flex oneone mb vCenter between >
        {/* 발신자선택 */}
        <JDselect mr label="발신자" selectedOption={opFind(sender, option, true)} options={option} onChange={(ops) => {
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
        <JDselect mr label="대상스토어" isMulti selectedOptions={targetOps} options={storeOptions} onChanges={ops => {
            const storeIds = ops?.map(op => op.value) || [];
            trigger.storeIds = storeIds
            onChange(trigger);
        }} />
        <JDbutton style={{ marginTop: "1.3rem" }} onClick={handleDelete} mode="border" size="small" thema="error">삭제하기</JDbutton>
    </Flex>;
};
