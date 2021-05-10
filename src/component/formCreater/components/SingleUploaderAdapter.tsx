import React, { useEffect } from "react";
import { useSingleUpload } from "../../../hook/useUpload";
import { Fattribute } from "../../../type/api";
import { DEFAULT_FILE } from "../../../type/const";
import { TagKey } from "../../../type/enum";
import SingleUploader from "../../singleUploader/SingleUploader";

interface IProp {
    attr?: Fattribute;
    value?: string;
    onChange?: (val: string) => void;
}

export const SingleUplaoderAdapter: React.FC<IProp> = ({
    attr,
    value,
    onChange,
}) => {
    const formFileUri = attr?.tags?.find((tag) => tag.key === TagKey.FORM_FILE)
        ?.value;
    const singleUploaderHook = useSingleUpload({
        ...DEFAULT_FILE,
        uri: value || "",
    });

    useEffect(() => {
        if (singleUploaderHook.uri) onChange?.(singleUploaderHook.uri);
    }, [singleUploaderHook.uri]);

    return (
        <SingleUploader
            formFile={
                formFileUri
                    ? {
                          uri: formFileUri,
                          name: "양식받기",
                      }
                    : undefined
            }
            {...singleUploaderHook}
        />
    );
};
