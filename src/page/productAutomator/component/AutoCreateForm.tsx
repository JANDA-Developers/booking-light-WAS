import { Bold, Flex, InputText, JDalign, JDbutton, JDhorizen, JDlabel, JDselect, Mb, opFind, selectOpCreater, TimePicker, useSelect, useTimePicker } from '@janda-com/front';
import { ISet } from '@janda-com/front/dist/types/interface';
import React, { useContext, useState } from 'react';
import AppContext from '../../../context';
import { FproductBookingTemplate_capacityDetails, ProductAutomatorBookingCreateInput, ProductBookingTemplateInput } from '../../../type/api';
import { HOURS_SELECT_OP, MINUTES_SELECT_OP, WeekOption } from '../../../type/const';
import { minsTohhmm24 } from '../../../utils/dateFormat';
import { Validater } from '../../../utils/Validater';
import { CapacityDetailEditor } from '../../product/component/CapacityDetailEditor';
import { ProductTemplateTable } from '../../product/component/ProductTemplateTable';

const IntervalOptions = selectOpCreater({
    count: 1440,
    start: 10,
    labelAdd: "분"
})

const DayOptions = selectOpCreater({
    count: 30,
    start: 1,
    labelAdd: "일"
})

interface IProp {
    data: ProductAutomatorBookingCreateInput
    setData: ISet<ProductAutomatorBookingCreateInput>
}

// TODO 타스처럼
export const AutoCreateForm: React.FC<IProp> = ({ data, setData }) => {
    const { selectedStore, isTimeMall } = useContext(AppContext);
    const items = selectedStore?.items || []

    const itemOps = items.map(item => ({
        label: item.name,
        value: item._id
    }))
    const [capacityDetails, setCapacityDetails] = useState<FproductBookingTemplate_capacityDetails[]>([])

    const startTimeHook = useTimePicker();
    const endTimeHook = useTimePicker();
    const inmtervalHook = useSelect({ label: "60분", value: 60 }, IntervalOptions)

    const capacityCount = capacityDetails?.[0]?.count || 0

    const targetItemOp = itemOps.find(ops => ops.value === data.targetItemId);
    const targetItem = items.find(item => item._id === targetItemOp?.value);


    const { validate } = new Validater([{
        value: startTimeHook.hour < endTimeHook.hour,
        failMsg: "시작시간 끝시간을 확인 해주세요.",
        id: "autoTime"
    }, {
        value: (inmtervalHook.selectedOption?.value || 0) > 10,
        failMsg: "설정간격을 입력 해주세요 (최소 간격은 10분.)",
        id: "autoTime"
    }, {
        value: capacityCount > 0,
        failMsg: "수량을 1 이상 입력 해주세요.",
        id: "monoSelectCounter"
    }])




    const generate = (): ProductBookingTemplateInput[] => {
        const interval = inmtervalHook.selectedOption?.value || 0;

        const startMin = (startTimeHook.hour * 60) + startTimeHook.min;
        const endMin = (endTimeHook.hour * 60) + endTimeHook.min;
        const diff = endMin - startMin
        const step = diff / interval;

        const intervalAdd = (index: number) => {
            return index * interval;
        }
        const capacity = isTimeMall ? capacityDetails?.[0]?.count : -1;
        const price = isTimeMall ? capacityDetails?.[0]?.price : 0;

        const inputs: ProductBookingTemplateInput[] = new Array(step).fill(null).map((_, index): ProductBookingTemplateInput => (
            {
                capacity,
                price,
                timeRangeForUse: {
                    end: minsTohhmm24(startMin + intervalAdd(index + 1)),
                    start: minsTohhmm24(startMin + intervalAdd(index))
                },
                capacityDetails,
                attrs: []
            }
        ));

        return inputs
    }

    const handleGenerate = () => {
        if (!validate()) return;
        const inputs = generate();
        data.templates = [...data.templates, ...inputs];
        setData({ ...data });
    }

    const handleDelete = () => {
        data.templates = [];
        setData({ ...data });
    }


    const selectedDaysOps = WeekOption.filter(op =>
        data.exceptedDayOfWeeks?.includes(op.value)
    )

    return <div >
        <Bold mb>기본 설정</Bold>
        <JDselect
            id="autoItem"
            mb
            label="자동생성 아이템 선택"
            selectedOption={targetItemOp}
            onChange={(op) => {
                data.targetItemId = op.value;
                setData({
                    ...data
                })
            }}
            options={itemOps}
        />
        {/* 크리에이터 이름 // 자동으로 아이템 이름으로 동일하게 */}
        <InputText onChange={(val: any) => {
            data.name = val;
            setData({ ...data })
        }} value={data.name} id="autoName" mb label="자동생성 이름" />
        {/* 크리에이터 description //자동으로 아이템 이름 설명++ */}
        <InputText onChange={(val: any) => {
            data.description = val;
            setData({ ...data })
        }} value={data.description || ""} id="autoDesc" mb label="자동생성 설명" textarea />

        <JDhorizen margin={3} />

        <Bold mb>생성계획 설정</Bold>
        {/* 시작 시간 ~*/}
        <Flex mb>
            <JDalign id="autoTime" mr>
                <JDlabel txt="언제부터" />
                <TimePicker
                    minOps={MINUTES_SELECT_OP}
                    hourOps={HOURS_SELECT_OP}
                    {...startTimeHook} />
            </JDalign>
            {/* 끝시간 ~*/}
            <JDalign mr>
                <JDlabel txt="언제까지" />
                <TimePicker
                    minOps={MINUTES_SELECT_OP}
                    hourOps={HOURS_SELECT_OP}
                    {...endTimeHook} />
            </JDalign>

            {/* Interval 흠 1024분 까지 */}
            <JDselect mb label="설정간격" {...inmtervalHook} />
        </Flex>
        {/* 아래 캐파시티로 */}
        <CapacityDetailEditor
            mode={isTimeMall ? "single" : undefined}
            onChange={setCapacityDetails}
            usageDetails={capacityDetails}
        />
        <Mb />

        {/* 제출버튼 누르면 생성된 내역에 추가  */}
        <Flex>
            <JDbutton id="autoTemplate" mr thema="primary" mode="border" mb size="long" onClick={handleGenerate}>생성제출하기</JDbutton>
            <JDbutton thema="error" mode="border" mb onClick={handleDelete}>비우기</JDbutton>
        </Flex>
        {/* 생성된 내역들 */}
        <ProductTemplateTable handleDelete={(template) => {
        }} products={data.templates} />
        <JDhorizen margin={2} />
        <Bold mb> 위 계획으로 매일 반복 생성합니다. </Bold>
        {/* 몇일앞까지 180일 */}
        <JDselect
            onChange={(op) => {
                const targetValue = opFind(op.value, DayOptions)?.value || 60;
                data.dateCount = targetValue;
                setData({ ...data });
            }}
            selectedOption={opFind(data.dateCount, DayOptions)}
            id="autoTill" mb label="몇일앞까지" options={DayOptions} />
        <JDselect id="autoDays" label="제외요일선택" isMulti onChanges={(ops) => {
            const weeks = ops?.map(op => op.value) || [];
            data.exceptedDayOfWeeks = weeks;
            setData({ ...data })
        }} selectedOptions={selectedDaysOps} options={WeekOption} />
        {/* 판매 카운틱 생성자 */}
    </div>;
};
