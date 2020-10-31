import React from 'react'

import {useNavigation}from '@react-navigation/native' 



import {BoxInputs,Button,ButtonText,Box} from './styles'
import Header from      '../../components/Header'
import Wallpaper from '../../assets/screen.jpg';
import {ContainerView} from '../../components/Container'
import {  ImageBackground, StyleSheet} from 'react-native'


export default function Home(){
    const navigation = useNavigation();

    
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
  });