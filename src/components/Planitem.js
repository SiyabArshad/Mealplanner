import { View, Text,TouchableOpacity,StyleSheet,ImageBackground,Image,ScrollView,TextInput,FlatList,SafeAreaView, StatusBar } from 'react-native'
import * as React from 'react'
import colors from "../extra/colors"
import fonts from "../extra/fonts"
import { RFPercentage } from 'react-native-responsive-fontsize'
import Icon1 from "react-native-vector-icons/AntDesign"
import Icon2 from "react-native-vector-icons/Feather"
import Icon3 from "react-native-vector-icons/Ionicons"
import Icon4 from "react-native-vector-icons/MaterialIcons"
import Line from './Line'
export default function Planitem() {
    const[pressed,setpresssed]=React.useState(false)
  return (
    <TouchableOpacity style={style.parent} onPress={()=>setpresssed(!pressed)}>
    <ImageBackground imageStyle={{borderRadius:RFPercentage(2.5)}} resizeMode='cover' source={require("../Assets/planitem.png")} style={style.container}>
       <View style={style.child1}>
            <TouchableOpacity style={style.heart}>
                <Icon1 name='heart' color={colors.magenta} size={24}></Icon1>
            </TouchableOpacity>
       </View>
       <View style={style.child2}>
            <TouchableOpacity style={[style.tru,{display:!pressed&&"none"}]}>
                <Icon4 name='done' color={colors.white} size={24}/>
            </TouchableOpacity>
       </View>
       <View style={style.child3}>
            <Image style={{position:"absolute",top:-15}} source={require("../Assets/lightstar.png")}/>
            <Text style={{fontFamily:fonts.PoppinsMedium,marginTop:RFPercentage(2)}}>
            Frittata di pizza con pomodori pachino
            </Text>
            <View style={{display:"flex",flexDirection:"row",marginVertical:RFPercentage(.5),marginLeft:RFPercentage(1)}}>
                <TouchableOpacity style={{paddingHorizontal:RFPercentage(.8),paddingVertical:RFPercentage(.5)
                ,marginRight:RFPercentage(1),backgroundColor:colors.grey1 ,borderRadius:RFPercentage(1.2)
                }}>
                    <Text style={{fontFamily:fonts.PoppinsRegular,fontSize:RFPercentage(1.6),textAlign:"center"
                ,color:colors.green
                }}>
                    STAGIONALE
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{paddingHorizontal:RFPercentage(.8),paddingVertical:RFPercentage(.5)
                ,marginRight:RFPercentage(1),backgroundColor:colors.grey1 ,borderRadius:RFPercentage(1.2)
                }}>
                    <Text style={{fontFamily:fonts.PoppinsRegular,fontSize:RFPercentage(1.6),textAlign:"center"
                ,color:colors.purple
                }}>
                    FITNESS
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{paddingHorizontal:RFPercentage(.8),paddingVertical:RFPercentage(.5)
                ,marginRight:RFPercentage(1),backgroundColor:colors.grey1 ,borderRadius:RFPercentage(1.2)
                }}>
                    <Text style={{fontFamily:fonts.PoppinsRegular,fontSize:RFPercentage(1.6),textAlign:"center"
                ,color:colors.orange
                }}>
                    VITAMINA C
                    </Text>
                </TouchableOpacity>
            </View>
       </View>
    </ImageBackground>
    </TouchableOpacity>
  )
}
const style=StyleSheet.create({
    parent:{
        width:"95%",
        height:RFPercentage(30),
        marginBottom:RFPercentage(1.5)
        ,borderRadius:RFPercentage(2.5),
    },
    container:{
        width:"100%",
        height:"100%",
        display:"flex",
        justifyContent:'space-between',
    },
    child1:{
        paddingTop:RFPercentage(1),
        paddingHorizontal:RFPercentage(2.5),
        display:'flex',
        flexDirection:"row",
        justifyContent:"flex-end" 
    },
    heart:{
        backgroundColor:colors.transgrey,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        padding:RFPercentage(.6),
        borderRadius:RFPercentage(.8)
    },
    tru:{
        backgroundColor:"skyblue",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        padding:RFPercentage(.6),
        borderRadius:RFPercentage(.8)
    },
    child2:{
        display:'flex',
        flexDirection:"row",
        justifyContent:"center" 
    },
    child3:{
        backgroundColor:colors.transgrey,
        borderTopLeftRadius:RFPercentage(1),
        borderTopRightRadius:RFPercentage(1),
        borderBottomLeftRadius:RFPercentage(4),
        borderBottomRightRadius:RFPercentage(4),
        padding:RFPercentage(.8),
        margin:RFPercentage(.8)   
    }
})