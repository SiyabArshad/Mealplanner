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

function Eliminationbox({ closefunc }) {
    return (
                <View style={style.card} >
                <View>
                    <Text style={style.headtext}>
                    Elimina piano?
                    </Text>
                    <Text style={style.headtext2}>
                    Sei sicuro che vuoi eliminare questo piano? Dopo di chè non risulterà più nella tua lista piani. 
                    </Text>
                </View>
                <View style={{display:"flex",flexDirection:"row",justifyContent:"center",marginVertical:RFPercentage(1)}}>
                        <TouchableOpacity style={style.btn1} onPress={()=>closefunc()}>
                            <Text style={style.btntext1}>Annulla</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.btn} onPress={()=>closefunc()}>
                            <Text style={style.btntext}>Elimina</Text>
                        </TouchableOpacity>
                    </View>
                </View>
    );
}
const style=StyleSheet.create({
card:{
      width: "100%",
       minHeight: RFPercentage(20),
       borderRadius:RFPercentage(2),
       backgroundColor: Colors.white,
    padding:RFPercentage(2),
    display:'flex',
    flexDirection:"column",
    justifyContent:"space-between"
 },
 text1:{
    fontFamily:fonts.PoppinsSemiBold,
    marginVertical:RFPercentage(1)
 }
 ,
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
 headtext:{
    fontFamily:fonts.PoppinsBold,
    fontSize:RFPercentage(2.2),
    marginVertical:RFPercentage(1)
 },
 headtext2:{
    fontFamily:fonts.PoppinsRegular,
    fontSize:RFPercentage(1.6),
    marginVertical:RFPercentage(1)
 }
})

export default Eliminationbox;

