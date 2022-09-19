import { View, Text,TouchableOpacity,StyleSheet,ImageBackground,Image,ScrollView,FlatList,SafeAreaView, Dimensions,StatusBar,TextInput } from 'react-native'
import * as React from 'react'
import colors from "../../extra/colors"
import fonts from "../../extra/fonts"
import { RFPercentage } from 'react-native-responsive-fontsize'
import Icon1 from "react-native-vector-icons/AntDesign"
import Icon2 from "react-native-vector-icons/Feather"
import Dropdown from '../Dropdown'
import Chart from '../Chart'
import Line from '../Line'
export default function Bottom1() {
  return (

    <View style={styles.bottomsection}>
    <Text style={styles.mdtext}>
    Andamento settimanale
    </Text>
    <Dropdown/>
    <Text style={[styles.semiboldtext,{color:colors.grey3,marginVertical:RFPercentage(3)}]}>
    ANDAMENTO GIORNALIERO
    </Text>
    <Chart></Chart>
    <View style={styles.count}>
        <View style={styles.countch1}>
            <Text style={{color:colors.grey3,fontFamily:fonts.PoppinsSemiBold}}>TOTAL CALORIE</Text>
            <Text style={{fontSize:RFPercentage(3.5),fontFamily:fonts.PoppinsExtraBold}}>14790</Text>
        </View>
        <View style={styles.countch2}>
            <Text style={{color:colors.grey3,fontFamily:fonts.PoppinsSemiBold}}>MEDIA CALORIE GIORNO</Text>
            <Text style={{fontSize:RFPercentage(3.5),fontFamily:fonts.PoppinsExtraBold}}>1200</Text>
        </View>
    </View>
</View>
  )
}

const styles=StyleSheet.create({
    ch1text:{
        display:'flex',
        justifyContent:"center"
    },
    ch1icons:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center"
    },
    ch1cmp2:{
        display:"flex",
        flexDirection:'row',
        alignItems:"center",
        marginTop:RFPercentage(2)
    }
    ,
    semiboldtext:{
        fontFamily:fonts.PoppinsSemiBold,
        fontSize:RFPercentage(2.2)
    },
    boldtext:{
        fontFamily:fonts.PoppinsBold,
        fontSize:RFPercentage(4)
    },
    ch1cmp3:{
        marginTop:RFPercentage(2)
    },
    ch1cmp4:{
        marginVertical:RFPercentage(2)
    },
    regulartext:{
        fontFamily:fonts.PoppinsRegular,
        fontSize:RFPercentage(1.8)
    },
    bottomsection:{
        paddingHorizontal:RFPercentage(2),
        paddingVertical:RFPercentage(1.3),
    },
    mdtext:{
        fontFamily:fonts.PoppinsMedium,
        fontSize:RFPercentage(2.2),
        marginVertical:RFPercentage(2)
    },
    count:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom:RFPercentage(2)
    },
    countch1:{
        width:"50%"
    },
    countch2:{
        width:"50%"
    },
    lastbtn:{
        paddingHorizontal:RFPercentage(.5)
        ,paddingVertical:RFPercentage(.8),
        backgroundColor:colors.black,
        display:"flex",
        justifyContent:'center',
        alignItems:'center',
        borderRadius:RFPercentage(1.5),
        marginVertical:RFPercentage(2),
        width:"50%"
    }

})
