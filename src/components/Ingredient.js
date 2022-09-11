import { View, Text,TouchableOpacity,StyleSheet,ImageBackground,Image,ScrollView,FlatList,SafeAreaView, StatusBar } from 'react-native'
import * as React from 'react'
import colors from "../extra/colors"
import fonts from "../extra/fonts"
import { RFPercentage } from 'react-native-responsive-fontsize'
import Icon1 from "react-native-vector-icons/AntDesign"
import Icon2 from "react-native-vector-icons/Feather"
import Line from './Line'

export default function Ingredient() {
  return (
    <ImageBackground  resizeMode='cover' imageStyle={{ borderRadius: RFPercentage(3)}} style={styles.editeditem} source={require("../Assets/tomato.png")}>
                            <View style={styles.ch2textch1}>
                                 <ImageBackground  style={{
                                 position:"relative",
                                 top:-10,
                                 height:RFPercentage(3),width:RFPercentage(3),display:"flex",
                                 justifyContent:"center",alignItems:"center"}} source={require("../Assets/Star26.png")}>
                                     <Image source={require("../Assets/Cheese.png")}/>
                                 </ImageBackground>
                                 <Text style={styles.itemname}>
                                 Piadine di avocado e mais con salsa bianca 
                                 </Text>
                                 <Text style={styles.itemnut}>
                                 300 kcal, 1 porz
                                 </Text>
                            </View>
    </ImageBackground>
  )
}

const styles=StyleSheet.create({
    editeditem:{
        height:RFPercentage(30),
        width:RFPercentage(22),
        marginHorizontal:RFPercentage(.5),
        marginBottom:RFPercentage(.5),
        padding:RFPercentage(1),
        display:"flex"
        ,flexDirection:"column",
        justifyContent:'flex-end'   
    },
    ch2textch1:{
        backgroundColor:colors.transgrey2,
        opacity:0.7,
        paddingHorizontal:RFPercentage(.8),
        borderTopRightRadius:RFPercentage(1),
        borderTopLeftRadius:RFPercentage(1),
        borderBottomLeftRadius:RFPercentage(3),
        borderBottomRightRadius:RFPercentage(3)
    },
    itemname:{
        fontFamily:fonts.PoppinsMedium,
        fontSize:RFPercentage(1.6),
        color:colors.black
    },
    itemnut:{
        fontFamily:fonts.PoppinsRegular,
        fontSize:RFPercentage(1.6),
        color:colors.black,
        marginVertical:RFPercentage(1)   
    }
})