import { IselectedOption } from "@janda-com/front/dist/types/interface";

export function enumToOption<T, D extends keyof T>(
    LANG: any,
    key: string,
    value: T,
    nullable?: boolean
  ): IselectedOption<D>[] {
    let result: IselectedOption<D>[] = [];
  
    if (nullable)
      result.push({
        label: 'Select',
        value: null as any,
      });
  
    for (const key2 in value) {
      const label = LANG(key, key2);
      if (!label) {
        console.error(key + ' In LANG ' + key2 + ' Is not exsist');
        continue;
      }
      result.push({
        label,
        value: value[key2] as any,
      });
    }
  
    return result;
  }
  