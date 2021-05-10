import { JDphotoFrame, JDicon } from "@janda-com/front";
import React, { useRef } from "react";
import { TUseMultiUpload } from "../../hook/useUpload";

interface IProp extends TUseMultiUpload {}

export const GridImages: React.FC<IProp> = ({
    files,
    changeFile,
    onChange,
}) => {
    const uploaderRef = useRef<HTMLInputElement>(null);

    const handleUploadClick = () => {
        if (uploaderRef.current) {
            uploaderRef.current.value = "";
            uploaderRef?.current?.click();
        }
    };

    return (
        <div className="imagesInput">
            {files?.map((file) => (
                <JDphotoFrame
                    src={file.uri}
                    className="imagesInput__image"
                    key={file._id}
                >
                    <JDicon icon="close" />
                </JDphotoFrame>
            ))}
            <div
                onClick={handleUploadClick}
                className="imagesInput__imageAdd"
            />
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
