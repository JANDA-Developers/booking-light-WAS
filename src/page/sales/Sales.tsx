import { JDcard, JDcontainer, WindowSize } from "@janda-com/front";
import React, { useState } from "react";
import ProductViewer from "../../component/ProductViewer/ProductViewer";
import Account from "./components/Account";

export const Sales = () => {

    const [tap, setTap] = useState(1);

    const activateStyle = (i: number) => ({
        activate: tap === i,
        decoColor: tap === i ? '#00C431' : undefined,
    })

    return <div>
        <JDcontainer size={WindowSize.full}>
            <JDcard
                bookMarks={[
                    {
                        children: '부킹',
                        ...activateStyle(1)
                    },
                    {
                        children: '타스',
                        ...activateStyle(2)
                    },
                    {
                        children: '라이트',
                        ...activateStyle(3)
                    },
                ]}>
                <div>
                    {tap === 1 ? <Account registered /> : undefined}
                    {tap === 2 ? <Account registered /> : undefined}
                </div>
            </JDcard>
        </JDcontainer>
    </div>
}

export default Sales