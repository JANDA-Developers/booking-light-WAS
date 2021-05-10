import {
    InputText,
    JDbutton,
    JDcard,
    JDcheckBox,
    JDlabel,
    JDselect,
    JDtagInput,
    opFind,
    s4,
    useCheckBox,
    useInput,
    useSelect,
} from "@janda-com/front";
import React from "react";
import { useTagInput } from "../../../hook/useTagInput";
import { useSingleUpload } from "../../../hook/useUpload";
import { DisplayType, Fattribute, Fattribute_tags } from "../../../type/api";
import { INPUT_OPS } from "../../../type/const";
import { TagKey } from "../../../type/enum";
import { Validater } from "../../../utils/Validater";
import SingleUploader from "../../singleUploader/SingleUploader";

interface IProp {
    attribute?: Fattribute;
    onSubmit: (attribute: Fattribute) => void;
}

export const Controller: React.FC<IProp> = ({ onSubmit, attribute }) => {
    const defaultDisplayType = attribute?.displayType;
    const defaultDisplayTypeOp = opFind(defaultDisplayType, INPUT_OPS);
    const typeHook = useSelect<DisplayType>(defaultDisplayTypeOp, INPUT_OPS);
    const labelHook = useInput(attribute?.label || "");
    const placeHolderHook = useInput(attribute?.placeHolder || "");
    const requireHook = useCheckBox(!!attribute?.require);
    const singleUploaderHook = useSingleUpload();
    const optionsHook = useTagInput();

    const displayType: DisplayType =
        typeHook.selectedOption?.value || DisplayType.TEXT_INPUT;

    const holderABlist = [DisplayType.TEXT_INPUT];
    const holderAB = holderABlist.includes(displayType);

    const isDropBox = displayType === DisplayType.DROPDOWN;
    const isFile = displayType === DisplayType.FILE;

    const fileTag = singleUploaderHook.uri
        ? [
              {
                  key: TagKey.FORM_FILE,
                  value: singleUploaderHook.uri,
              } as Omit<Fattribute_tags, "__typename">,
          ]
        : [];

    const nextData: Fattribute = {
        __typename: "Attribute",
        displayType,
        key: attribute?.key || s4(),
        label: labelHook.value,
        options: optionsHook.tags,
        placeHolder: placeHolderHook.value,
        require: requireHook.checked,
        default: "",
        tags: fileTag as any,
        value: "",
    };

    const { validate } = new Validater([
        {
            value: labelHook.value,
            id: "LabelInput",
            failMsg: "라벨값은 필수 입니다.",
        },
        {
            value: !isDropBox || optionsHook.tags.length > 0,
            id: "tagInput",
            failMsg: "선택 옵션을 넣어주세요.",
        },
    ]);

    const handleSubmitData = () => {
        if (validate()) onSubmit(nextData);
    };

    return (
        <JDcard
            className="controller"
            head="입력란 조정"
            mode="border"
            foot={
                <>
                    <JDbutton
                        size="long"
                        mode="border"
                        iconProp={{ icon: attribute ? "edit" : "addCircle" }}
                        mr
                        onClick={handleSubmitData}
                        thema="primary"
                    >
                        {attribute ? "수정하기" : "생성하기"}
                    </JDbutton>
                    {/* {handleDelete && <JDbutton hide={!attribute} onClick={handleDelete} thema="error" >삭제하기</JDbutton>} */}
                </>
            }
        >
            <>
                <JDselect z={5} mb label="입력 타입선택" {...typeHook} />
                <InputText mb {...labelHook} label="라벨" />
                {holderAB && (
                    <InputText
                        mb
                        id="LabelInput"
                        {...placeHolderHook}
                        label="플레이스 홀더"
                    />
                )}
                {isDropBox && (
                    <div>
                        <JDlabel txt="선택항목 입력" />
                        <JDtagInput
                            id="tagInput"
                            className="controller__dropboxInput"
                            mb
                            {...optionsHook}
                        />
                    </div>
                )}
                {isFile && (
                    <div>
                        <JDlabel txt="양식파일" />
                        <SingleUploader {...singleUploaderHook} />
                    </div>
                )}
                <JDcheckBox size="small" {...requireHook} label="필수" />
            </>
        </JDcard>
    );
};
