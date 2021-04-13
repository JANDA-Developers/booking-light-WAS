import React, { useEffect } from "react";
import Color from "color";
import classNames from "classnames";
import ReactTooltip from "react-tooltip";
import PhotoFrame from "../../../component/photoFrame/PhotoFram";
import { card_space, IMG_REPO, Mb, Thin } from "@janda-com/front";
import { FbillingMethod } from "../../../type/api";
import { CardStyleInfo, CreaditCardTypesShort } from "./helper";
import { yyyymmddHHmm } from "../../../utils/timeFormater";

interface Iprops {
    isSelected?: boolean;
    payment: FbillingMethod;
    onCardClick?: (info: FbillingMethod) => void;
    className?: string;
    refProp?: any;
}

const CreaditCard: React.FC<Iprops> = ({
    payment,
    onCardClick,
    className,
    isSelected,
    refProp
}) => {
    const { createdAt, cardName, cardNo, cardType, billkeyStatus } = payment;
    const folderName = "card_logo/";

    const getLinear = (color: string) =>
        `radial-gradient(circle at 0% 0%, ${color} 0%, ${color} 40%, ${Color(color)
            .darken(0.15)
            .toString()} 100%)`;
    const classes = classNames("creaditCard", className, {
        "creaditCard--selected": isSelected
    });


    return (
        <div
            ref={refProp}
            onClick={() => onCardClick?.(payment)}
            style={{
                background: getLinear(CardStyleInfo[2].bg)
            }}
            className={classes}
        >
            <div className="creaditCard__logoWrap">
                {/* logo */}
                {/* creadi t+ */}
                <span className="JDsmall-text creaditCard__label">{cardName}</span>
            </div>
            <div className="creaditCard__cardNumber">{card_space(cardNo)} <Mb /></div>
            <div className="creaditCard__cardDate"><Thin size="tiny" mr="tiny">Since</Thin>{yyyymmddHHmm(createdAt)}</div>
        </div>
    );
};

export default CreaditCard;
