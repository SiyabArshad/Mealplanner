import { View, Text,TouchableOpacity,StyleSheet,ImageBackground,Image,ScrollView,FlatList,SafeAreaView, StatusBar } from 'react-native'
import * as React from 'react'
import colors from "../extra/colors"
import fonts from "../extra/fonts"
import { RFPercentage } from 'react-native-responsive-fontsize'
import Icon1 from "react-native-vector-icons/AntDesign"
import Icon2 from "react-native-vector-icons/Feather"
import Line from './Line'
import Deletebox from './Deletebox'
import { Modalize } from 'react-native-modalize';
import Ingredient from "./Ingredient"
export default function Swap({closefunc}) {
  return (
    <View style={style.container}>
        <View style={style.cont1}>
                <TouchableOpacity onPress={closefunc} style={{width:30,marginVertical:RFPercentage(2)}}>
                    <Icon1 name='close' size={24} color={colors.black}/>
                </TouchableOpacity>
                <View style={{display:"flex",flexDirection:'row',justifyContent:"space-between"}}>
                    <Text style={{fontFamily:fonts.PoppinsMedium,fontSize:RFPercentage(2.5)}}>Ricette simili</Text>
                    <View style={{display:"flex",flexDirection:"row"}}>
                        <Text style={{color:colors.green,fontFamily:fonts.PoppinsRegular}}>
                        Genera altre
                        </Text>
                        <TouchableOpacity style={{marginHorizontal:RFPercentage(1)}}>
                            <Icon1 name='swap' color={colors.black} size={24}/>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{display:"flex",flexDirection:"row",flexWrap:"wrap"}}>
                    {
                        [1,2,3,4].map((item,i)=>(
                            <Ingredient key={i} />
                        ))
                    }
                </View>
        </View>
        <Line/>
        <View style={{display:"flex",flexDirection:"row",justifyContent:"center",marginVertical:RFPercentage(2)}}>
                        <TouchableOpacity style={style.btn1}>
                            <Text style={style.btntext1}>Cancella tutto</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.btn}>
                            <Text style={style.btntext}>Salva</Text>
                        </TouchableOpacity>
        </View>
    </View>
  )
}

const style=StyleSheet.create({
    container:{
        borderTopRightRadius:RFPercentage(1.5),
        borderTopLeftRadius:RFPercentage(1.5)
    },
    cont1:{
        paddingHorizontal:RFPercentage(2)
        ,paddingVertical:RFPercentage(1.5),
        marginVertical:RFPercentage(1)
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