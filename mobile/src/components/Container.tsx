import React from 'react'
import styled from 'styled-components/native'
import Constants from 'expo-constants';


export default function Container(){

return<ContainerView/>
}
const Statusbarheight = Constants.statusBarHeight
export const ContainerView = styled.View`
background-color: #ff9c1a;
height:100%;
flex:1;
padding-top:${Statusbarheight};
padding:8px;
align-items:center;
`