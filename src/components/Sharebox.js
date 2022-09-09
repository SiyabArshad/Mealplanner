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

function Sharebox({ show,closefunc }) {
    const [checkedindex, setCheckedindex] = React.useState();
    return (
        <Modal visible={show} transparent={true} style={style.mnmodal} >
            <View style={style.child1} >
                <View style={style.card} >
                    <View style={{marginBottom:RFPercentage(1)}}>
                    <TouchableOpacity onPress={()=>closefunc(false)}>
                        <Icon1 name='close' size={24} color={Colors.black}/>
                    </TouchableOpacity>
                    </View>
                    <Text style={style.text1}>
                        Seleziona chi vede il tuo piano
                    </Text>
                    <View>
                        {
                            ["Tutti","Solo io"].map((item,i)=>{
                                return(
                        <View key={i} style={{display:"flex",flexDirection:"row",justifyContent:"space-between"
                        ,marginBottom:RFPercentage(.5)}}>
                            <Text style={{fontFamily:fonts.PoppinsRegular}}>{item}</Text>
                            <TouchableOpacity onPress={()=>{
                                setCheckedindex(i)
                        }} style={[style.checkbox,
                                {backgroundColor:checkedindex===i?Colors.green:Colors.grey2}]}/>
                        </View>
                                )
                            })
                        }
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
            </View>
        </Modal>
    );
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
       minHeight: RFPercentage(20),
        borderTopLeftRadius:RFPercentage(2),
        borderTopRightRadius:RFPercentage(2),
      backgroundColor: Colors.white,
    padding:RFPercentage(2)
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
    
 }
})

export default Sharebox;

