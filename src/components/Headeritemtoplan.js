import { View, Text,TouchableOpacity,StyleSheet,ImageBackground,Image,ScrollView,TextInput,FlatList,SafeAreaView, StatusBar } from 'react-native'
import * as React from 'react'
import colors from "../extra/colors"
import fonts from "../extra/fonts"
import { RFPercentage } from 'react-native-responsive-fontsize'
import Icon1 from "react-native-vector-icons/EvilIcons"
import Icon2 from "react-native-vector-icons/Feather"
import Icon3 from "react-native-vector-icons/Ionicons"
import Icon4 from "react-native-vector-icons/Entypo"
import Line from './Line'
export default function Headeritemtoplan({navigation,searchfunc,openfunc,currtab}) {
    const [search,setsearch]=React.useState("")
    let itemsheader=["MIE RICETTE","COMMUNITY","INGREDIENTI","CUSTOM"]
    const[tab,settab]=React.useState("MIE RICETTE")
  return (
    <View>
      <View style={style.child1}>
            <TouchableOpacity onPress={()=>navigation.navigate("home")}>
                <Icon3 name='chevron-back' size={34} color={colors.black}/>
            </TouchableOpacity>
            <View style={style.searchbox}>
            <Icon1 name='search' size={24} color={colors.black}/>
            <TextInput placeholderTextColor={colors.black} selectionColor={colors.black} value={search} onChangeText={(e)=>{
                setsearch(e)
                searchfunc(e)
                }} style={style.search} placeholder='Cerca'/>
            </View>
            <TouchableOpacity onPress={()=>{
                setsearch("")
                searchfunc("")
                }}>
            <Text style={[style.cancle,{display:search===''?"none":"flex"}]}>Annulla</Text>
            </TouchableOpacity>
      </View>
      <View style={[style.child2,{display:search!==''?"none":"flex",}]}>
            {
                itemsheader.map((item,i)=>(
                    <TouchableOpacity 
                    onPress={()=>{settab(item)
                    currtab(item)
                    }} style={[style.tabbtn,{borderBottomColor:tab===item?colors.black:colors.white
                    ,borderBottomWidth:tab===item?RFPercentage(.2):0,
                    }]} key={i}>
                        <Text style={style.tabbtntext}>{item}</Text>
                    </TouchableOpacity>
                ))
            }
      </View>
    <View style={[style.child3,{display:search!==''||tab==='CUSTOM'?"none":"flex",}]}>
        <TouchableOpacity onPress={openfunc}>
            <Image source={require("../Assets/Filter.png")}/>
        </TouchableOpacity> 
        <Text style={style.filtertext}>Modifica filtri (3)</Text>
    </View>
    </View>
  )
}

const style=StyleSheet.create({
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
    child2:{
        paddingHorizontal:RFPercentage(1.5),
        paddingTop:RFPercentage(1),
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:'center',
        borderBottomWidth:RFPercentage(.1),
        borderBottomColor:colors.black
    },
    tabbtn:{
        paddingHorizontal:RFPercentage(.6),
        paddingVertical:RFPercentage(.4),
        marginRight:RFPercentage(.3)
    },
    tabbtntext:{
        fontFamily:fonts.PoppinsRegular
    },
    child3:{
        paddingHorizontal:RFPercentage(1.5),
        paddingVertical:RFPercentage(1),
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        marginVertical:RFPercentage(1.5),
    
    },
    filtertext:{
        fontFamily:fonts.PoppinsMedium,
        marginLeft:RFPercentage(1)
    }
})