import { View, Text,TouchableOpacity,StyleSheet,ImageBackground,Image,ScrollView,FlatList,SafeAreaView, StatusBar } from 'react-native'
import * as React from 'react'
import colors from "../extra/colors"
import fonts from "../extra/fonts"
import { RFPercentage } from 'react-native-responsive-fontsize'
import Icon1 from "react-native-vector-icons/AntDesign"
import Icon2 from "react-native-vector-icons/Feather"
import Line from './Line'
export default function Dropdown() {
  const items=["CALORIE","CARBOIDRATE","GRASI","PROTEINE","FIBRE"]
  const [open,setopen]=React.useState(false)
  const [val,setval]=React.useState("PROTEINE")
    return (
    <>
    <View style={{display:"flex",flexDirection:'row',alignItems:"center",justifyContent:"space-between",borderWidth:RFPercentage(.1),borderColor:colors.black
    ,width:"50%",paddingHorizontal:RFPercentage(.5),paddingVertical:RFPercentage(.2),borderRadius:RFPercentage(1.2)
    }}>
      <Text style={{fontFamily:fonts.PoppinsRegular}}>{val}</Text>
      <TouchableOpacity onPress={()=>setopen(!open)} style={{backgroundColor:colors.black,padding:RFPercentage(.2),borderRadius:RFPercentage(.5)}}>
        <Icon1 name='down' color={colors.white} size={24}></Icon1>
      </TouchableOpacity>
    </View>
    {
        open &&
    <View style={{width:"50%",backgroundColor:colors.grey1,paddingHorizontal:RFPercentage(.5),paddingVertical:RFPercentage(.2)}}>
        {
            items.map((item,i)=>{
                return(
                    <TouchableOpacity onPress={()=>{
                        setval(item)
                        setopen(false)
                    }} key={i} style={{marginBottom:RFPercentage(.3)}}>
                    <Text style={{fontFamily:fonts.PoppinsRegular}} key={i}>{item}</Text>
                    </TouchableOpacity>
                )
            })
        }
    </View>
}
  </>
  )
}