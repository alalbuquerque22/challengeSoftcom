import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

const AppStack = createStackNavigator()

import Home from '../pages/Home/Home'
import CreateItems from '../pages/CreateItems/CreateItems'
import ShowItems from '../pages/ShowItems/ShowItems'


export default function routeItems(){
    return(
       <NavigationContainer    >
           <AppStack.Navigator screenOptions={{headerShown:false}}>
               <AppStack.Screen name = "Home" component ={Home}/>
               <AppStack.Screen name = "CreateItems" component ={CreateItems}/>
               <AppStack.Screen name = "ShowItems" component ={ShowItems}/>
               
           </AppStack.Navigator>
        </NavigationContainer>
    )
}