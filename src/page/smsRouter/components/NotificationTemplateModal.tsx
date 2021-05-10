import {
    InputText,
    Col,
    Grid,
    IUseModal,
    JDbutton,
    JDcard,
    JDhorizen,
    JDmodal,
    JDselect,
    Large,
    opFind,
    useInput,
    useSelect,
    JDtypho,
    JDlabel,
} from "@janda-com/front";
import React, { useContext, useRef } from "react";
import { ModalBtn } from "../../../component/btns/ModalBtn";
import DotButton from "../../../component/dotButton/DotButton";
import JDEditor from "../../../component/editor/Editor";
import AppContext from "../../../context";
import { useCopy } from "../../../hook/useCopy";
import {
    useTemplateCreate,
    useTemplateDelete,
    useTemplateUpdate,
} from "../../../hook/useNotification";
import {
    NotificationMethod,
    notificationTemplateList_NotificationTemplateList_items,
    NotificationTriggerEvent,
    NotificationTemplateCreateInput,
} from "../../../type/api";
import {
    DEFAULT_EMAIL_SENDER,
    DEFAULT_SENDER,
    NOTI_METHOD_OPS,
} from "../../../type/const";
import { omits } from "../../../utils/omits";
import { completeMsg } from "../../../utils/onCompletedMessage";
import { promptConfirm } from "../../../utils/prompt";
import { Validater } from "../../../utils/Validater";
import { EMAIL_TEMPLATE, PurchaseChangeAble, SMS_TEMPLATE } from "../helper";
import MsgTypeViewer from "./MsgTypeViewer";
import { TriggerCreater } from "./TriggerCreater";

export interface ISmsDetailModalInfo {
    template?: notificationTemplateList_NotificationTemplateList_items;
}

interface IProp {
    modalHook: IUseModal<ISmsDetailModalInfo>;
}

export const NotificationTemplateModal: React.FC<IProp> = ({ modalHook }) => {
    const { info } = modalHook;
    const isCreate = !info?.template;
    const {
        _id,
        content: defaultContent,
        createdAt,
        description,
        name,
        notificationMethod,
        replacers,
        updatedAt,
        trigger: defaultTrigger,
    } = info?.template || {};
    const { selectedStoreId } = useContext(AppContext);

    const smsTypeHook = useSelect(
        opFind(notificationMethod, NOTI_METHOD_OPS),
        NOTI_METHOD_OPS
    );
    const titleHook = useInput(name || "");
    const descriptionHook = useInput(name || "");
    const contentHook = useInput(defaultContent || "");
    const refContainer = useRef();

    const [triggers, setTriggers] = useCopy(defaultTrigger || []);
    const includeDefaultSender = triggers.find(
        (trigger) =>
            trigger.sender === DEFAULT_SENDER ||
            trigger.sender === DEFAULT_EMAIL_SENDER
    );

    const [templateUpdate] = useTemplateUpdate({
        onCompleted: ({ NotificationTemplateUpdate }) => {
            completeMsg(NotificationTemplateUpdate, "업데이트 완료");
            modalHook.closeModal();
        },
    });
    const [templateDelete] = useTemplateDelete({
        onCompleted: ({ NotificationTemplateDelete }) => {
            completeMsg(NotificationTemplateDelete, "템플릿 삭제완료");
            modalHook.closeModal();
        },
    });
    const [templateCreate] = useTemplateCreate({
        onCompleted: ({ NotificationTemplateCreate }) => {
            completeMsg(NotificationTemplateCreate, "템플릿 생성완료");
            modalHook.closeModal();
        },
    });

    const method = smsTypeHook.selectedOption?.value;
    const nextData: NotificationTemplateCreateInput = {
        method: method!,
        content: contentHook.value,
        name: titleHook.value,
        description: descriptionHook.value,
        triggers: omits(triggers).map((trigger) => ({ ...trigger })),
    };

    const { validate } = new Validater([
        {
            value: nextData.name,
            failMsg: "타이틀을 입력 해주세요.",
        },
        {
            value: nextData.content,
            failMsg: "콘텐츠 값을 입력 해주세요.",
        },
    ]);

    const withDefaultSenderWarnning = () => {
        if (
            nextData.method === NotificationMethod.SMS &&
            includeDefaultSender
        ) {
            return confirm(`
            기본발신자가 포함된 템플릿을 생성할 경우 
            발신문자 끝에 회신번호로 상점연락처가 포함되어 발신됩니다.
            `);
        }
        return true;
    };

    const handleCreate = () => {
        if (validate()) {
            if (withDefaultSenderWarnning())
                templateCreate({
                    variables: {
                        input: omits(nextData),
                    },
                });
        }
    };

    const handleUpdate = () => {
        if (validate()) {
            if (withDefaultSenderWarnning()) {
                templateUpdate({
                    variables: {
                        input: omits(nextData, ["method"]),
                        templateId: _id,
                    },
                });
            }
        }
    };

    const handleDelete = () => {
        promptConfirm(
            name || "",
            `템플릿을 삭제하실려면 ${name}을 정확하게 입력 해주세요.`,
            () => {
                templateDelete({
                    variables: {
                        templateId: _id,
                    },
                });
            }
        );
    };

    const handleAddTrigger = () => {
        triggers.push({
            __typename: "NotificationTrigger",
            event: NotificationTriggerEvent.PURCHASE_BUNDLE_CREATE_COMPLETE,
            isEnabled: false,
            sender: "",
            tags: [],
            storeIds: [],
        });

        setTriggers([...triggers]);
    };

    const handleAddTemplateString = (value: string) => () => {
        const content = contentHook.value + value;
        contentHook.onChange(content);
    };

    const isSms = smsTypeHook.selectedOption?.value === NotificationMethod.SMS;

    return (
        <JDmodal
            className="smsTemplateModal"
            foot={
                <div>
                    <ModalBtn mr onClick={handleDelete} thema="error">
                        삭제하기
                    </ModalBtn>
                    <ModalBtn
                        mr
                        onClick={handleUpdate}
                        hide={isCreate}
                        thema="primary"
                    >
                        수정하기
                    </ModalBtn>
                    <ModalBtn
                        onClick={handleCreate}
                        hide={!isCreate}
                        thema="primary"
                    >
                        생성하기
                    </ModalBtn>
                </div>
            }
            {...modalHook}
            head={{ title: "발신 템플릿" }}
        >
            <Grid>
                <Col full={6} lg={12}>
                    {isCreate && (
                        <JDselect
                            mb
                            {...smsTypeHook}
                            label={"템플릿 발신 방법"}
                        />
                    )}
                    <InputText mb {...titleHook} label={"템플릿 타이틀"} />
                    <InputText
                        className="smsTemplateModal__preview"
                        mb
                        textarea
                        {...descriptionHook}
                        label={"요약정보"}
                    />
                    {PurchaseChangeAble.map((replace, index) => (
                        <JDbutton
                            onClick={handleAddTemplateString(replace.value)}
                            key={"replaceBtn" + index}
                            mr="small"
                            mb="small"
                            size="small"
                            mode="border"
                        >
                            {replace.label}
                        </JDbutton>
                    ))}
                </Col>
                <Col full={6} lg={12}>
                    {isSms ? (
                        <InputText
                            className="smsTemplateModal__preview"
                            textarea
                            {...contentHook}
                        />
                    ) : (
                        <JDEditor
                            model={contentHook.value}
                            setModel={(value) => {
                                contentHook.onChange(value);
                            }}
                        />
                    )}
                    {isSms && <MsgTypeViewer msg={contentHook.value} />}
                </Col>
            </Grid>
            <JDhorizen margin={3} />
            <JDtypho mb>발신트리거 설정</JDtypho>
            {triggers.map((trigger, index) => (
                <TriggerCreater
                    templateMethod={method}
                    key={index + "trriggerCreater"}
                    onDelete={() => {
                        triggers.splice(index, 1);
                        setTriggers([...triggers]);
                    }}
                    onChange={() => {
                        setTriggers([...triggers]);
                    }}
                    trigger={trigger}
                />
            ))}
            <DotButton onClick={handleAddTrigger}>자동발신하기</DotButton>
        </JDmodal>
    );
};
