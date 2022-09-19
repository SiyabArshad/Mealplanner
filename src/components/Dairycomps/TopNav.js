import { View, Text,TouchableOpacity,StyleSheet,ImageBackground,Image,ScrollView,FlatList,SafeAreaView, StatusBar } from 'react-native'
import * as React from 'react'
import colors from "../../extra/colors"
import fonts from "../../extra/fonts"
import { RFPercentage } from 'react-native-responsive-fontsize'
import Icon1 from "react-native-vector-icons/AntDesign"
import Icon2 from "react-native-vector-icons/Feather"
export default function TopNav({navfunc}) {
    const navtexts=["note","pasti","ATTIVITA’"]
    const [tab,settab]=React.useState("note")
  return (
    <View style={styles.con1}>
      {
        navtexts.map((item,i)=>(
            <TouchableOpacity onPress={()=>{settab(item)
            navfunc(item)
            }} style={[styles.btn,{
                borderBottomWidth:tab===item?RFPercentage(.2):0,borderBottomColor:tab===item?colors.black:colors.white
            }]} key={i}>
                <Text style={styles.btntext}>{item}</Text>
            </TouchableOpacity>
        ))
      }
    </View>
  )
}

const styles=StyleSheet.create({
    con1:{
        paddingHorizontal:RFPercentage(2),
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:RFPercentage(1),
        backgroundColor:colors.white
    },
    btn:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        width:"33%",
        paddingVertical:RFPercentage(.5)
    },
    btntext:{
        fontFamily:fonts.PoppinsMedium,
        textTransform:"uppercase"
    }
})