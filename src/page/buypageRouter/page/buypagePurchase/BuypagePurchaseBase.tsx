import {
    autoComma,
    Col,
    Flex,
    Grid,
    InputText,
    JDcard,
    JDhorizen,
    JDlabel,
    JDtypho,
    Large,
} from "@janda-com/front";
import { isEmpty } from "lodash";
import React, { useContext } from "react";
import { useHistory } from "react-router";
import { AttributeInputs } from "../../../../component/attributeInputs/AttributeInputs";
import { BackStepBar } from "../../../../component/backstepBar/BackstepBar";
import { OptionsViewer } from "../../../../component/optionsViewer/OptionsViewer";
import { PrivacyModal } from "../../../../component/privacyModal/PrivacyModal";
import { TUsePurchase } from "../../../../hook/usePay";
import NiceElments from "../../../../nice/NiceElments";
import { SelectOptionInput } from "../../../../type/api";
import { getNiceProperty } from "../../utils/getNiceProperty";
import { BuypageContext } from "../buypageList/helper/context";
import { AnonyPurchaseForm } from "../components/AnonyPurchaseForm";
import { PaymethodRadios } from "./components/PaymethodRadio";
import { PolicyBlocks } from "./components/PolicyBlocks";
import { PurchaseBtn } from "./components/PurchaseBtn";

interface IProp extends TUsePurchase {
    options?: SelectOptionInput[];
    UnderAnonyMouseForm?: JSX.Element;
    SelectUnder?: JSX.Element;
    SelectViewer?: JSX.Element;
    PriceViewer?: JSX.Element;
    OverPlace?: JSX.Element;
    handleBackStep?: () => void;
}

export const BuyPagePurchaseBase: React.FC<IProp> = ({
    OverPlace,
    options,
    SelectViewer,
    SelectUnder,
    UnderAnonyMouseForm,
    userInfoHook,
    verificationHook,
    attrs,
    setAttrs,
    anonyUserInfo,
    niceAuthData,
    paymethodHook,
    policyModalHook,
    PriceViewer,
    policyIdHooks,
    hanldePurchase,
    handleBackStep,
    messageHook,
}) => {
    const history = useHistory();
    const { store, configure, noPayMethod } = useContext(BuypageContext);
    const buypage = store.buypage;
    const policies = buypage.policies || [];
    const purchaseLabel = configure.texts.purchase;
    return (
        <div>
            <BackStepBar onClick={handleBackStep} mb />
            {OverPlace}
            <JDcard>
                <Grid>
                    <Col lg={12} full={noPayMethod ? 12 : 6}>
                        <NiceElments
                            {...getNiceProperty({
                                anonyUserInfo,
                                niceAuthData,
                                store,
                            })}
                        />
                        <div>
                            <Large mb>선택정보</Large>
                            {SelectViewer}
                            {!isEmpty(options) && (
                                <div>
                                    <JDlabel txt="선택옵션" />
                                    <OptionsViewer options={options} />
                                </div>
                            )}
                        </div>
                        {SelectUnder}
                        {isEmpty(options) && !SelectUnder && !SelectViewer && (
                            <JDhorizen margin={3} />
                        )}
                        <Large mb>예약자정보</Large>
                        <AnonyPurchaseForm
                            userInfoHook={userInfoHook}
                            verificationHook={verificationHook}
                        />
                        {UnderAnonyMouseForm}
                        <AttributeInputs attrs={attrs} setAttrs={setAttrs} />
                    </Col>
                    {!noPayMethod && (
                        <Col lg={12} full={6}>
                            <div>
                                <Large mb>가격정보</Large>
                                {PriceViewer}
                                <JDhorizen margin={3} />
                                <PolicyBlocks
                                    policyIdHooks={policyIdHooks}
                                    policies={policies}
                                />
                                <JDhorizen margin={3} />
                                <PaymethodRadios
                                    selectedOption={
                                        paymethodHook.selectedOption
                                    }
                                    onChange={paymethodHook.onChange}
                                    paymethods={configure.payMethods}
                                />
                                <InputText
                                    mb
                                    label="전달사항"
                                    {...messageHook}
                                    textarea
                                />
                                <PurchaseBtn
                                    label={purchaseLabel.kr}
                                    hide={noPayMethod}
                                    hanldePurchase={hanldePurchase}
                                />
                            </div>
                        </Col>
                    )}
                    <PurchaseBtn
                        label={purchaseLabel.kr}
                        hide={!noPayMethod}
                        hanldePurchase={hanldePurchase}
                    />
                </Grid>
                <PrivacyModal modalHook={policyModalHook} />
            </JDcard>
        </div>
    );
};
