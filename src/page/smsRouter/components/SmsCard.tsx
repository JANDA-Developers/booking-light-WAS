import { isEmpty, JDcard } from '@janda-com/front';
import { IJDbadge } from '@janda-com/front/dist/components/badge/Badge';
import { IJDcardProps } from '@janda-com/front/dist/components/cards/Card';
import React from 'react';
import { CardBtn } from '../../../component/btns/ModalBtn';
import { useTemplateDelete } from '../../../hook/useNotification';
import { notificationTemplateList_NotificationTemplateList_items } from '../../../type/api';
import { notificationMethodKr } from '../../../utils/enumConverter';

interface IProp extends IJDcardProps {
    template: notificationTemplateList_NotificationTemplateList_items
    onEdit: () => void;
    onDelete: () => void;
}

export const SmsCard: React.FC<IProp> = ({ template, onDelete: handleDelete, onEdit: handleEdit, ...props }) => {
    const { trigger } = template;
    const type = notificationMethodKr(template.notificationMethod);
    const badges: IJDbadge[] = [{ label: type, mode: "folded", thema: "grey2" }];
    const noTrigger = isEmpty(isEmpty(trigger))

    if (!noTrigger) {
        badges.push({ label: "자동발신", mode: "folded", thema: "primary" })
    }

    return <JDcard badges={badges} {...props} foot={<div>
        <CardBtn size="small" mr onClick={handleEdit} thema="primary">수정하기</CardBtn>
        <CardBtn size="small" onClick={handleDelete} thema="error">삭제하기</CardBtn>
    </div>} head={template.name}>
        {template.description || ""}
    </JDcard>;
};
