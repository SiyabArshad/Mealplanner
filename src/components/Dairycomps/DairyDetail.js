import * as React from 'react';
import { Modal, View, ActivityIndicator, Dimensions ,StyleSheet, TouchableOpacity,Text } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
const windowHeight = Dimensions.get('window').height
import fonts from "../../extra/fonts"
import Icon1 from "react-native-vector-icons/AntDesign"
import Icon2 from "react-native-vector-icons/Ionicons"
import Icon3 from "react-native-vector-icons/Entypo"
import Line from '../Line'
// config
import Colors from '../../extra/colors';
import { color } from 'react-native-reanimated';
import colors from '../../extra/colors';
export default function DairyDetail({closefunc,openfunc,shareoptionclose,shareoptionopen,calenderopen}) {  
    return (
    <>
        <View style={style.card} >
            <View style={{marginVertical:RFPercentage(1),  paddingHorizontal:RFPercentage(2)}}>
            <TouchableOpacity onPress={()=>closefunc()}>
                <Icon1 name='close' size={24} color={Colors.black}/>
            </TouchableOpacity>
            </View>
            <View style={style.items}>
                <View style={style.rows}>
                <Icon1 name='sharealt' size={24} color={colors.black}/>
                <Text style={style.itemtext}>
                Condividi
                </Text>
                </View>
                <TouchableOpacity onPress={()=>{
                    closefunc()
                    shareoptionopen()
                }}>
                    <Icon3 name='chevron-small-right' size={24} color={colors.black} />
                </TouchableOpacity>
            </View>
            <Line/>
            <View style={style.items}>
                <View style={style.rows}>
            <Icon2 name='checkmark-done-circle' size={20} color={colors.black}/>
                <Text style={style.itemtext}>
                Salva come piano
                </Text>
                </View>
                <TouchableOpacity
                onPress={()=>{
                    closefunc()
                    calenderopen()
                }}
                >
                    <Icon3 name='chevron-small-right' size={24} color={colors.black} />
                </TouchableOpacity>
            </View>
            <Line/>
            <View style={style.items}>
            <View style={style.rows}>
            <Icon1 name='infocirlceo' size={20} color={colors.black}/>
            <Text style={style.itemtext}>
                Come usare il diario
            </Text>
            </View>
            </View>
            <Line/>
            <View>

            </View>
            <View style={{display:"flex",flexDirection:"row",justifyContent:"center",marginVertical:RFPercentage(1)}}>
                <TouchableOpacity style={style.btn1}>
                    <Text style={style.btntext1}>Annulla</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.btn}>
                    <Text style={style.btntext}>Salva</Text>
                </TouchableOpacity>
            </View>
        </View>
</>
  )
}

const style=StyleSheet.create({
    card:{
          width: "100%",
           minHeight: RFPercentage(20),
            borderTopLeftRadius:RFPercentage(2),
            borderTopRightRadius:RFPercentage(2),
          backgroundColor: Colors.white,
          paddingVertical:RFPercentage(1)
        },
     text1:{
        fontFamily:fonts.PoppinsSemiBold,
        marginVertical:RFPercentage(.5),
        paddingHorizontal:RFPercentage(2)
     }
     ,
     text2:{
        fontFamily:fonts.PoppinsExtraLight,
        marginVertical:RFPercentage(.5),
        fontSize:RFPercentage(1.7),
        paddingHorizontal:RFPercentage(2)
   
     },
     btn1:{
        width:"40%",
        backgroundColor:Colors.white,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:RFPercentage(1),
        padding:RFPercentage(.7),
     },
     btntext1:{
        color:Colors.black,
        fontFamily:fonts.PoppinsMedium
     },
     btn:{
        width:"40%",
        backgroundColor:Colors.black,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:RFPercentage(1),
        padding:RFPercentage(.7),
        marginLeft:RFPercentage(.5)
     },
     btntext:{
        color:Colors.white,
        fontFamily:fonts.PoppinsMedium
     },
     checkbox:{
        height:RFPercentage(2.5),
        width:RFPercentage(2.5),
        borderRadius:RFPercentage(.8)
        
     },
     items:{
        padding:RFPercentage(2),
        display:"flex",
        flexDirection:"row",
        alignItems:'center',
        justifyContent:"space-between"
     },
     itemtext:{
        fontFamily:fonts.PoppinsRegular,
        marginLeft:RFPercentage(2)
     },
     rows:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center"
     }
    })
    