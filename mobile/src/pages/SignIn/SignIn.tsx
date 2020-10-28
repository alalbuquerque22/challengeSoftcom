import React from 'react'

import {useNavigation}from '@react-navigation/native' 
import {
    
    Footer,
    BoxInputs,
    Input,
    ButtonArea,
    Text,
    Label,
    
} from './styles'
import Header from      '../../components/Header'
import { ContainerView } from      '../../components/Container'
import { } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'


export default function SingIn(){
    const navigation = useNavigation()
    function navigateToHome(){
        navigation.navigate("Home")
    }
    function navigateToSignUp(){
        navigation.navigate("SignUp")
    }
     
    return(
        <ContainerView>
            <Header/>
            <BoxInputs>
                <Label>Login:</Label>
                <Input placeholder="Seu Email"></Input>

                <Label>Senha:</Label>
                <Input placeholder="Senha"></Input>
                <ButtonArea title="Entrar" onPress={navigateToHome}>
                    <Text>  Entrar  </Text>
                </ButtonArea>
            </BoxInputs>
            <Footer>
            <TouchableOpacity  onPress={navigateToSignUp}>
                <Text>
                Não Possuo cadastro
                </Text>
            </TouchableOpacity>
               
            </Footer>
        </ContainerView>
    )
}