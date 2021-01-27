import { Bold, JDcard, JDtypho, Thin } from '@janda-com/front'
import Splinter from '@janda-com/front/dist/components/splinter/Splinter'
import React from 'react'

const Footer = () => {
    return (
        <JDcard>
            <Bold> 회사소개 <Splinter /> 이용약관 <Splinter /> 개인정보처리방침 </Bold>
            <Thin color="grey3">Disclaimer: Legal information is not legal advice, read the disclaimer.</Thin>
        </JDcard>
    )
}

export default Footer
