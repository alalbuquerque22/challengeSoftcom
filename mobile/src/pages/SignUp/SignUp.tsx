import React, {  useEffect, useRef, useState } from 'react'
import {
    Button,
    Box,
    Input,
    Footer,
    BoxInput,
    ButtonText,
    Text,
    SubText
} from './styles'
import Header from      '../../components/Header'
import {ContainerView} from '../../components/Container'
import { Formik,Field } from 'formik'
import * as Yup from 'yup'
import { ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

// import { TouchableOpacity } from 'react-native-gesture-handler'
import Wallpaper from '../../assets/screen.jpg';
import api from '../../services/api'
import { event } from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'



export default function SingUp(){
    const name = useRef(null);
    const email = useRef(null)
    const password = useRef(null)
    const {navigate} = useNavigation()
 
    function handleNavigateToHome(){
        navigate('SignIn')
    }
  

    const FormSchema = Yup.object().shape({
        name:Yup.string().required('Campo Obrigatorio'),
        email: Yup.string().email('Email Invalido').required('Campo Obrigatorio'),
        password:Yup.string().required('Campo Obrigatorio minimo 6 characteres').min(6),
    })
    return(
        <ImageBackground source={Wallpaper} style={styles.image}> 
        <ContainerView>
           
            <Header/>

            <TouchableOpacity onPress={handleNavigateToHome} style={styles.HandlingButtons}>
                <Text style={styles.BackButton}><Ionicons name="ios-arrow-round-back" size={24} color="#000000" /> Voltar</Text></TouchableOpacity>
            
           

            <Box>
            <Text>Bem Vindo!</Text>
            <SubText>Digite seus dados para o cadastro!</SubText>
                <Formik 
                initialValues={{
                    name:'',
                    email:'',
                    password:'',

                }}
                onSubmit={async(values,{resetForm})=>{
                
                    
              

                    try { let response = await api.post('/user',values)

                    console.log(response)
                        
                    } catch (error) {
                        console.log('erro na requisicao=> ',error ) 
                        
                    }
               
                 
                    resetForm()    
                }}
                validationSchema={FormSchema}
            
                >
                    
                {
                    ({values,handleChange,handleSubmit})=>(
                        <View>
                            
                            <BoxInput>
                                <Input 
                                placeholder=" 'João da silva'" 
                                ref={name} 
                                value={values.name} 
                                onChangeText={handleChange('name')}/>
                            </BoxInput>
                            <BoxInput>
                                <Input 
                                placeholder=" 'Email@email.com'"
                                ref={email} 
                                value={values.email} 
                                onChangeText={handleChange('email')}
                                />
                            </BoxInput>
                           
                            <BoxInput>
                                <Input 
                                placeholder=" Password" 
                                secureTextEntry 
                                ref={password} 
                                value={values.password} 
                                onChangeText={handleChange('password')}/>
                            </BoxInput>
                            <BoxInput>
                            <Button onPress={handleSubmit}>
                                <ButtonText> Cadastrar </ButtonText>
                            </Button>
                            </BoxInput>
                        </View>
                        
                    )
                }

                </Formik>
            </Box>
          
          <Footer/>
            
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
        fontWeight:"bold"
        
    }
  });