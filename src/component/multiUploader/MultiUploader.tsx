import { Flex, InputText, JDbutton } from "@janda-com/front";
import React, { useRef } from "react";
import { TUseMultiUpload } from "../../hook/useUpload";

interface IProp extends TUseMultiUpload {}

export const MultiUploader: React.FC<IProp> = ({ files, onChange }) => {
    const uploaderRef = useRef<HTMLInputElement>(null);

    const handleBtnClick = () => {
        if (uploaderRef?.current) {
            uploaderRef.current.value = "";
            uploaderRef?.current?.click();
        }
    };

    return (
        <div>
            {files?.map((file) => (
                <Flex>
                    <InputText readOnly value={file.name} />
                    <JDbutton size="small" thema="grey4" label="변경" />
                    <JDbutton size="small" thema="error" label="삭제" />
                </Flex>
            ))}
            <input
                style={{
                    position: "absolute",
                    opacity: 0,
                    width: "1px",
                    height: "1px",
                }}
                type="file"
                onChange={onChange}
                ref={uploaderRef}
            />
        </div>
    );
};
