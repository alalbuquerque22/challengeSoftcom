import React,{useEffect, useRef} from 'react'
import { View,StyleSheet } from 'react-native'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Header from '../../components/Header'
import {ContainerView} from '../../components/Container'
import {Button,Box,BoxInputs,Text,Input,ButtonText} from './styles'
import { ImageBackground } from '../SignIn/styles'
import Wallpaper from '../../assets/screen.jpg';
import api from '../../services/api'

export default function CreateItems(){
    const name = useRef(null);
    const quantity = useRef(null)
    const price = useRef(null)
    const  description =useRef(null)

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
                                <Text>Nome do produto:</Text>
                                <Input 
                                placeholder= ' Produto'
                                placeholderTextColor='#e2e2e2'
                                    ref={name} 
                                    value={values.name} 
                                    onChangeText={handleChange('name')}/>
                            </BoxInputs>
                            <BoxInputs>
                                <Text>Quantidade:</Text>
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
                                    <Text>Descrição:</Text>
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
                                <Text>Preço:</Text>
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
  });