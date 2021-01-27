export const dupNaming = (originArr:string[],str: string, index: number) => {
    const sliced = originArr.slice(0, index - 1);
    const dupNumber = sliced.filter(s => s === str).length;

    if (dupNumber) {
        return str + `(${dupNumber})`
    } else {
        return str
    }
}