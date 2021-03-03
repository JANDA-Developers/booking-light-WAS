import React from 'react'
import { JDdropDown, JDhorizen, JDicon, JDavatar, JDtypho } from '@janda-com/front';
import { IUseDropDown } from '@janda-com/front/dist/hooks/hook';
import { IIcons } from '@janda-com/front/dist/components/icons/declation';

export type TuserInfo = {
    image: string,
    name: string,
    version: string
}

export type Tservice = {
    icon: IIcons,
    title: string,
    onClick: () => void;
}

interface IProps {
    userInfo: TuserInfo;
    services: Tservice[]
    dropBoxHook: IUseDropDown
}

const ProfileModal: React.FC<IProps> = ({ userInfo, services, dropBoxHook }) => {
    const { image, name, version } = userInfo;

    return (
        <JDdropDown position="absolute" closeOnWindowClick  {...dropBoxHook} >
            <div className="profileModal">
                <div className="profileModal__userInfo">
                    <JDavatar img={image} size="large" />
                    <strong className="profileModal__username">
                        {name}
                    </strong>
                    <JDtypho color="grey3" size="small" className="profileModal__version">
                        {version}
                    </JDtypho>
                </div>
                <JDhorizen margin={3} />
                <div className="profileModal__service">
                    {
                        services.map((service, i) => {
                            return <JDtypho hover onClick={service.onClick} key={"profileLi" + i} mb flex color="grey3">
                                <JDicon mr="huge" size="small" icon={service.icon} />
                                <JDtypho size="small"> {service.title} </JDtypho>
                            </JDtypho>
                        })
                    }
                </div>
            </div>
        </JDdropDown>
    )
}

export default ProfileModal
