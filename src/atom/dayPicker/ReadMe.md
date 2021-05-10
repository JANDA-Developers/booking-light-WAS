# DayPicker

<a href="http://react-day-picker.js.org/" target="_blank">개발문서</a>
[개발문서](http://react-day-picker.js.org/){:target="\_blank"}
<a href="https://github.com/gpbl/react-day-picker" target="_blank">GitHub</a>

# 기본

DayPikcerInput은 DayPicker 로 부터 State를 Prop로 받습니다.

## Format

- 포멧방법 [dayjs](https://dayjs.com/)
- DayPikcerInput 안에서 언어 따로 import 해야합니다.

## Map

- Caption : 년도 월일 나오는곳
- Information : 정보가 나오는곳
- Navbar : 버튼 위치한곳
- DayPicker.scss 에서 Horizen.scss 를 호출합니다.

## Props

| Props   | Tpye | Description       | Options | Require | Default |
| ------- | ---- | ----------------- | ------- | ------- | ------- |
| horizen | bool | 수평달력으로 변환 |         | X       | false   |
