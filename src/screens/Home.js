import { View, Text,TouchableOpacity,StyleSheet,ImageBackground,Image,ScrollView,FlatList,SafeAreaView, StatusBar } from 'react-native'
import * as React from 'react'
import colors from "../extra/colors"
import fonts from "../extra/fonts"
import { RFPercentage } from 'react-native-responsive-fontsize'
import Icon1 from "react-native-vector-icons/EvilIcons"
import Icon2 from "react-native-vector-icons/Feather"
import Icon3 from "react-native-vector-icons/Ionicons"
import TopPlan from '../components/TopPlan'
import Plan from '../components/Plan'
export default function Home({navigation}) {
  return (
    <SafeAreaView style={style.container}>
        <StatusBar translucent backgroundColor={"transparent"}></StatusBar>
        <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
        <Text style={[style.globalpadding,{color:colors.black,fontFamily:fonts.PoppinsSemiBold,fontSize:RFPercentage(2.5),marginVertical:RFPercentage(1)}]}>Meal Planner</Text>
        {
            1?
            <View style={[style.globalpadding,style.child1]}>
            <TopPlan/>
            </View>    
            :
            <View style={[style.globalpadding,style.child2]}>
                <View>
                    <Text style={style.gtext}>
                        Non hai nessun piano attivo!
                    </Text>
                    <View style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
                    <TouchableOpacity  style={style.cplan}>
                        <Text style={[style.gtext,{color:colors.black}]}>CREA PLANO</Text>
                    </TouchableOpacity>
                    </View>
                    <Text style={style.gtext}>
                        oppure attiva uno dei piani presenti
                    </Text>
                    <Text style={style.gtext}>
                        nella tua lista qui sotto
                    </Text>
                </View>
            </View>
        }
        <Text style={[style.globalpadding,{color:colors.black,fontFamily:fonts.PoppinsSemiBold,fontSize:RFPercentage(3),marginVertical:RFPercentage(1)}]}>I miei piani</Text>
        {
            [1,2,3,4].map((item,i)=>{
                return(
                    <View key={i} style={[style.globalpadding,{marginBottom:RFPercentage(0)}]}>
                    <Plan/>
                    </View>
                )
            })
        }
        </ScrollView>
        <TouchableOpacity style={style.addbtn} onPress={()=>navigation.navigate("addplan")}>
            <Icon2 name='plus' color={colors.white} size={30}/>
        </TouchableOpacity>
    </SafeAreaView>
  )
}

const style=StyleSheet.create({
    container:{
        flex:1
    },
    addbtn:{
        position:"absolute",
        bottom:20,
        right:20,
        backgroundColor:colors.green,
        width:RFPercentage(6),
        height:RFPercentage(6),
        display:'flex',
        justifyContent:"center",
        alignItems:"center",
        borderRadius:RFPercentage(1.5)
    },
    globalpadding:{
        paddingHorizontal:RFPercentage(2),
        paddingVertical:RFPercentage(1.3),
    },
    child1:{
        backgroundColor:colors.green
    },
    child2:{
        width:"100%",
        minHeight:RFPercentage(30),
        backgroundColor:colors.green,
        display:'flex',
        alignItems:"center",
        justifyContent:"center"
    },
    gtext:{
        textAlign:"center",
        fontFamily:fonts.PoppinsRegular,
        color:colors.white
    },
    cplan:{
        backgroundColor:colors.white,
        marginVertical:RFPercentage(1),
        padding:RFPercentage(1),
        borderRadius:RFPercentage(1.5),
        width:RFPercentage(20)

    }
})