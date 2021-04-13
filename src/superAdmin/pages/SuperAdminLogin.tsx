import { InputText, getRefetch, JDbutton, JDcard, useInput } from '@janda-com/front';
import React from 'react';
import { useHistory } from 'react-router';
import { SUPER_ME } from '../../apollo/gql/user';
import { Centerlize } from '../../component/centerlize/Centerlize';
import { useSignIn } from '../../hook/useUser';
import { completeMsg } from '../../utils/onCompletedMessage';

interface IProp { }

export const SuperAdminLogin: React.FC<IProp> = () => {
    const idHook = useInput("");
    const history = useHistory();
    const passwordHook = useInput("");
    const [signIn] = useSignIn({
        ...getRefetch(SUPER_ME),
        onCompleted: ({ SignIn }) => {
            if (completeMsg(SignIn, "관리자님 어서오세요")) {
                history.push("/")
            };
        }
    })

    const handleLogin = () => {
        signIn({
            variables: {
                input: {
                    email: idHook.value,
                    password: passwordHook.value
                }
            }
        })
    }

    return <Centerlize>
         <JDcard head="JANDA 관리자로 로그인하기" >
        <InputText  {...idHook} mb label="아이디" />
        <InputText type="password" mb {...passwordHook} label="패스워드" />
        <JDbutton size="long" onClick={handleLogin} thema="primary">로그인하기</JDbutton>
    </JDcard>
    </Centerlize>;
};

export default SuperAdminLogin;