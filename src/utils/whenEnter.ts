
export const whenEnter = (callBack:(e:React.KeyboardEvent<HTMLInputElement>)=>void) => (e:React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
        callBack(e)
    }
}