export function mergeDeepOnlyExsistProperty(origin:any,merge:any) {
    const isObject = (obj: any) => obj && typeof obj === 'object';

    Object.keys(origin).forEach(key => {
        const originValue = origin[key];
        const mergeValue = merge[key];

        if (Array.isArray(originValue) && Array.isArray(mergeValue)) {
            origin[key] = [...mergeValue]
        }
        else if (isObject(originValue) && isObject(mergeValue)) {
            origin[key] = mergeDeepOnlyExsistProperty(originValue, mergeValue);
        }

        else {
            if(mergeValue !== undefined)
                origin[key] = mergeValue;
        }
    })
    return origin;
}


export const merge = mergeDeepOnlyExsistProperty;