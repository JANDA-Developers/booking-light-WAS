import dayjs from "dayjs";

export const yyyymmdd = (date?:Date | null) => date ? dayjs(date).format("YYYY.MM.DD") : "";
export const yyyymmddHHmm = (date?:Date | null) => date ? dayjs(date).format("YY년MM월DD일 HH시mm분") : "";
export const yyyymmddHHmmLabel = (date?:Date | null) => date ? dayjs(date).format("YY년MM월DD일 HH시mm분") : "";
export const yyyymmddHHmmRange = (from?:Date | null, to?:Date | null) => from ? dayjs(from).format("YYYY.MM.DD HH:mm") : "" + "~" + (to ? dayjs(to).format("YYYY.MM.DD HH:mm") : "");
export const yyyymmddHHmmRangeLabel = (from?:Date | null, to?:Date | null) => from ? dayjs(from).format("YY년MM월DD일 HH시mm분") : "" + "~" + (to ? dayjs(to).format("YYYY.MM.DD HH:mm") : "");
