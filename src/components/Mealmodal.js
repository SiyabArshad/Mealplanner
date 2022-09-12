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


export default function Mealmodal({closefunc,openfunc}) {
    const [day,setday]=React.useState(0)
    return (
    <View style={style.container}>
      <Text style={style.text1}>Scegli il pasto</Text>
     {
        ["Colazione","Pranzo","Cena","Spuntino"].map((item,i)=>(
            <>
            <View key={i} style={{display:"flex",flexDirection:"row",justifyContent:"space-between",padding:RFPercentage(1.2),marginBottom:RFPercentage(.5)}}>
            <Text style={{fontFamily:fonts.PoppinsMedium,fontSize:RFPercentage(1.9)}}>{item}</Text>
            <TouchableOpacity onPress={()=>setday(item)} style={{backgroundColor:item===day?colors.green:colors.white,height:20,width:20,borderRadius:10,marginRight:RFPercentage(1.5),borderWidth:item===day?0:RFPercentage(.1),borderColor:item!==day&&colors.grey3}} />
          </View>
          <Line/>
          </>
        ))
     }
     <TouchableOpacity onPress={()=>{
        closefunc()
    }} style={{backgroundColor:colors.black,margin:RFPercentage(2),padding:RFPercentage(1.2),borderRadius:RFPercentage(1.2)}}>
        <Text style={{textAlign:"center",color:colors.white,fontFamily:fonts.PoppinsRegular,fontSize:RFPercentage(2)}}>Fatto</Text>
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
    text1:{
        fontFamily:fonts.PoppinsSemiBold,
        fontSize:RFPercentage(1.8),
        margin:RFPercentage(1.2)
    }
})