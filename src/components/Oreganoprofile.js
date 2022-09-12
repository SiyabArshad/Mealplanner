import { View, Text,TouchableOpacity,StyleSheet,ImageBackground,Image,ScrollView,FlatList,SafeAreaView, StatusBar } from 'react-native'
import * as React from 'react'
import colors from "../extra/colors"
import fonts from "../extra/fonts"
import { RFPercentage } from 'react-native-responsive-fontsize'
import Icon1 from "react-native-vector-icons/AntDesign"
import Icon2 from "react-native-vector-icons/Ionicons"
import Line from './Line'
import Deletebox from './Deletebox'
import { Modalize } from 'react-native-modalize';
import Ingredient from "./Ingredient"

export default function Oreganoprofile({closefunc,onsesoOpen,onsportOpen,onmovOpen,navigation}) {
  return (
    <View  style={style.container}>
      <TouchableOpacity onPress={closefunc} style={style.topicon}>
        <Icon2 name='ios-chevron-back-outline' color={colors.black} size={24}/>
      </TouchableOpacity>
      <Text style={style.toptext}>Oreegano sta usando questo profilo</Text>
      <Line/>
      <TouchableOpacity style={style.parch}>
        <Text style={style.text1}>Età</Text>
        <Text style={style.text2}>32 anni</Text>
      </TouchableOpacity>
      <Line/>
      <TouchableOpacity onPress={()=>{
        closefunc()
        onsesoOpen()
      }} style={style.parch}>
        <Text style={style.text1}>Sesso</Text>
        <Text style={style.text2}>Uamo</Text>
      </TouchableOpacity>
      <Line/>
      <TouchableOpacity style={style.parch}>
        <Text style={style.text1}>Altezza</Text>
        <Text style={style.text2}>186 cm</Text>
      </TouchableOpacity>
      <Line/>
      <TouchableOpacity style={style.parch}>
        <Text style={style.text1}>Peso</Text>
        <Text style={style.text2}>87,5 kg</Text>
      </TouchableOpacity>
      <Line/>
      <TouchableOpacity style={style.parch}>
        <Text style={style.text1}>Obiettivo</Text>
        <Text style={style.text2}>Perdere peso</Text>
      </TouchableOpacity>
      <Line/>
      <TouchableOpacity
      onPress={()=>{
        closefunc()
        onsportOpen()
      }} 
      style={style.parch}>
        <Text style={style.text1}>Sport</Text>
        <Text style={style.text2}>Poco</Text>
      </TouchableOpacity>
      <Line/>
      <TouchableOpacity style={style.parch}
       onPress={()=>{
        closefunc()
        onmovOpen()
      }} 
     
      >
        <Text style={style.text1}>Movimento</Text>
        <Text style={style.text2}>Poco</Text>
      </TouchableOpacity>
      <Line/>
      <View style={{display:"flex",flexDirection:"row",justifyContent:"center",marginTop:RFPercentage(2),marginBottom:RFPercentage(3)}}>
                        <TouchableOpacity style={style.btn1}>
                            <Text style={style.btntext1}>Annulla</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.btn} onPress={()=>navigation.navigate("nutritions")}>
                            <Text style={style.btntext}>Continua</Text>
                        </TouchableOpacity>
        </View>
    </View>
  )
}

const style=StyleSheet.create({
    container:{
        borderTopRightRadius:RFPercentage(2)
    },
    topicon:{
        margin:RFPercentage(2)
    },
    toptext:{
        color:colors.grey3,
        fontFamily:fonts.PoppinsLight,
        textAlign:"center",
        marginBottom:RFPercentage(2)
    },
    parch:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        paddingVertical:RFPercentage(1),
        marginVertical:RFPercentage(1),
        paddingHorizontal:RFPercentage(3)
    },
    text1:{
        fontFamily:fonts.PoppinsSemiBold,
        fontSize:RFPercentage(2.5)
    },
    text2:{
        fontFamily:fonts.PoppinsRegular
    },
    btn1:{
        width:"40%",
        backgroundColor:colors.white,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:RFPercentage(1),
        paddingHorizontal:RFPercentage(.7),
        paddingVertical:RFPercentage(1.2),
     },
     btntext1:{
        color:colors.black,
        fontFamily:fonts.PoppinsMedium
     },
     btn:{
        width:"40%",
        backgroundColor:colors.black,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:RFPercentage(1),
        paddingHorizontal:RFPercentage(.7),
        paddingVertical:RFPercentage(1.2),
        marginLeft:RFPercentage(.5)
     },
     btntext:{
        color:colors.white,
        fontFamily:fonts.PoppinsMedium
     }
})