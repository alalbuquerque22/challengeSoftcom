import React,{useRef} from 'react'
import { Button, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { Formik } from 'formik'
import * as Yup from 'yup'
import Header from '../../components/Header'
import Styles from './styles'

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
        <View style={Styles.container}>
            <Header/>
            <View>
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
                        <Text>Nome</Text>
                        <TextInput 
                            ref={name} 
                            value={values.name} 
                            onChangeText={handleChange('name')}/>
                        <Text>Quantidade</Text>
                        <TextInput 
                            ref={quantity } 
                            value={values.quantity} 
                            onChangeText={handleChange('quantity')}/>
                        <Text>Preco</Text>
                        <TextInput 
                            ref={price} 
                            value={values.price} 
                            onChangeText={handleChange('price')}/>
                        <Button title="Cadastrar" onPress={()=>handleSubmit}/>
                    </View>
                    )
            }
               </Formik>
           
            </View>
        </View>
    )

}