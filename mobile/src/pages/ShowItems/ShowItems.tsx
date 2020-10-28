import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useEffect, useState } from 'react'
import {  View,Text} from 'react-native'

import Header from      '../../components/Header'
import {ContainerView} from '../../components/Container'
import { MainBox,Label} from './styles';
export default function ShowItems(){
    
   
    const [items,setItems] = useState([]);
    
    function LoadItems(){
        AsyncStorage.getItem('')
    }
    useEffect(()=>{})
   
    return(
        <ContainerView>
            <Header/>
            <MainBox >
                 <Label>Nome:{items}</Label>                
                 <Label>Quantidade:{items}</Label>                
                <Label>Preco:{items}</Label>                
            
           
            </MainBox>
        </ContainerView>
    )
}

