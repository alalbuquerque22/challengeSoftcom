import React from 'react'

import {useNavigation}from '@react-navigation/native' 



import {BoxInputs,Button,ButtonText,Box} from './styles'
import Header from      '../../components/Header'
import Wallpaper from '../../assets/screen.jpg';
import {ContainerView} from '../../components/Container'
import {  ImageBackground, StyleSheet,TouchableOpacity,Text} from 'react-native'
import { Ionicons } from '@expo/vector-icons';

export default function Home(){
    const navigation = useNavigation();
  
 
    function handleNavigateToHome(){
        navigation.navigate('SignIn')
    }
    
    function navigateToCreate(){
        navigation.navigate("CreateItems")
    }
    function navigateToShowItems(){
        navigation.navigate("ShowItems")
    }
    return(
        <ImageBackground source={Wallpaper} style={styles.image}>
            <ContainerView>
                <Header/>

            <TouchableOpacity onPress={handleNavigateToHome} style={styles.HandlingButtons}>
                <Text style={styles.BackButton}>
                    <Ionicons name="ios-arrow-round-back" size={24} color="#000000"  /> Voltar</Text>
                </TouchableOpacity>
            
           
                <Box >
                    <BoxInputs>
                    <Button onPress={navigateToCreate}>
                        <ButtonText> Cadastrar item </ButtonText>
                    </Button>
                    </BoxInputs>
                    <BoxInputs>
                        <Button onPress={navigateToShowItems}>
                            <ButtonText> Listar Itens</ButtonText>
                        </Button>
                    </BoxInputs>
                        
                </Box>
            </ContainerView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center"
    },
    HandlingButtons:{
        flexDirection:"row",
        width:"100%",
        marginTop:-40,
        marginBottom:-80,
        
        
        
    },
    BackButton:{
        color:"#000",
        marginLeft:"5%",
        fontSize:22,
        fontWeight:"bold",
        
    }
  });