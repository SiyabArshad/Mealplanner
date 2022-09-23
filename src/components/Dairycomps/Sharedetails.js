import * as React from 'react';
import { Modal, View, ActivityIndicator, Dimensions ,StyleSheet, TouchableOpacity,Text, ImageBackground } from 'react-native';
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
import { TextInput } from 'react-native-gesture-handler';
export default function Sharedetails({closefunc,openfunc,navigation}) {  

    return (
    <>
        <View style={style.card} >
            <View style={{marginVertical:RFPercentage(1),  paddingHorizontal:RFPercentage(2)}}>
            <TouchableOpacity onPress={()=>closefunc()}>
                <Icon1 name='close' size={24} color={Colors.black}/>
            </TouchableOpacity>
            </View>
                <Text style={[style.text1,{width:"85%",fontSize:RFPercentage(2.2),marginVertical:RFPercentage(2)}]}>
                Condividi  questo giorno del tuo diario con amici di Oreegano
                </Text>
                <TextInput style={{backgroundColor:colors.grey1,width:"90%",
                paddingHorizontal:RFPercentage(1.5),paddingVertical:RFPercentage(1.2),borderRadius:RFPercentage(1.1)
                ,marginHorizontal:"5%"}} placeholderTextColor={colors.black} placeholder="Cerca amici di Oreegano..."/>
            <View style={style.items}>
                <View style={style.rows}>
                <ImageBackground style={{height:30,width:30,backgroundColor:colors.purple,display:"flex",borderRadius:RFPercentage(1.2),
                justifyContent:"center",alignItem:"center"}}>
                    <Text style={{color:colors.white,fontFamily:fonts.PoppinsRegular,textAlign:"center"}}>Ye</Text>
                </ImageBackground>
                <Text style={{marginLeft:RFPercentage(1),fontSize:RFPercentage(2.2),fontFamily:fonts.PoppinsRegular}}>
                Ila
                </Text>
                </View>
                <TouchableOpacity style={{paddingHorizontal:RFPercentage(2.4),paddingVertical:RFPercentage(.5)
                    ,backgroundColor:colors.blue,borderRadius:RFPercentage(1)}}>
                    <Text style={{color:colors.white,fontFamily:fonts.PoppinsRegular}}>Invia</Text>
                </TouchableOpacity>
            </View>
            <View style={{marginHorizontal:RFPercentage(2),marginVertical:RFPercentage(5)}}>
                <View style={{display:'flex',flexDirection:"row",alignItems:"center"}}>
                    <Text style={{marginRight:RFPercentage(1),color:colors.blue,fontFamily:fonts.PoppinsRegular,fontSize:RFPercentage(2.1)}}>Invia il link</Text>
                    <Icon3 name='link' color={colors.blue} size={24}/>    
                </View> 
                <Text style={{marginRight:RFPercentage(1),color:colors.blue,fontFamily:fonts.PoppinsRegular,fontSize:RFPercentage(2.1)}}>Clicca qui per copiare il Link</Text>
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
    