import 'react-native-gesture-handler';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Ficon from "react-native-vector-icons/Feather"
import COLORS from './colors';
import AddMeal from "../screens/AddMeal"
import Meal from "../screens/Meal"
import Iicon from "react-native-vector-icons/Ionicons"
import MIcon from "react-native-vector-icons/MaterialCommunityIcons"
import {View,Text,Image} from "react-native"
import Home from '../screens/Home';
import Community from '../screens/Community';
import Dairy from '../screens/Dairy';
const Tab = createBottomTabNavigator();
export default function Bottomnavigation() {
  return (
<Tab.Navigator
initialRouteName="Home"
screenOptions={{
        tabBarStyle: {
      height: 65,
      paddingBottom:10,
      borderTopWidth: 0,
    elevation: 0,
      backgroundColor: COLORS.white,
  }
        ,
        headerShown:false,
        tabBarInactiveTintColor:COLORS.black,
        tabBarActiveTintColor: COLORS.green,
        
      }}
>
      <Tab.Screen 
name="Community" component={Community} 

options={{
        tabBarLabel:"Community",
          tabBarIcon: ({color,focused}) => (
            <View style={{ borderTopWidth:2,borderTopColor:focused?COLORS.green:COLORS.white,paddingHorizontal:5,paddingVertical:3}}>
            <MIcon name="telescope" color={color} size={28} />
        </View>
            ),
        }}

      />
       <Tab.Screen name="Dairy" component={Dairy} 
options={{
    tabBarLabel:"Dairy",
          tabBarIcon: ({color,focused}) => (
        <View style={{ borderTopWidth:2,borderTopColor:focused?COLORS.green:COLORS.white,paddingHorizontal:5,paddingVertical:3}}>
            <Ficon name="calendar" color={color} size={28} />
        </View>
            ),
        }}
      />
     
      <Tab.Screen name="startscreen" component={Home}  
      options={{
        tabBarLabel:"My Oreegano",
          tabBarIcon: ({color,focused}) => (
            <View style={{ borderTopWidth:2,borderTopColor:focused?COLORS.green:COLORS.white,paddingHorizontal:5,paddingVertical:3}}>
            <Ficon name='smile' color={color} size={28}></Ficon>
            </View>
            ),
        }}
     
      />
      <Tab.Screen name="Planner" component={AddMeal}
      options={{
        tabBarLabel:"Planner",
          tabBarIcon: ({color,focused}) => (
            <View style={{ borderTopWidth:2,borderTopColor:focused?COLORS.green:COLORS.white,paddingHorizontal:5,paddingVertical:3}}>
                <MIcon name="silverware-fork-knife" color={color} size={28} />
            </View>
          ),
        }}
       />
      <Tab.Screen name="Groceries" component={Home}
      options={{
        tabBarLabel:"Groceries",
          tabBarIcon: ({color,focused}) => (
            <View style={{ borderTopWidth:2,borderTopColor:focused?COLORS.green:COLORS.white,paddingHorizontal:5,paddingVertical:3}}>
                <Iicon name="md-cart-outline" color={color} size={28} />
            </View>
          ),
        }}
       />
    </Tab.Navigator>
  )
}