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

export default function Deletebox({show,closefunc}) {
  return (
    <Modal visible={show} transparent={true} style={style.mnmodal} >
            <View style={style.child1} >
                <View style={style.card} >
                    <TouchableOpacity onPress={()=>closefunc(false)}>
                    <Text style={style.text1}>
                    Svuota giorno
                    </Text>
                    </TouchableOpacity>
                    <Line/>
                    <TouchableOpacity onPress={()=>closefunc(false)}>
                    <Text style={style.text1}>
                    Elimina giornata dal menù
                    </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
  )
}

const style=StyleSheet.create({
    mnmodal:{ 
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
     },
     child1:{ 
    marginTop: (windowHeight / 2) - 50,
      width: "100%",
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center' 
    },
    card:{
         elevation: 5,
         shadowColor:Colors.black,
         shadowOffset:{width:2,height:5},
         shadowOpacity:0.7,
         shadowRadius:5,
          width: "70%",
            borderTopLeftRadius:RFPercentage(2),
            borderTopRightRadius:RFPercentage(2),
          backgroundColor: Colors.white,
     },
     text1:{
        fontFamily:fonts.PoppinsRegular,
        marginVertical:RFPercentage(1),
        paddingHorizontal:RFPercentage(1)
     }
     ,
   })
    