import { JDcard, JDcontainer, JDpageHeader, WindowSize } from "@janda-com/front";
import React, { useState } from "react";
import Account from "./components/Account";
import { StaticListWrap } from "./components/StaticListWrap";
import Statistic from "./components/Statistic";

export const Static = () => {

    const [tap, setTap] = useState(1);

    const activateStyle = (i: number) => ({
        onClick: () => { setTap(i) },
        activate: tap === i,
        decoColor: tap === i ? '#00C431' : undefined,
    })

    return <div>
        <JDpageHeader title="정산" desc="정산 내역에 따른 매출을 통계로 확인하고 출금신청 할 수 있습니다." />
        <JDcontainer size={WindowSize.full}>
            <JDcard
                bookMarks={[
                    {
                        children: '정산계좌',
                        ...activateStyle(1),
                    },
                    {
                        children: '정산목록',
                        ...activateStyle(2)
                    },
                    {
                        children: '통계',
                        ...activateStyle(3)
                    },
                ]}>
                <div>
                    {tap === 1 ? <Account /> : undefined}
                    {tap === 2 ? <StaticListWrap /> : undefined}
                    {tap === 3 ? <Statistic /> : undefined}
                </div>
            </JDcard>
        </JDcontainer>
    </div>
}

export default Static