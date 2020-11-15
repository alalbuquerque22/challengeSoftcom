import React,{useEffect, useRef} from 'react'
import { View,StyleSheet,TouchableOpacity,Text} from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Header from '../../components/Header'
import {ContainerView} from '../../components/Container'
import {Button,Box,BoxInputs,Texto,Input,ButtonText} from './styles'
import { ImageBackground } from '../SignIn/styles'
import Wallpaper from '../../assets/screen.jpg';
import api from '../../services/api'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons';

export default function CreateItems(){
    const name = useRef(null);
    const quantity = useRef(null)
    const price = useRef(null)
    const  description =useRef(null)
    const {navigate} = useNavigation()
 
    function handleNavigateToHome(){
        navigate('Home')
    }
  
    const FormSchema = Yup.object().shape({
        name: Yup.string()
        .required('Campo Obrigatorio'),

        quantity: Yup.number()
        .min(0, 'Valor deve ser 0 ou maior'),

        description:Yup.string(),

        price: Yup.number()
        .min(0, 'Valor deve ser 0 ou maior'),
    });

 //   useEffect(()=>{  await api.post('produtos',data)},[])
   


    return(
        <ImageBackground source={Wallpaper} style={styles.image}>
        <ContainerView>
            <Header/>
            <TouchableOpacity onPress={handleNavigateToHome} style={styles.HandlingButtons}>
                <Text style={styles.BackButton}><Ionicons name="ios-arrow-round-back" size={24} color="#000000" /> Voltar</Text></TouchableOpacity>
            
            <Box>
                <Formik
                        initialValues={{
                            name:'',
                            quantity:'',
                            description:'',
                            price:''
                        }}
                        onSubmit={
                            (values,{resetForm})=>{
                                console.log('Aqui estao os valores do Submit =>',values)
                                resetForm()
                            }}
                        validationSchema={FormSchema}
                >
                {
                ({values,handleChange, handleSubmit})=>(
                        <View>
                            <BoxInputs>
                                <Texto>Nome do produto:</Texto>
                                <Input 
                                placeholder= ' Produto'
                                placeholderTextColor='#e2e2e2'
                                    ref={name} 
                                    value={values.name} 
                                    onChangeText={handleChange('name')}/>
                            </BoxInputs>
                            <BoxInputs>
                                <Texto>Quantidade:</Texto>
                                <Input 
                                    placeholder=" X Unidades"
                                    placeholderTextColor='#e2e2e2'
                                    keyboardType= 'numeric'
                                    ref={quantity} 
                                    value={values.quantity} 
                                    onChangeText={handleChange('quantity')}
                                    />
                            </BoxInputs>
                            <BoxInputs>
                                    <Texto>Descrição:</Texto>
                                <Input 
                                    placeholder = " Nome - Cor - Formato    "
                                    placeholderTextColor='#e2e2e2'
                                    multiline 
                                    numberOfLines = {4}
                                    ref={description} 
                                    value={values.description} 
                                    onChangeText={handleChange('description')}/>
                            </BoxInputs>
                            <BoxInputs>
                                <Texto>Preço:</Texto>
                                <Input 
                                    placeholder = " R$ XX.XX    "
                                    placeholderTextColor='#e2e2e2'
                                    keyboardType= 'numeric'
                                    ref={price} 
                                    value={values.price} 
                                    onChangeText={handleChange('price')}/>
                            </BoxInputs>
                            <BoxInputs>
                                <Button onPress={handleSubmit}>
                                    <ButtonText> Cadastrar </ButtonText>
                                </Button>
                            </BoxInputs>
                        </View>
                       
                        )
                }
                </Formik>
            
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
        fontWeight:"bold"
        
    }
  });