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

export default function Movement({closefunc}) {
    const[btn,setbtn]=React.useState("")
    const data=[{
        name:"Poco",
        text:"Sono spesso seduto"
    },
    {
        name:"Abbastanza",
        text:"Sono spesso in piedi"
    },
    {
        name:"Molto",
        text:"mi muovo spesso"
    },
{
    name:"Moltissimo",
    text:"Faccio lavori fisicamente intensi"
}
]
  return (
    <View style={style.container}>
      <Text style={style.text1}>Movimento</Text>
      <Text style={{fontFamily:fonts.PoppinsLight,marginBottom:RFPercentage(2)}}>Durante la giornata, quando non fai sport, ti muovi</Text>
      <View style={{display:"flex",alignItems:"center",marginBottom:RFPercentage(2)}}>
        {
            data.map((item,i)=>(
                <TouchableOpacity onPress={()=>setbtn(item.name)} style={[style.btnss,{borderWidth:item.name!==btn?RFPercentage(.1):0
                ,backgroundColor:item.name===btn?colors.black:colors.white
                }]} key={i}>
                    <Text style={{fontFamily:fonts.PoppinsBold,textAlign:"center",color:item.name!==btn?colors.black:colors.white}}>{item.name}</Text>
                    <Text style={{fontFamily:fonts.PoppinsRegular,textAlign:"center",color:item.name!==btn?colors.black:colors.white}}>{item.text}</Text>
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
        borderRadius:RFPercentage(1.5),
        marginBottom:RFPercentage(1),
        width:"80%"
    }
})