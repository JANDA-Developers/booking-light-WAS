import { useQuery } from '@apollo/client';
import { JDpreloader, s4 } from '@janda-com/front';
import { IselectedOption } from '@janda-com/front/dist/types/interface';
import React from 'react';
import { ME } from './apollo/queries';
import App from './App';
import { me } from './type/api';
import { GET_EVERY } from './type/const';
import extractDoc from './utils/dataExtraction';

interface IProp { }

export const AppWrap: React.FC<IProp> = () => {

    const { data, loading, refetch: authRefetch } = useQuery<me>(ME, { onError: () => { } })
    const me = data?.Me
    const stores = data?.Me?.stores || []

    console.log("stores");
    console.log(stores);

    if (loading) return <JDpreloader page loading />
    //항상 새로운 PROP를 공급 Loading으로 언마운트 시키기떄문.
    return <App me={me || undefined} stores={stores} authRefetch={authRefetch} />;
};

export default AppWrap;