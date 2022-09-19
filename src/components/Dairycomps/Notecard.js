import { View, Text,TouchableOpacity,StyleSheet,ImageBackground,Image,ScrollView,FlatList,SafeAreaView, StatusBar,Button } from 'react-native'
import * as React from 'react'
import colors from "../../extra/colors"
import fonts from "../../extra/fonts"
import { RFPercentage } from 'react-native-responsive-fontsize'
import Icon1 from "react-native-vector-icons/AntDesign"
import Icon2 from "react-native-vector-icons/Feather"
export default function Notecard() {
  return (
    <View style={styles.cont1}>
      <Text style={styles.regtext}>Adoro questa ricetta! La cucino sempre per i compleanni dei miei figli!</Text>
      <View style={styles.cont2}>
        <View style={styles.tags}>
        <Text style={styles.tagtext}>Tag:</Text>
        <TouchableOpacity   style={styles.tagbtn}>
            <Text style={{fontFamily:fonts.PoppinsMedium}}>RICETTE</Text>
        </TouchableOpacity>
        </View>
        <Text style={styles.textlight}>leri</Text>
      </View>
    </View>
  )
}

const styles=StyleSheet.create({
    cont1:{
        backgroundColor:colors.white,
        width:"95%",
        borderRadius:RFPercentage(3),
        paddingHorizontal:RFPercentage(2),
        paddingVertical:RFPercentage(1.5),
        elevation:2,
        shadowColor:colors.grey3,
        shadowOffset:{width:1,height:1},
        shadowOpacity:0.4,
        shadowRadius:5,
        marginVertical:RFPercentage(1)
    },
    regtext:{
        fontFamily:fonts.PoppinsRegular
    },
    cont2:{
        display:'flex',
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:RFPercentage(2),
        alignItems:"center"
    },
    tags:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        },
    textlight:{
        color:colors.grey3,
        fontFamily:fonts.PoppinsRegular
    },

    tagtext:{
        fontFamily:fonts.PoppinsBold,
        marginRight:RFPercentage(.5)
    },
    tagbtn:{
        backgroundColor:colors.grey1,
        paddingHorizontal:RFPercentage(1.4),
        paddingVertical:RFPercentage(.6),
        color:colors.black,
        borderRadius:RFPercentage(2),
        borderWidth:RFPercentage(.1),
        borderColor:colors.grey2
    }
})