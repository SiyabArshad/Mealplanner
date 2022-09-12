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

export default function Sport({closefunc}) {
    const[btn,setbtn]=React.useState("")
  return (
    <View style={style.container}>
      <Text style={style.text1}>Sport</Text>
      <Text style={{fontFamily:fonts.PoppinsLight,marginBottom:RFPercentage(2)}}>Quante vuolte pratichi sport alla settimana mediamente?</Text>
      <View style={{display:"flex",flexDirection:"row",marginBottom:RFPercentage(2)}}>
        {
            ["0-1","2-4","più di 4"].map((item,i)=>(
                <TouchableOpacity key={i} onPress={()=>setbtn(item)} style={[style.btnss,{borderWidth:item!==btn?RFPercentage(.1):0
                ,backgroundColor:item===btn?colors.black:colors.white
                }]}>
                    <Text style={{fontFamily:fonts.PoppinsRegular,textAlign:"center",color:item!==btn?colors.black:colors.white}}>{item}</Text>
                </TouchableOpacity>
            ))
        }
      </View>
    </View>
  )
}

const style=StyleSheet.create({
    container:{
        padding:RFPercentage(2),
        borderTopRightRadius:RFPercentage(2),
        borderTopLeftRadius:RFPercentage(2)
    },
    text1:{
        color:colors.black,
        fontSize:RFPercentage(2.5),
        fontFamily:fonts.PoppinsSemiBold,
        marginVertical:RFPercentage(2)
    },btnss:{
        paddingHorizontal:RFPercentage(2),
        paddingVertical:RFPercentage(.8),
        marginRight:RFPercentage(.5),
        borderRadius:RFPercentage(1.5)
    }
})