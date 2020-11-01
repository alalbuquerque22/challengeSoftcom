import React from 'react'

import {useNavigation}from '@react-navigation/native' 
import {    
    Footer,
    BoxInputs,
    Input,
    ButtonArea,
    TextButton,
    Text,
    SubText,
    Container,
    Box,
    TouchText,
} from './styles'
import Header from      '../../components/Header'
import { ImageBackground ,StyleSheet} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import Wallpaper from '../../assets/screen.jpg';


export default function SingIn(){
    const navigation = useNavigation()
    function navigateToHome(){
        navigation.navigate("Home")
    }
    function navigateToSignUp(){
        navigation.navigate("SignUp")
    }
     
    return(
        <ImageBackground source={Wallpaper} style={styles.image}> 
            <Container>
            
                <Header/>
                <Box>
                 <Text>Olá! </Text>
                 <SubText>Digite seus dados para entrar!</SubText>
                <BoxInputs>
                    <Input placeholder=" Email"></Input>
                    </BoxInputs>
                    <BoxInputs>
                    <Input placeholder=" Senha"></Input>

                    </BoxInputs>
                    <BoxInputs>
                        <ButtonArea title="Entrar" onPress={navigateToHome}>
                            <TextButton>  Entrar   </TextButton>
                        </ButtonArea>
                    </BoxInputs>
                
                </Box>
                <Footer>
                <TouchableOpacity  onPress={navigateToSignUp}>
                    <TouchText>
                    Não possui cadastro?
                    </TouchText>
                </TouchableOpacity>
                
                </Footer>
            </Container>
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