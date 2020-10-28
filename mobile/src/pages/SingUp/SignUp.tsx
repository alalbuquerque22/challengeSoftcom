import React from 'react'
import { } from 'react-native'
import {
    Button,
    BoxInputs,
    Input,
    Footer,
    ButtonText,
} from './styles'
import Header from      '../../components/Header'
import {ContainerView} from '../../components/Container'
import LogoImg from '../../assets/logo.png'
export default function SingUp(){
    return(
        <ContainerView>
         <Header/>

            <BoxInputs>
                <Input placeholder=" Nome" placeholderTextColor="#FFF"/>
                <Input placeholder=" Email" placeholderTextColor="#FFF"/>
                <Input placeholder=" Senha" placeholderTextColor="#FFF"/>
                <Button onPress={()=>{}}>
                    <ButtonText> Cadastrar </ButtonText>
                </Button>
            </BoxInputs>
          
          <Footer/>
            
        </ContainerView>
    )
}