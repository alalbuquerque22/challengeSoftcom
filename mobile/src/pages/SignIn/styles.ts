import styled from 'styled-components/native'
import Constants from 'expo-constants';
const Statusbarheight = `${Constants.statusBarHeight}px`



export const ImageBackground = styled.ImageBackground`
flex:1;
justify-content:center;
`


export const Container = styled.View`
align-items:center;
height:100%;
flex:1;
padding-top:${Statusbarheight};
`

export const Box = styled.View`
background-color:#ddd5;
flex:1;
width:100%;
padding:12%;
margin-top:20%;
justify-content:center;
align-items:center;
border-radius:50px;
opacity:0.98;

`

export const Text = styled.Text`
color:#fff;
font-size:24px;
font-family:Verdana;
`
export const SubText = styled.Text`
color:#e5f5f5;
font-size:18px;
font-family:Verdana;
`
export const BoxInputs = styled.View`
width:100%;
padding:24px;
font-family:Verdana;
`


export const TouchText = styled.Text`
color:#d2d2d2;
font-family:Verdana;

`

export const Label = styled.Text`
color:#fff;
font-family:Verdana;
padding:2%;

`

export const ButtonArea = styled.TouchableOpacity`
background-color:#233368;

border:2px;
border-color:#233368;
border-radius:8px;
margin-top:10px;
align-items:center;

`
export const TextButton = styled.Text`
color:#fff;
font-family:Verdana;

font-size:20px;
`
export const Input = styled.TextInput`
background-color:#fff;
width:100%;
margin-top:5px;
border:2px solid #fff;
border-radius:8px;
color:#dddddd;
font-size:24px;
`

export const Footer = styled.Text`
color: #FFF;
margin-top:25px;
height:5%;
font-size:20px;
align-items:center;
justify-content:center;
`
