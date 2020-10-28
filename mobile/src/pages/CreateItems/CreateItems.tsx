import React,{useRef} from 'react'
import { View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Header from '../../components/Header'
import {ContainerView }from '../../components/Container'
import {Button,BoxInputs,Text,Input,ButtonText} from './styles'

export default function CreateItems(){
    const name = useRef(null);
    const quantity = useRef(null)
    const price = useRef(null)

    const FormSchema = Yup.object().shape({
        name: Yup.string()
        .required('Campo Obrigatorio'),
        quantity: Yup.number()
        .min(0, 'Valor deve ser 0 ou maior'),

        price: Yup.number()
        .min(0, 'Valor deve ser 0 ou maior'),
    });

    return(
        <ContainerView >
            <Header/>
            <BoxInputs>
                <Formik
                        initialValues={{
                            name:'',
                            quantity:'',
                            price:''
                        }}
                        onSubmit={
                            (values)=>{
                                console.log('Aqui estao os valores do Submit =>',values)
                            }}
                        validationSchema={FormSchema}
                >
                {
                ({values,handleChange, handleSubmit})=>(
                        <View>
                            <Text>Nome do produto:</Text>
                            <Input 
                            placeholder= ' Produto'
                            placeholderTextColor='#e2e2e2'
                                ref={name} 
                                value={values.name} 
                                onChangeText={handleChange('name')}/>
                            <Text>Quantidade:</Text>
                            <Input 
                                placeholder=" X Unidades"
                                placeholderTextColor='#e2e2e2'
                                keyboardType= 'numeric'
                                ref={quantity } 
                                value={values.quantity} 
                                onChangeText={handleChange('quantity')}
                                />
                            <Text>Preço:</Text>
                            <Input 
                                placeholder = " R$ XX.XX    "
                                placeholderTextColor='#e2e2e2'
                                keyboardType= 'numeric'
                                ref={price} 
                                value={values.price} 
                                onChangeText={handleChange('price')}/>
                            <Button onPress={()=>handleSubmit}>
                                <ButtonText> Cadastrar </ButtonText>
                            </Button>
                        </View>
                        )
                }
                </Formik>
            
            </BoxInputs>
        </ContainerView>
    )

}