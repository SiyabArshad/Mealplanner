import { View, Text,TouchableOpacity,StyleSheet,ImageBackground,Image,ScrollView,FlatList,SafeAreaView, Dimensions,StatusBar,TextInput } from 'react-native'
import * as React from 'react'
import colors from "../../extra/colors"
import fonts from "../../extra/fonts"
import { RFPercentage } from 'react-native-responsive-fontsize'
import Icon1 from "react-native-vector-icons/AntDesign"
import Icon2 from "react-native-vector-icons/Feather"
export default function AddNote() {
    const[val,setval]=React.useState("Hai dei dubbi o delle richieste? Chiedimi quello che vuoi..")
  return (
    <View style={styles.cont1}>
      <View style={styles.cont2}>
        <ImageBackground style={styles.avtar}/>
        <Text style={styles.nametext}>Il tuo nutrizionista</Text>
      </View>
      <TextInput multiline style={styles.tinp} onChangeText={(e)=>setval(e)} value={val}/>
       <View style={styles.botbtn}>
        <TouchableOpacity style={styles.btnbtm}>
            <Text style={styles.btnbtmtext}>
            CHIEDI AL NUTRIZIONISTA
            </Text>
        </TouchableOpacity>
        </View>
    </View>
  )
}

const styles=StyleSheet.create({
    cont1:{
        width:"95%",
        minHeight:Dimensions.get("window").height/2.4,
        backgroundColor:colors.white,
        marginHorizontal:"2.5%",
        marginVertical:RFPercentage(1),
        paddingHorizontal:RFPercentage(2),
        paddingVertical:RFPercentage(1.8),
        elevation:2,
        shadowColor:colors.grey3,
        shadowOffset:{width:1,height:1},
        shadowOpacity:0.4,
        shadowRadius:5,
        borderRadius:RFPercentage(3),
    },
    cont2:{
        display:'flex',
        flexDirection:'row',
        alignItems:"center",
        marginVertical:RFPercentage(1)
    },
    avtar:{
        width:RFPercentage(5),
        height:RFPercentage(5),
        borderRadius:RFPercentage(2),
        backgroundColor:colors.grey3,
        marginRight:RFPercentage(2)
    },
    nametext:{
        fontFamily:fonts.PoppinsBold,
        fontSize:RFPercentage(2.3)
    },
    tinp:{
        width:"95%",
        backgroundColor:colors.white,
        marginHorizontal:"2.5%",
        elevation:2,
        shadowColor:colors.grey3,
        shadowOffset:{width:1,height:1},
        shadowOpacity:0.4,
        shadowRadius:5,
        borderRadius:RFPercentage(3),
        marginVertical:RFPercentage(1),
        minHeight:Dimensions.get("window").height/4.5,
        paddingHorizontal:RFPercentage(2),
        color:colors.grey3,
        fontFamily:fonts.PoppinsRegular
    },
    botbtn:{
        marginVertical:RFPercentage(1),
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    },
    btnbtm:{
        backgroundColor:colors.black,
        width:"70%",
        paddingHorizontal:RFPercentage(2),
        paddingVertical:RFPercentage(1.7),
        borderRadius:RFPercentage(2),
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    },
    btnbtmtext:{
        color:colors.white,
        fontFamily:fonts.PoppinsRegular
    }
})