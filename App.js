import { View, Text } from 'react-native'
import React from 'react'
import "react-native-gesture-handler"
import AddMeal from './src/screens/AddMeal'
import Meal from './src/screens/Meal'
import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"
import Bottomnavigation from './src/extra/BottomNavigation'
import Selectplan from './src/screens/Selectplan'
const Stack =createStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator  screenOptions={{headerShown: false}}>
      <Stack.Screen name='home' component={Bottomnavigation}></Stack.Screen>
      <Stack.Screen name='MealScreen' component={Meal}></Stack.Screen>
      <Stack.Screen name='addplan' component={Selectplan}></Stack.Screen>
      </Stack.Navigator>
      </NavigationContainer>
    )
}
