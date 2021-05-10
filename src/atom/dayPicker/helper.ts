export const getDateCharLang = () => {
  const MONTHS = [
    `1`,
    `2`,
    `3`,
    `4`,
    `5`,
    `6`,
    `7`,
    `8`,
    `9`,
    `10`,
    `11`,
    `12`,
  ];
  const WEEKDAYS_EN = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
  const WEEKDAYS_KR = ['일', '월', '화', '수', '목', '금', '토'];
  return { WEEKDAYS_EN, WEEKDAYS_KR, MONTHS };
};
