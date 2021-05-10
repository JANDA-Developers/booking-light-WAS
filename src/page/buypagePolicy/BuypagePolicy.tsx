import { Flex, InputText, JDbadge, JDcard, JDcheckBox, JDcontainer, JDlabel, JDpageHeader, JDpolicyViewer, s4, toast, useCheckBox, useInput } from '@janda-com/front';
import React, { useContext, useState } from 'react';
import { FoldCard } from '../../atom/folderCard/FoldCard';
import { BackStepBar } from '../../component/backstepBar/BackstepBar';
import { CardBtn } from '../../component/btns/ModalBtn';
import DotButton from '../../component/dotButton/DotButton';
import { JDEditor } from '../../component/editor/Editor';
import AppContext from '../../context';
import { useBuypagePolicyDelete, useBuypagePolicyUpdate } from '../../hook/useBuypage';
import { Fpolicy, me_Me_stores_buypage_policies } from '../../type/api';
import { completeMsg } from '../../utils/onCompletedMessage';
import { promptConfirm } from '../../utils/prompt';

interface IProp { }

export const BuypagePolicy: React.FC<IProp> = () => {
    const { selectedStore, selectedStoreId } = useContext(AppContext)
    const policies = selectedStore?.buypage.policies || [];
    const [selectPolicy, setSelectPolicy] = useState<Fpolicy>()
    const [mode, setMode] = useState<"edit" | "view">("view")
    const [content, setContent] = useState("");
    const editMode = mode === "edit";
    const createMode = editMode && selectPolicy === undefined;
    const titleHook = useInput("");

    const [policyUpdate] = useBuypagePolicyUpdate({
        awaitRefetchQueries: true,
        onCompleted: ({ BuypagePolicyUpdate }) => {
            completeMsg(BuypagePolicyUpdate, "폴리시 수정")
        }
    });
    const [policyDelete] = useBuypagePolicyDelete({
        onCompleted: ({ BuypagePolicyDelete }) => {
            completeMsg(BuypagePolicyDelete, "폴리시 삭제")
        }
    });


    const requireHook = useCheckBox(false)

    const handleToCreate = () => {
        setSelectPolicy(undefined);
        setMode("edit")
    }

    const handleCreate = () => {
        const version = selectPolicy?.version || 0;
        policyUpdate({
            variables: {
                input: {
                    content,
                    key: selectPolicy?.key || s4(),
                    name: titleHook.value,
                    require: !!requireHook.checked,
                    version: version + 1
                },
                storeId: selectedStoreId
            }
        })
    }


    const handleEdit = (policy: me_Me_stores_buypage_policies) => () => {
        setSelectPolicy(policy);
        setMode("edit")
        titleHook.onChange(policy.name)
        requireHook.onChange(policy.require)
        setContent(policy.content)
    }

    const handleDelete = (policy: me_Me_stores_buypage_policies) => () => {
        promptConfirm(policy.name, `아이템을 삭제하실려면 ${policy.name}을 정확하게 입력 해주세요.`, () => {
            policyDelete({
                variables: {
                    policyKey: policy.key,
                    storeId: selectedStoreId
                }
            })
        })
    }

    return <div>
        <JDpageHeader title="예약 폴리시 관리" desc="예약페이지에서 동의받을 폴리시를 설정 해주세요." />
        <JDcontainer verticalPadding>
            {!editMode && <div>
                {policies.map(policy =>
                    <FoldCard mb key={policy._id} foot={
                        <div>
                            <CardBtn thema="primary" mr onClick={handleEdit(policy)}>수정하기</CardBtn>
                            <CardBtn thema="error" onClick={handleDelete(policy)}>삭제하기</CardBtn>
                        </div>} title={<Flex>{policy.name}   <JDlabel require={policy.require} mr /> <JDbadge size="small" thema="grey2">Version {policy.version}</JDbadge></Flex>} >
                        <JDpolicyViewer>
                            <div dangerouslySetInnerHTML={{
                                __html: policy.content
                            }}></div>
                        </JDpolicyViewer>
                    </FoldCard>
                )}
                <DotButton onClick={handleToCreate}>추가하기</DotButton>
            </div>}
            {editMode && <div>
                <BackStepBar mb onClick={() => {
                    setMode("view")
                    setSelectPolicy(undefined)
                    titleHook.onChange("")
                    requireHook.onChange(false)
                    setContent("")
                }} label="뒤로가기" />
                <JDcard foot={
                    <div>
                        <CardBtn thema="primary" mr onClick={handleCreate}>{createMode ? "생성하기" : "수정하기"}</CardBtn>
                        {selectPolicy && <CardBtn onClick={handleDelete(selectPolicy)}>삭제하기</CardBtn>}
                    </div>
                }>
                    <InputText {...titleHook} mb label="폴리시 타이틀" />
                    <JDcheckBox mb label="필수여부" {...requireHook} />
                    <JDEditor label="폴리시" setModel={setContent as any} model={content} />
                </JDcard>
            </div>
            }
        </JDcontainer>
    </div>;
};

export default BuypagePolicy;