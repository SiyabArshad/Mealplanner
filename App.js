import { View, Text } from 'react-native'
import React from 'react'
import "react-native-gesture-handler"
import AddMeal from './src/screens/AddMeal'
import Meal from './src/screens/Meal'
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import Bottomnavigation from './src/extra/BottomNavigation'
import Additemtoplan from './src/screens/Additemtoplan'
import Selectplan from './src/screens/Selectplan'
const Stack =createStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{headerShown: true,headerBackTitleVisible: false,headerTintColor: 'black'}}>
      <Stack.Screen options={{headerShown:false}}   name='home' component={Bottomnavigation}></Stack.Screen>
      <Stack.Screen  options={{title:"Piano standard 7 giorni"}} name='MealScreen' component={Meal}></Stack.Screen>
      <Stack.Screen  options={{title:"Select Plan"}}  name='addplan' component={Selectplan}></Stack.Screen>
      <Stack.Screen options={{headerShown:false}} name='additemtoplan' component={Additemtoplan}></Stack.Screen>
      </Stack.Navigator>
      </NavigationContainer>
    )
}
