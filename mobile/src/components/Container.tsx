import React from 'react'
import styled from 'styled-components/native'
import Constants from 'expo-constants';

export default function Container(){

return(
   
    <ContainerView/>
)}

const Statusbarheight = `${Constants.statusBarHeight}px`

export const ContainerView = styled.View`
color:#525252;
height:100%;
flex:1;
padding-top:${Statusbarheight};

align-items:center;

`

