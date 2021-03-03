import { JDatomClasses } from "@janda-com/front";
import { IDiv } from "@janda-com/front/dist/types/interface";
import classNames from "classnames";

interface IVertical extends IDiv {
    margin: number;
    height?: number;

}
export const Vertical: React.FC<IVertical> = ({ margin, height, className, ...props }) => {
    const classes = classNames('JDvertical', className, {
        ...JDatomClasses(props)
    })

    const Height = height ? height * 0.4 + "rem" : "auto";
    const Margin = margin * 0.4;

    return <div {...props} style={{
        height: Height,
        margin: Margin + "rem",
        marginTop: 0,
        marginBottom: 0
    }} className={classes} />
}
