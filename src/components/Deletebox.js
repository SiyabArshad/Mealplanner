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

export default function Deletebox() {
  return (
                <View style={style.card} >
                    <TouchableOpacity>
                    <Text style={style.text1}>
                    Svuota giorno
                    </Text>
                    </TouchableOpacity>
                    <Line/>
                    <TouchableOpacity>
                    <Text style={style.text1}>
                    Elimina giornata dal menù
                    </Text>
                    </TouchableOpacity>
                </View>
        )
}

const style=StyleSheet.create({
    card:{
          width: "100%",
          borderTopLeftRadius:RFPercentage(2),
          borderTopRightRadius:RFPercentage(2),
          backgroundColor: Colors.white,
          paddingBottom:RFPercentage(5)
     },
     text1:{
        fontFamily:fonts.PoppinsRegular,
        marginVertical:RFPercentage(1),
        paddingHorizontal:RFPercentage(1)
     }
     ,
   })
    