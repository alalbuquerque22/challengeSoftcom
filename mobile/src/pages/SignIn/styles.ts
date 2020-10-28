import styled from 'styled-components/native'
import Constants from 'expo-constants';


const Statusbarheight = Constants.statusBarHeight
export const Container = styled.View`
background-color: #ff9c1a;
height:100%;
flex:1;
padding-top:${Statusbarheight};
padding:8px;
align-items:center;
`

export const BoxInputs = styled.View`
background-color:#ffb555;
flex:1;
width:100%;
padding:10%;
margin-top:20%;
justify-content:center;
border-radius:50px;
`
export const Text = styled.Text`
color:#fff;
font-family:Verdana;
`

export const Label = styled.Text`
color:#fff;
font-family:Verdana;
padding:2%;
`
export const Input = styled.TextInput`
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

export const ButtonArea = styled.TouchableOpacity`
background-color:#233368;
border:0px;
border-radius:10px;
margin-top:10px;




`