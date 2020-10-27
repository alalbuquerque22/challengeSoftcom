import React from 'react'

import {useNavigation}from '@react-navigation/native' 
import {
    Container,
    Footer,
    BoxInputs,
    Input
} from './styles'
import Header from      '../../components/Header'
import { Button } from 'react-native'


export default function SingIn(){
    const navigation = useNavigation()
    function navigateToHome(){
        navigation.navigate("Home")
    }
    function navigateToSignUp(){
        navigation.navigate("SignUp")
    }
     
    return(
        <Container >
            <Header/>
            <BoxInputs>
                <Input placeholder="Login"></Input>
                <Input placeholder="Senha"></Input>
                <Button title="Entrar" onPress={navigateToHome}>
                    
                </Button>
            </BoxInputs>
            <Footer>
            <Button title="Não Possuo cadastro" onPress={navigateToSignUp}/>
               
            </Footer>
        </Container>
    )
}