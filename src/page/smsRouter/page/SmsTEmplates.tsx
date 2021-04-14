import { Flex, JDcontainer, JDpageHeader, JDpreloader, SkipUpdate, useModal } from '@janda-com/front';
import React from 'react';
import DotButton from '../../../component/dotButton/DotButton';
import { useNotificationTemplateList, useTemplateCreate, useTemplateDelete, useTemplateUpdate } from '../../../hook/useNotification';
import { notificationTemplateList_NotificationTemplateList_items, _IItemSort, _ITemplateFilter } from '../../../type/api';
import { completeMsg } from '../../../utils/onCompletedMessage';
import { promptConfirm } from '../../../utils/prompt';
import { SmsCard } from '../components/SmsCard';
import { ISmsDetailModalInfo, NotificationTemplateModal } from '../components/NotificationTemplateModal';

interface IProp { }

export const SmsTemplates: React.FC<IProp> = () => {
    const templateListHook = useNotificationTemplateList()
    const { getLoading, items } = templateListHook;
    const smsModalHook = useModal<ISmsDetailModalInfo>();
    const [deleteMu] = useTemplateDelete({
        onCompleted: ({ SmsTemplateDelete }) => {
            completeMsg(SmsTemplateDelete, "템플릿 삭제완료")
        }
    });

    const handleCreate = () => {
        smsModalHook.openModal()
    }

    const handleEdit = (template: notificationTemplateList_NotificationTemplateList_items) => () => {
        smsModalHook.openModal({
            template
        });
    }

    const handleDelete = (template: notificationTemplateList_NotificationTemplateList_items) => () => {
        const { name, _id } = template;
        promptConfirm(name, `스토어를 삭제하실려면 ${name}을 정확하게 입력 해주세요.`, () => {
            deleteMu({
                variables: {
                    templateId: _id
                }
            })
        })
    }

    return <div>
        <JDpreloader loading={getLoading} floating />
        <JDpageHeader title="발신 템플릿 생성하기" desc="자동발신 등록가능 발신 템플릿 생성하기" />
        <JDcontainer verticalPadding>
            {/* <JDsearchBar<_ITemplateFilter, _IItemSort> searchOps={[{ label: "이름", value: "name" }]} {...templateListHook} />
            <Mb /> */}
            <DotButton mb onClick={handleCreate}>생성하기</DotButton>
            <SkipUpdate skip={getLoading} >
                <Flex oneone wrap className="smsTemplates__smsCardWrap">
                    {items.map((item, index) =>
                        <SmsCard
                            mb
                            mr
                            className="smsTemplates__smsCard"
                            onDelete={handleDelete(item)}
                            onEdit={handleEdit(item)}
                            template={item}
                        />
                    )}
                </Flex>
            </SkipUpdate>
        </JDcontainer>
        <NotificationTemplateModal key={(smsModalHook.info?.template?._id || "create") + "NotificationTemplateModal"} modalHook={smsModalHook} />
    </div>;
};

