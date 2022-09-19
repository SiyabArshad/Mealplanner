import { View, Text,TouchableOpacity,StyleSheet,ImageBackground,Image,ScrollView,FlatList,SafeAreaView, StatusBar } from 'react-native'
import * as React from 'react'
import colors from "../../extra/colors"
import fonts from "../../extra/fonts"
import { RFPercentage } from 'react-native-responsive-fontsize'
import Icon1 from "react-native-vector-icons/AntDesign"
import Icon2 from "react-native-vector-icons/Feather"
import Iionic from "react-native-vector-icons/Ionicons"
import EIcon from "react-native-vector-icons/Entypo"
import Line from "../Line"
export default function Pasti() {
  return (
    <View style={styles.container}>
      <View style={styles.cont1}>
            <Text style={styles.text1}>Piano attivo:</Text>
            <View style={styles.cont1comp2}>
                <Text style={styles.btntext}>
                Sportivo vegan
                </Text>
                <TouchableOpacity style={{backgroundColor:colors.grey1,width:RFPercentage(4),height:RFPercentage(4)
                ,display:"flex",justifyContent:"center",alignItems:"center",borderRadius:RFPercentage(1)
                }}>
                    <Icon1 name='arrowright' size={24} color={colors.black}/>
                </TouchableOpacity>
            </View>
      </View>
      <View style={styles.cont2}>
                <View style={{display:"flex",flexDirection:"row"}}>
                    <TouchableOpacity style={styles.btn1}>
                        <Text style={{fontFamily:fonts.PoppinsRegular,color:colors.white}}>CALORIE</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.btn1,{backgroundColor:colors.white,borderWidth:RFPercentage(.1),borderColor:colors.grey3}]}>
                        <Text style={{fontFamily:fonts.PoppinsRegular,color:colors.grey3}}>MACRO NUTREINTI</Text>
                    </TouchableOpacity>
                </View>
                <View style={{display:'flex',flexDirection:'row',paddingVertical:RFPercentage(2)}}>
                    <View style={{width:"50%"}}>
                        <Text style={{fontFamily:fonts.PoppinsMedium,fontSize:RFPercentage(2),color:colors.grey3}}>
                        TOTALE DI OGGI
                        </Text>
                        <View style={{display:'flex',flexDirection:'row',alignItems:"center"}}>
                            <Text style={{fontFamily:fonts.PoppinsBold,fontSize:RFPercentage(4)}}>1800</Text>
                            <Text style={{fontFamily:fonts.PoppinsRegular}}>/2000</Text>
                        </View>
                    </View>
                    <View style={{width:"50%"}}>
                    <Text style={{fontFamily:fonts.PoppinsMedium,fontSize:RFPercentage(2),color:colors.grey3}}>
                    ASSUNTE
                        </Text>
                        <Text style={{fontFamily:fonts.PoppinsBold,fontSize:RFPercentage(4)}}>1200</Text>
                           <View style={{width:"100%",height:RFPercentage(.6),borderRadius:RFPercentage(.5),backgroundColor:colors.grey2}}>
                            <View style={{width:"60%" ,backgroundColor:colors.green,height:"100%",borderRadius:RFPercentage(.5)}}></View>
                           </View>
                    </View>
                </View>
                <Line/>
                <View style={{display:"flex",flexDirection:"row",alignItems:"center",marginVertical:RFPercentage(1),justifyContent:"space-between"}}>
                    <Text style={{fontFamily:fonts.PoppinsRegular}}>
                    Più informazioni
                    </Text>
                    <TouchableOpacity>
                        <Icon1 name='down' size={24} color={colors.black}/>
                    </TouchableOpacity>
                </View>
      </View>
      {/*item details comp*/}
      {/**end */}
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        paddingHorizontal:RFPercentage(2),
        paddingVertical:RFPercentage(.5)
    },
    cont1:{
        marginVertical:RFPercentage(.5),
        display:'flex',
        flexDirection:"row",
        alignItems:"center"
    },
    text1:{
        fontFamily:fonts.PoppinsRegular,
    },
    cont1comp2:{
        backgroundColor:colors.white,
        borderRadius:RFPercentage(2),
        marginLeft:RFPercentage(2),
        paddingHorizontal:RFPercentage(2),
        paddingVertical:RFPercentage(.6),
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        width:"70%",
        elevation:1,
        shadowColor:colors.grey3,
        shadowOffset:{width:0.5,height:-1}
        ,shadowOpacity:0.2,
        shadowRadius:5
    },
    btntext:{
        color:colors.green,
        fontFamily:fonts.PoppinsMedium,
        fontSize:RFPercentage(2.2)
    },
    cont2:{
        width:"98%",
        marginHorizontal:"1%",
        backgroundColor:colors.white,
        borderRadius:RFPercentage(3),
        minHeight:RFPercentage(20),
        elevation:1,
        shadowColor:colors.grey3,
        shadowOffset:{width:0.5,height:-1}
        ,shadowOpacity:0.2,
        shadowRadius:5
        ,marginVertical:RFPercentage(2),
        padding:RFPercentage(2)
    },
    btn1:{
        paddingHorizontal:RFPercentage(1),
        paddingVertical:RFPercentage(.6),
        backgroundColor:colors.green,
        borderRadius:RFPercentage(2),
        marginRight:RFPercentage(1)
    }
})