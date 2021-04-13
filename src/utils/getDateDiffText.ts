import dayjs from "dayjs";

export const getDateDiffText =(date:Date) => {
    let dateText = dayjs(date).format('YYYY-MM-DD');
    const timeDiff = Math.abs(dayjs(date).diff(new Date(), 'h'));
    const dateDiff = Math.abs(dayjs(date).diff(new Date(), 'd'));
  
    if (dateDiff < 1) {
      dateText = `${timeDiff}시간 전`;
    }  else {
        dateText = `${dateDiff}일 전`
    }

    return dateText;
}