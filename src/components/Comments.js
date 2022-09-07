import { View, Text,TouchableOpacity,StyleSheet,ImageBackground,Image,ScrollView,FlatList,SafeAreaView, StatusBar,TextInput } from 'react-native'
import * as React from 'react'
import colors from "../extra/colors"
import fonts from "../extra/fonts"
import { RFPercentage } from 'react-native-responsive-fontsize'
import Icon1 from "react-native-vector-icons/AntDesign"
import Icon2 from "react-native-vector-icons/Feather"
import Line from './Line'

export default function Comments() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize:RFPercentage(2.5),fontFamily:fonts.PoppinsMedium,marginBottom:RFPercentage(3)}}>Commenti della community</Text>
        {
            [1,2,3].map((item,i)=>(
                <View key={i} style={styles.messcart}>
                <Text style={{fontFamily:fonts.PoppinsRegular,marginVertical:RFPercentage(1.4)}}>Adoro questa ricetta! La cucino sempre per i compleanni dei miei figli!</Text>
                <View style={styles.uifo}>
                    <View style={{display:"flex",flexDirection:"row",alignItems:'center'}}>
                        <View style={{width:30,height:30,borderRadius:15,backgroundColor:colors.grey3,marginRight:RFPercentage(.5)}}></View>
                        <Text style={{fontFamily:fonts.PoppinsMedium}}>Cristiano Luzuriga</Text>
                    </View>
                    <Text style={{fontFamily:fonts.PoppinsMedium,color:colors.grey3}}>
                    2 anni fa
                    </Text>
                </View> 
        </View>
            ))
        }
        <TextInput selectionColor={colors.black} placeholder='Scrivi un commento...' style={styles.input}></TextInput>
    </View>
  )
}

const styles=StyleSheet.create({
    container:{
        marginVertical:RFPercentage(3)
    },
    messcart:{
        width:"100%",
        backgroundColor:colors.white,
        borderRadius:RFPercentage(1.5),
        paddingHorizontal:RFPercentage(1.8),
        paddingVertical:RFPercentage(1),
        elevation:2,
        shadowColor:colors.grey3,
        shadowRadius:2,
        shadowOpacity:.8,
        shadowOffset:{width:1,height:2},
        marginBottom:RFPercentage(1)
    },
    uifo:{
        display:"flex",
        justifyContent:'space-between',
        flexDirection:"row"
    },
    input:{
        width:"100%",
        fontFamily:fonts.PoppinsRegular,
        backgroundColor:colors.white,
        elevation:2,
        shadowColor:colors.grey3,
        shadowRadius:2,
        shadowOpacity:.8,
        shadowOffset:{width:1,height:2},
        marginVertical:RFPercentage(5),
        paddingHorizontal:RFPercentage(1.5),
        paddingVertical:RFPercentage(2),
        borderRadius:RFPercentage(3)
        
    }
})