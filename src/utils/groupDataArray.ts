import dayjs from "dayjs";

export const groupByDate = <T>(items: T[], key: keyof T) => {
    return items.reduce((groups, item) => {
        const date = dayjs(item[key] as any).format("YYYY-MM-DD");
        // @ts-ignore
        if (!groups[date]) {
            // @ts-ignore
            groups[date] = [];
        }
        // @ts-ignore
        groups[date].push(item);
        return groups;
    }, {});
}


export interface IGrouped<T> {
    date: string;
    items: T[]
}

export const groupDateArray = <_,T>(items:T[],key: keyof T):IGrouped<T>[] => {
    const groups = groupByDate(items,key);
    return Object.keys(groups).map((date) => {
        return {
            date,
            // @ts-ignore
            items: groups[date]
        };
    });
}
    