import React from 'react'
import { View, Text, Button, TextInput, Image } from 'react-native'

import Header from      '../../components/Header'
import LogoImg from '../../assets/logo.png'
export default function SingUp(){
    return(
        <View>
         <Header/>

            <View>
                <TextInput placeholder="Nome"/>
                <TextInput placeholder="Email"/>
                <TextInput placeholder="Senha"/>
            </View>
          
          <View>
            <Button
                onPress={()=>{}}
                title="Cadastrar"
                color="#841584"
                accessibilityLabel="Learn more about this purple button"
/>

            </View>
        </View>
    )
}