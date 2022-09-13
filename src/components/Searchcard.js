import { View, Text,TouchableOpacity,StyleSheet,ImageBackground,Image,ScrollView,TextInput,FlatList,SafeAreaView, StatusBar,Dimensions } from 'react-native'
import * as React from 'react'
import colors from "../extra/colors"
import fonts from "../extra/fonts"
import { RFPercentage } from 'react-native-responsive-fontsize'
import Icon1 from "react-native-vector-icons/AntDesign"
import Icon2 from "react-native-vector-icons/Feather"
import Icon3 from "react-native-vector-icons/Ionicons"
import Icon4 from "react-native-vector-icons/Entypo"
import Line from './Line'

export default function Searchcard({nav}) {
  let [searchhistory,setsearchhistory]=React.useState(["Pizza carbonara","Petto di pollo al limone","Pane fatto in csasa","Pane fatto in casa"])
  const removefunc=(item)=>{
    setsearchhistory(searchhistory.filter((it)=>it!==item))
  } 
  return (
    <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
        <View style={{flex:1,paddingHorizontal:RFPercentage(2),paddingVertical:RFPercentage(1.5)}}>
            <Text style={{color:colors.grey3,fontFamily:fonts.PoppinsRegular,marginVertical:RFPercentage(2)}}>
            Ricerche recenti 
            </Text>
           {/**search history */}
           {
            searchhistory.map((item,i)=>(
            <TouchableOpacity onPress={()=>nav()} key={i} style={{marginBottom:RFPercentage(2),display:'flex',flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                <Text style={{color:colors.black,fontFamily:fonts.PoppinsRegular}}>{item}</Text>
                <TouchableOpacity onPress={()=>removefunc(item)} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <Icon1 name='close' size={18} color={colors.black}/>
                </TouchableOpacity>
            </TouchableOpacity>
            ))
           }
           {/**search end */}
        </View>
    </ScrollView>
  )
}