import React from 'react'
import { Button, Text, View } from 'react-native'

import {useNavigation}from '@react-navigation/native' 


import Header from      '../../components/Header'
export default function Home(){
    const navigation = useNavigation();

    
    function navigateToCreate(){
        navigation.navigate("CreateItems")
    }
    function navigateToShowItems(){
        navigation.navigate("ShowItems")
    }
    return(
        <View>
            <Header/>
            <View>
      
                <Button title="Cadastrar item" onPress={navigateToCreate}/>
                <Button title="Listar itens" onPress={navigateToShowItems}/>
            
           
            </View>
        </View>
    )
}