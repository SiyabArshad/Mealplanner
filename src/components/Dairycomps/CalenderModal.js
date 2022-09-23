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
import Calendarshow from './Calendarshow';
import { TextInput } from 'react-native-gesture-handler';
export default function CalenderModal({closefunc,openfunc,navigation,openprevfunc}) {  
    const[tab,settab]=React.useState("")
    return (
    <>
        <View style={style.card} >
            <View style={{marginVertical:RFPercentage(1),  paddingHorizontal:RFPercentage(2)}}>
            <TouchableOpacity onPress={()=>{
                closefunc()
                openprevfunc()    
                }
            }>
                <Icon2 name='chevron-back' size={24} color={Colors.black}/>
            </TouchableOpacity>
            </View>
                <Text style={[style.text1,{fontSize:RFPercentage(2.2),marginVertical:RFPercentage(2)}]}>
                Salva come piano
                </Text>
                <Text style={[style.text2,{width:"75%",marginBottom:RFPercentage(2)}]}>
                Quali giorni del tuo diario vuoi salvare come Piano
                </Text>

            {
                ["Oggi","gli ultimi 7 giorni"].map((item,i)=>(
                        <View key={i} style={{marginHorizontal:RFPercentage(2),marginVertical:RFPercentage(1)
                        ,display:"flex",flexDirection:"row",alignItems:"center"}}>
                            <TouchableOpacity onPress={()=>settab(item)} style={{width:17,height:17,borderRadius:5,
                                backgroundColor:tab===item?colors.green:colors.grey1}} />
                            <Text style={{fontFamily:fonts.PoppinsRegular,marginLeft:RFPercentage(1)}}>{item}</Text>
                         </View>   
                ))
            }   
            <Calendarshow/>
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
    