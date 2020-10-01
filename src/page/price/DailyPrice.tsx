import { JDalign, JDbutton, JDcontainer, JDpageHeader, JDselect, WindowSize } from '@janda-com/front';
import PriceTable from '@janda-com/price-table';
import React, { useState } from 'react';

interface IProp { }

export const DailyPrice: React.FC<IProp> = () => {
    const DummyData = new Array(31)
        .fill(0);
    const [data, setDatas] = useState<number[]>(DummyData);
    const [date, setDate] = useState(new Date());
    const [isSaved, setIsSaved] = useState<boolean>(true);
    const [selectedDays, setSelectedDays] = useState<number[]>([]);

    const setData = (data: number[]) => {
        setIsSaved(false);
        setDatas([...data]);
    };

    const saveAll = () => {
        let saveResult = window.confirm("기입하신 내용을 저장하시겠습니까?");
        if (saveResult) {
            setIsSaved(true);
        }
    };

    const cancelAll = () => {
        let cancelResult = window.confirm("선택한 날짜를 모두 취소하시겠습니까?");
        if (cancelResult) {
            setSelectedDays([]);
            setIsSaved(false);
        }
    };

    return (
        <div>
            <JDpageHeader title="가격설정" desc="상품별 일별 가격설정하기" />
            <JDcontainer size={WindowSize.full}>
                <PriceTable
                    onNavChange={() => {
                        setSelectedDays([]);
                        if (isSaved) {
                            return true;
                        } else {
                            return false;
                        }
                    }}
                    selectedDays={selectedDays}
                    setSelectedDays={setSelectedDays}
                    ToolElement={
                        <JDalign
                            flex
                            style={{
                                fontSize: "1rem"
                            }}
                        >
                            <div>
                                <JDselect
                                    // {...roomSelectHook}
                                    // onChange={e => {
                                    // console.log(e);
                                    // }}
                                    mr="normal"
                                />
                            </div>
                            <JDbutton
                                onClick={e => {
                                    saveAll();
                                }}
                            >
                                저장하기
                    </JDbutton>
                            <JDbutton
                                onClick={e => {
                                    cancelAll();
                                }}
                            >
                                선택전체취소
                    </JDbutton>
                        </JDalign>
                    }
                    setDate={setDate}
                    date={date}
                    setData={setData}
                    data={data}
                />
            </JDcontainer>
        </div>
    );
};

export default DailyPrice;
