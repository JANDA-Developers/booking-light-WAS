import dayjs from "dayjs";

export const yyyymmdd = (date?:Date | null) => date ? dayjs(date).format("YYYY.MM.DD") : "";
export const yyyymmddHHmm = (date?:Date | null) => date ? dayjs(date).format("YYYY.MM.DD HH:mm") : "";
