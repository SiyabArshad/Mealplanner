import { View, Text,TouchableOpacity,StyleSheet,ImageBackground,Image,Dimensions,ScrollView,TextInput,FlatList,SafeAreaView, StatusBar } from 'react-native'
import * as React from 'react'
import colors from "../extra/colors"
import fonts from "../extra/fonts"
import { RFPercentage } from 'react-native-responsive-fontsize'
import Icon1 from "react-native-vector-icons/EvilIcons"
import Icon2 from "react-native-vector-icons/Feather"
import Icon3 from "react-native-vector-icons/Ionicons"
import Icon4 from "react-native-vector-icons/Entypo"
import Line from './Line'
import Searchcard from './Searchcard'
export default function Searchcomp({navigation,spchange}) {
    const [search,setsearch]=React.useState("")
   const moveto=()=>{
    navigation.navigate("result")
   }
  return (
    <View style={style.container}>
        <View style={style.child1}>
            <TouchableOpacity onPress={()=>spchange(false)}>
                <Icon3 name='chevron-back' size={34} color={colors.black}/>
            </TouchableOpacity>
            <View style={style.searchbox}>
            <Icon1 name='search' size={24} color={colors.black}/>
            <TextInput placeholderTextColor={colors.black} selectionColor={colors.black} value={search} onChangeText={(e)=>{
                setsearch(e)
                }} style={style.search} placeholder='Search'/>
            </View>
            <TouchableOpacity onPress={()=>{
                setsearch("")
                }}>
            <Text style={[style.cancle,{display:search===''?"none":"flex"}]}>Annulla</Text>
            </TouchableOpacity>
      </View>
      <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
      {
        search!==''?
        <Searchcard nav={moveto}/>
        :
        <></>
      }
{
    [1,2,3].map((item,i)=>(
        <View key={i} style={{display:"flex",alignItems:"center"}}>
        <ImageBackground resizeMode='stretch' imageStyle={{borderRadius:RFPercentage(4)}} source={require("../Assets/italian.png")} style={style.cardcomp}>
          <Text style={style.toptext}>
          Lasciati ispirare da Oreegano
          </Text>
          <View style={{marginHorizontal:RFPercentage(2),marginBottom:RFPercentage(1)}}>
          <Image source={require("../Assets/rcbtn.png")}/>
          <Image source={require("../Assets/ing.png")}/>
          <Image source={require("../Assets/pianibtn.png")}/>
          </View>
        </ImageBackground>
        </View>
    ))
}
      </ScrollView>
    </View>
  )
}

const style=StyleSheet.create({
    container:{
        padding:RFPercentage(1)
    },
    child1:{
        paddingHorizontal:RFPercentage(1.5),
        paddingVertical:RFPercentage(1),
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    searchbox:{
        width:RFPercentage(28),
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        borderWidth:RFPercentage(.1),
        borderRadius:RFPercentage(1.8)
    },
    search:{
        width:"90%",
        paddingHorizontal:RFPercentage(1.5),
        paddingVertical:RFPercentage(.6),
        fontFamily:fonts.PoppinsRegular
    },
    cancle:{
        color:colors.green,
        fontFamily:fonts.PoppinsRegular
    },
cardcomp:{
    width:RFPercentage(47),
    minHeight:RFPercentage(42),
    backgroundColor:colors.black,
    borderRadius:RFPercentage(2),
    resizeMode:"cover",
    marginBottom:RFPercentage(1)
} ,
toptext:{
    marginHorizontal:RFPercentage(2.5),
    marginVertical:RFPercentage(2),
    color:colors.white,
    fontFamily:fonts.PoppinsBold,
    fontSize:RFPercentage(4)
}
})
