import React, {useState, createContext} from 'react';

type TSideState = {
    state:boolean
}

// export const StateContext = createContext<TSideState | undefined>();

const StateContextProvider = (props:any) => {
    const [sideOpen,setSideOpen]  = useState<boolean>(true);

    const changeSideState = (state:boolean) => {
        setSideOpen(state);
    }

    console.log('State Context rendered');

    return (
        <div></div>
        // <StateContext.Provider value={{sideOpen, changeSideState}}>
        //     { props.children }
        // </StateContext.Provider>
    )

}


// export default StateContextProvider
