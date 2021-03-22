
export const generateLanguageProxy = <T>(buypageTexts:T) => {
    const languageHandler = {
        get: function(target:any, prop:any, receiver:any) {
            if(!target[prop]) return;
            return target[prop]["kr"]
        }
    }; 


    let l: Record<keyof T, string>
    l =new Proxy(buypageTexts, languageHandler);    

    // TODO for ie

    return l;
}
