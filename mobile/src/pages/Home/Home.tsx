import React from 'react'
import {  View } from 'react-native'

import {useNavigation}from '@react-navigation/native' 
import {BoxInputs,Button,ButtonText} from './styles'

import Header from      '../../components/Header'
import {ContainerView} from '../../components/Container'
export default function Home(){
    const navigation = useNavigation();

    
    function navigateToCreate(){
        navigation.navigate("CreateItems")
    }
    function navigateToShowItems(){
        navigation.navigate("ShowItems")
    }
    return(
        <ContainerView>
            <Header/>
            <BoxInputs >
                <Button onPress={navigateToCreate}>
                    <ButtonText> Cadastrar item </ButtonText>
                </Button>
                <Button onPress={navigateToShowItems}>
                    <ButtonText> Listar Itens</ButtonText>
                </Button>
                       
            </BoxInputs>
        </ContainerView>
    )
}