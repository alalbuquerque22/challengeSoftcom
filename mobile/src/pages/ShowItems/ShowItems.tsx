
import React, { useEffect, useState } from 'react'
import api from '../../services/api'

import Header from      '../../components/Header'
import {ContainerView} from '../../components/Container'
import { Box,Label,BoxInputs,ChangeButton} from './styles';
import {ImageBackground, StyleSheet, Text, View, TouchableOpacity} from 'react-native'
import { RiDeleteBin6Line,RiFileEditLine } from "react-icons/ri"
import Wallpaper from '../../assets/screen.jpg';
import { ScrollView } from 'react-native-gesture-handler';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

interface Produto{
    id: number;
    name:string;
    quantity:number;
    description:string;
    price:number;

}

const ShowItems =()=>{
    
    const {navigate} = useNavigation()
 
    function handleNavigateToHome(){
        navigate('Home')
    }
 
    const [produtos,setProdutos] = useState<Produto[]>([]);
    
    // async function logMakeGetRequest() {
    //     let res = await api.get('/produtos')
    //     let data = res.data
    //     console.log(data);
        
        
    // } logMakeGetRequest()
     
   async function handleUpdateItem(){

       try{api.patch('produtos/:id')
    }catch(error){
        console.log('Error on update item =>', error);
        
    }
   }
    async function handleDeleteItem(){
        try{api.delete('produtos/:id')
    }catch(error){
        console.log('Error on delete item=> ',error);
        
    }    
    }
    useEffect(()=>{    
       
            api.get('produtos')
            .then(response =>{setProdutos(response.data)})
        
           
    },[]);
   
    return(
        <ImageBackground source={Wallpaper} style={styles.image}> 
        <ContainerView>
            <Header/>
            <TouchableOpacity onPress={handleNavigateToHome} style={styles.HandlingButtons}>
                <Text style={styles.BackButton}><Ionicons name="ios-arrow-round-back" size={24} color="#000000" /> Voltar</Text></TouchableOpacity>
            
           <Box>
             

             {/* map para imprimir todos os valores da lista de produtos  */}
           
             {/* {produtos.map(produto=>(
                 
                
                  <View key={String(produto.id)}
                 style = {{ flex:1}}>  */}
                    <ScrollView style={styles.scroll}>
                        <BoxInputs>
                            <Label>Produto: </Label>
                            <Text style={styles.textResponseBox}>Carro Voador{/*produto.name*/}</Text>           
                        </BoxInputs>
                        <BoxInputs>
                            <Label>Descrição: </Label>
                            <Text style={styles.textResponseBox}>Produto muito legal{/*produto.description*/}</Text>          
                        </BoxInputs>
                        <BoxInputs>
                            <Label>Quantidade:  </Label>
                            <Text style={styles.textResponseBox}>2{/*produto.quantity*/}</Text>             
                        </BoxInputs>
                        <BoxInputs>
                            <Label>Preco: </Label>
                            <Text style={styles.textResponseBox}>R$123.00{/*produto.price*/}</Text>
                    </BoxInputs>
                    
                    <ChangeButton>
                        <TouchableOpacity style={styles.ButtonChanger} onPress={()=>{handleUpdateItem()}}><Text style={styles.ButtonChangerText}>Alterar</Text></TouchableOpacity>

                        <TouchableOpacity style={styles.ButtonChanger} onPress={()=>{handleDeleteItem()}}><Text style={styles.ButtonChangerText} >Deletar</Text></TouchableOpacity>
                    </ChangeButton>
                    </ScrollView>
                   {/* </View> */}
                 {/* ))}     */}

                     
        
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
    scroll:{
        flexDirection:'column'
    },
    ButtonChanger:{
        backgroundColor:"#233368",
        borderRadius:8,
        alignItems:'center',
        justifyContent:'center',
        
        
    },
    ButtonChangerText:{
        color:"#fff",
        marginHorizontal:5,
        fontSize:22,
    },
    textResponseBox:{
        backgroundColor:"#fff",
        borderStyle:"solid",
        color:"#8d8d8d",
        borderRadius:12,
        fontFamily:"Arial",
        
        
    },
    HandlingButtons:{
        flexDirection:"row",
        width:"100%",
        marginTop:-40,
        marginBottom:-80,
        height:"18%"
        
    },
    BackButton:{
        color:"#000",
        marginLeft:"5%",
        fontSize:22,
        fontWeight:"bold"
        
    }
    
  });

export default ShowItems;

