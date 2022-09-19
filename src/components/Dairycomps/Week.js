import { View, Text,TouchableOpacity,StyleSheet,ImageBackground,Image,ScrollView,FlatList,SafeAreaView, StatusBar } from 'react-native'
import * as React from 'react'
import colors from "../../extra/colors"
import fonts from "../../extra/fonts"
import { RFPercentage } from 'react-native-responsive-fontsize'
import Icon1 from "react-native-vector-icons/AntDesign"
import Icon2 from "react-native-vector-icons/Feather"
export default function Week() {
  let Data=[{
    number:18,
    key:"v"
  },
  {
    number:19,
    key:"s"
  },
  {
    number:20,
    key:"d"
  },
  {
    number:21,
    key:"l"
  },
  {
    number:22,
    key:"M"
  },
  {
    number:23,
    key:"M"
  },
  {
    number:24,
    key:"g"
  },
  {
    number:25,
    key:"v"
  },
  {
    number:26,
    key:"v"
  },
  {
    number:18,
    key:"v"
  },
  {
    number:19,
    key:"s"
  },
  {
    number:20,
    key:"d"
  },
  {
    number:21,
    key:"l"
  },
  {
    number:22,
    key:"M"
  },
  {
    number:23,
    key:"M"
  },
  {
    number:24,
    key:"g"
  },
  {
    number:25,
    key:"v"
  },
  {
    number:26,
    key:"v"
  },
]
const [curr,setcurr]=React.useState()
console.log(curr)
  return(
    <>
    <ScrollView style={{backgroundColor:colors.grey1}} horizontal={true} showsHorizontalScrollIndicator={false}>
    <View style={{display:"flex",flexDirection:"row"}}>
    {
      Data.map((item,i)=>(
        <View key={i} style={{backgroundColor:colors.white,display:"flex",alignItems:"center"}}>
        <View style={{display:"flex",alignItems:"center",marginVertical:RFPercentage(.2),backgroundColor:colors.grey1}}>
        <TouchableOpacity onPress={()=>setcurr(item.number)} key={i} style={{backgroundColor:curr===item.number?colors.grey3:colors.white,width:curr===item.number?RFPercentage(7) :RFPercentage(4),height:RFPercentage(4),borderRadius:RFPercentage(2)
          ,display:"flex",justifyContent:"center",alignItems:"center",marginHorizontal:RFPercentage(1)
          }}>
            <Text style={{color:curr===item.number?colors.black:colors.grey3}}>{item.number}</Text>
          </TouchableOpacity>
          </View>
          <Text style={{color:curr===item.number?colors.black:colors.grey3}}>{item.key}</Text>
          </View>
      ))
    }
    </View>
    </ScrollView>
    </>
    )
}

