import { View, Text,TouchableOpacity,StyleSheet,ImageBackground,Image,ScrollView,FlatList,Dimensions,SafeAreaView, StatusBar } from 'react-native'
import * as React from 'react'
import colors from "../extra/colors"
import fonts from "../extra/fonts"
import { RFPercentage } from 'react-native-responsive-fontsize'
import Icon1 from "react-native-vector-icons/EvilIcons"
import Icon2 from "react-native-vector-icons/Feather"
import Icon3 from "react-native-vector-icons/Ionicons"
import TopPlan from '../components/TopPlan'
import Plan from '../components/Plan'
import { Modalize } from 'react-native-modalize';
import Oreganoprofile from '../components/Oreganoprofile'
import Seso from '../components/Seso'
import Sport from '../components/Sport'
import Movement from '../components/Movement'
export default function Selectplan({navigation}) {
    const plans=[
        {
        name:"Piano",
        desc:"Crea un menù generico",
        url:require("../Assets/plan1.png")
    },
    {
        name:"Piano",
        desc:"Crea un menù generico",
        url:require("../Assets/plan2.png")
    },
    {
        name:"Professionista",
        desc:"Crea un menù generico",
        url:require("../Assets/plan3.png")
    },
]
  return (
  <SafeAreaView style={style.container}>
     <StatusBar translucent backgroundColor={"transparent"}></StatusBar>
        <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
        <Text style={style.text1}>
        crea un piano
        </Text>

            {
                plans.map((item,i)=>(
            <TouchableOpacity onPress={()=>navigation.navigate("profile")} key={i}>
            <ImageBackground   source={item.url} style={style.card}>
            <Text style={style.toptext}>{item.name}</Text>
            <Text style={style.bottomtext}>{item.desc}</Text>
            </ImageBackground>
            </TouchableOpacity>
                ))

            }

        <View style={{display:'flex',justifyContent:'center',alignItems:"center",marginVertical:RFPercentage(1)}}>
            <TouchableOpacity style={style.btn}>
                <Text style={{color:colors.white,fontFamily:fonts.PoppinsBold,fontSize:RFPercentage(2.2)}}>SELEZIANO</Text>
            </TouchableOpacity>
        </View>
       </ScrollView>
  </SafeAreaView>
    )
}

const style=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.white
    },
    text1:{
        marginLeft:RFPercentage(1.5),
        marginVertical:RFPercentage(2),
        fontSize:RFPercentage(4),
        fontFamily:fonts.PoppinsBold
    },
    btn:{
        width:"60%",
        backgroundColor:colors.green,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        paddingVertical:RFPercentage(1),
        borderRadius:RFPercentage(.8)
    },
    card:{
        borderRadius:RFPercentage(1.5),
        width:"95%",
        height:RFPercentage(20),
        display:"flex",
        justifyContent:'space-between',
        elevation:2,
        shadowColor:colors.grey2,
        shadowOffset:{width:1,height:1},
        shadowOpacity:0.8,
        shadowRadius:2,
        marginHorizontal:"5%",
        marginBottom:RFPercentage(1),
        resizeMode:"stretch"
    
    },
    toptext:{
        color:colors.white,
        textAlign:"center",
        marginTop:RFPercentage(3.5),
        fontFamily:fonts.PoppinsMedium
    }
    ,bottomtext:{
        marginBottom:RFPercentage(2),
        textAlign:'center',
        color:colors.white,
        fontFamily:fonts.PoppinsRegular
    }
})