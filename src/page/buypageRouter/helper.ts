
export const generateLanguageProxy = <T>(buypageNormalTexts:T) => {
    const languageHandler = {
        get: function(target:any, prop:any, receiver:any) {
            if(!target[prop]) return;
            return target[prop]["kr"]
        }
    }; 


    let l: Record<keyof T, string>
    l =new Proxy(buypageNormalTexts, languageHandler);    

    // TODO for ie

    return l;
}
