import * as React from 'react';
import { Modal, View, ActivityIndicator, Dimensions ,StyleSheet, TouchableOpacity,Text } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
const windowHeight = Dimensions.get('window').height
import fonts from "../extra/fonts"
import Icon1 from "react-native-vector-icons/AntDesign"
import Icon2 from "react-native-vector-icons/Feather"
import Line from './Line'
// config
import Colors from '../extra/colors';
import { color } from 'react-native-reanimated';
import colors from '../extra/colors';
export default function Detailsbox({closefunc,openfunc}) {  

    return (
    <>
        <View style={style.card} >
            <View style={{marginVertical:RFPercentage(1),  paddingHorizontal:RFPercentage(2)}}>
            <TouchableOpacity onPress={()=>closefunc()}>
                <Icon1 name='close' size={24} color={Colors.black}/>
            </TouchableOpacity>
            </View>
            <View style={{display:'flex',flexDirection:"row",justifyContent:"space-between"}}>
            <Text style={style.text1}>
            Valori nutrizionali
            </Text>
            </View>
            <Text style={style.text2}>
            Seleziona se vuoi vedere i valori nutrizionali dei tuoi pasti.
            </Text>
            <Line/>
            <TouchableOpacity style={style.items}>
                <Icon1 name='eyeo' size={24} color={colors.black}/>
                <Text style={style.itemtext}>
                Espandi tutto il piano
                </Text>
            </TouchableOpacity>
            <Line/>
            <TouchableOpacity style={style.items}>
            <Icon1 name='closecircleo' size={20} color={colors.black}/>
                <Text style={style.itemtext}>
                Svuota piano
                </Text>
            </TouchableOpacity>
            <Line/>
            <TouchableOpacity onPress={()=>
                {
                closefunc()
                openfunc()
            }
                } style={style.items}>
            <Icon1 name='delete' size={20} color={colors.black}/>    
                <Text style={style.itemtext}>
                Elimina piano
                </Text>
            </TouchableOpacity>
            <Line/>
            <TouchableOpacity style={style.items}>
            <Icon1 name='infocirlceo' size={20} color={colors.black}/>
                <Text style={style.itemtext}>
                Come fare un piano?
                </Text>
            </TouchableOpacity>
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
        alignItems:'center'
     },
     itemtext:{
        fontFamily:fonts.PoppinsRegular,
        marginLeft:RFPercentage(2)
     }
    })
    