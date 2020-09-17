import React from 'react'
import { JDicon, JDavatar } from '@janda-com/front';

type TuserInfo = {
    image: string,
    name: string,
    version: string
}

type Tservice = {
    icon: string,
    title: string
}

type TmodalInfo = {
    userInfo: TuserInfo,
    service: Tservice[]
}

interface IProps {
    modalInfo: TmodalInfo
}




const MypageModal: React.FC<IProps> = ({ modalInfo }) => {

    return (
        <div className="mypageModal__outer">
            <div className="mypageModal">
                <div className="mypageModal__userInfo">
                    <JDavatar img="" size="large" onClick={() => { }} />
                    <strong className="mypageModal__username">
                        {modalInfo.userInfo.name}
                    </strong>
                    <p className="mypageModal__version">
                        {modalInfo.userInfo.version}
                    </p>
                </div>
                <div className="mypageModal__service">
                    <ul>
                        {
                            modalInfo.service.map((list, i) => {
                                return <li key={"mypageLi" + i}>
                                    <a href="" className="mypageModal__serviceList" key={``}>
                                        <JDicon icon="exclamation" />
                                        <span> {list.title} </span>
                                    </a>
                                </li>
                            })
                        }
                    </ul>
                </div>
            </div>
        </div >
    )
}

export default MypageModal
