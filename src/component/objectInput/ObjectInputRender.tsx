import React from "react";
import { InputComponent, JDinputType } from "./InputComponent";

export type IMetaData<T = any> = {
    [as in keyof T]: {
        description: string,
        type?: JDinputType,
        default: string
    }
}

interface IObjectInputRender<T = any> {
    value: T
    onChange: (data: T) => void;
    META?: IMetaData<T>
    lang?: "kr"
}

export const ObjectInputRender: React.FC<IObjectInputRender> = ({ value, onChange, META, lang = "kr" }) => {
    return <div>{Object.keys(value).map((key, index) => {
        const target = value[key];
        if (key === "index") return null;
        const _value = target[lang];
        let type: JDinputType = JDinputType.text;
        let label: string = target.description;


        if (key.includes("img")) {
            type = JDinputType.img
        }
        const handleOnChnage = (data: any = "") => {
            target[lang] = data
            onChange(value);
        }


        if (META) {
            if (!META[key]) {
                console.warn(`META 오브젝트에 ${key} 값은 존재하지 않습니다`)
                return null;
            }
            type = META[key].type || JDinputType.text
            label = META[key].description
        }


        return <InputComponent key={key + "ObjectInputRender"} onChange={handleOnChnage} value={_value} type={type} label={label} />
    })}
    </div>
}
