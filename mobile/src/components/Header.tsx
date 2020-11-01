import React from 'react'

import LogoImg from '../assets/logo.png'
import styled from 'styled-components/native'

export default function Header(){

    return(
    <LogoBox >
        <Image source ={LogoImg}/> 
     </LogoBox>
        
    )
}

           
export const LogoBox = styled.View`
    margin-top:10%;

    align-items:center;
`
export const Image = styled.Image`

`