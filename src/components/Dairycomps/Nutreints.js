import { View, Text,TouchableOpacity,StyleSheet,ImageBackground,Image,ScrollView,FlatList,SafeAreaView, StatusBar } from 'react-native'
import * as React from 'react'
import colors from "../../extra/colors"
import fonts from "../../extra/fonts"
import { RFPercentage } from 'react-native-responsive-fontsize'
import Icon1 from "react-native-vector-icons/AntDesign"
import Icon2 from "react-native-vector-icons/Ionicons"
import Line from '../Line'
import Deletebox from '../Deletebox'
import { Modalize } from 'react-native-modalize';
import Ingredient from "../Ingredient"

export default function Nutreints({closefunc,ondayOpen,openfunc1}) {
  return (
    <View style={style.container}>
      <TouchableOpacity onPress={closefunc} style={{width:25,marginHorizontal:RFPercentage(2),marginVertical:RFPercentage(1)}}>
                <Icon1 name='close' color={colors.black}  size={24}/>
      </TouchableOpacity>
      <TouchableOpacity style={style.item} onPress={()=>{
        closefunc()
        ondayOpen()
      }}>
        <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
        <Image style={{width:25,height:25,resizeMode:"cover"}} source={require("../../Assets/yam.png")}/>
        <Text style={{fontFamily:fonts.PoppinsMedium,fontSize:RFPercentage(2.1),marginHorizontal:RFPercentage(2)}}>
        Segna come mangiato
        </Text>
        </View>
      </TouchableOpacity>
      <Line/>
      <TouchableOpacity style={style.item} onPress={()=>{
        closefunc()
        openfunc1()
      }}>
        <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
        <Image style={{width:25,height:25,resizeMode:"cover"}} source={require("../../Assets/dish.png")}/>
        <Text style={{fontFamily:fonts.PoppinsMedium,fontSize:RFPercentage(2.1),marginHorizontal:RFPercentage(2)}}>
        Modifica quantità 
        </Text>
        </View>
        <TouchableOpacity
        onPress={()=>{
            closefunc()
            openfunc1()
          }}
        >
            <Icon2 name='chevron-forward' size={24} color={colors.black}/>
        </TouchableOpacity>
      </TouchableOpacity>
      <Line/>
      <TouchableOpacity style={style.item} 
      onPress={()=>{
        closefunc()
        ondayOpen()
      }}
      >
        <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
        <Icon1 name='calendar' size={24} color={colors.black}/>
        <Text style={{fontFamily:fonts.PoppinsMedium,fontSize:RFPercentage(2.1),marginHorizontal:RFPercentage(2)}}>
        Sposta a
        </Text>
        </View>
        <TouchableOpacity
        onPress={()=>{
            closefunc()
            ondayOpen()
          }}
        >
            <Icon2 name='chevron-forward' size={24} color={colors.black}/>
        </TouchableOpacity>
      </TouchableOpacity>
      <Line/>
        <TouchableOpacity style={{display:"flex",flexDirection:"row",alignItems:"center",marginHorizontal:RFPercentage(2),marginVertical:RFPercentage(1),}}>
        <Icon1 name='delete' size={24} color={colors.black}/>
        <Text style={{fontFamily:fonts.PoppinsMedium,fontSize:RFPercentage(2.1),marginHorizontal:RFPercentage(2)}}>
        Elimina
        </Text>
        </TouchableOpacity>
    </View>
  )
}

const style=StyleSheet.create({
    container:{
        paddingVertical:RFPercentage(2),
        borderTopLeftRadius:RFPercentage(2),
        borderTopRightRadius:RFPercentage(2)
    },
    item:{
        marginHorizontal:RFPercentage(2),
        marginVertical:RFPercentage(1),
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between"
    }
})