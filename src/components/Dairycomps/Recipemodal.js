import * as React from 'react';
import { Modal, View, ActivityIndicator, Dimensions ,StyleSheet, TouchableOpacity,Text, Image,ImageBackground } from 'react-native';
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

export default function Recipemodal({openfunc,closefunc}) {
    const [tab,settab]=React.useState("PORZIONE")
    const [quan,setquan]=React.useState(1)
    return (
        <View style={style.container}>
          <TouchableOpacity onPress={closefunc} style={{width:25,marginHorizontal:RFPercentage(2),marginVertical:RFPercentage(1)}}>
                    <Icon1 name='close' color={colors.black}  size={24}/>
          </TouchableOpacity>
          <Text style={style.toptext}>Cambia la quantità della ricetta</Text>
        {
            Topbar(tab,settab)
        }
        {
            tab==="PORZIONE"&&
            <View style={{width:"100%",minHeight:400,padding:RFPercentage(2),display:"flex",justifyContent:"space-between"}}>
            <View>
            <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginVertical:RFPercentage(2)}}>
                <Text style={{fontFamily:fonts.PoppinsRegular}}>
                Numero di porzioni
                </Text>
                <View style={{display:"flex",flexDirection:"row"}}>
                    <TouchableOpacity disabled={quan<=0} onPress={()=>{
                        setquan(quan-1)
                    }} style={style.inbtn}>
                    <Icon1 name='minus' size={18} color={colors.white}/>
                    </TouchableOpacity>
                    <View style={style.txtbar}>
                        <Text>{quan}</Text>
                    </View>
                    <TouchableOpacity
                    onPress={()=>{
                        setquan(quan+1)
                    }}
                    style={style.inbtn}>
                        <Icon1 name='plus' size={18} color={colors.white}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={style.bars}>
                <Text style={style.leftext}>
                200 gr
                </Text>
                <Text style={style.righttext}>
                Uovo, albume
                </Text>
            </View>
            <View style={style.bars}>
                <Text style={style.leftext}>
                100 gr
                </Text>
                <Text style={style.righttext}>
                Spinaci
                </Text>
            </View>
            <View style={style.bars}>
                <Text style={style.leftext}>
                100 gr
                </Text>
                <Text style={style.righttext}>
                Salmone affumicato
                </Text>
            </View>
            </View>
            <View style={{display:"flex",flexDirection:"row",marginVertical:RFPercentage(1)}}>
                <TouchableOpacity style={{width:"45%",display:"flex",alignItems:"center",justifyContent:"center"
            ,padding:RFPercentage(1)
            }}>
                    <Text style={{color:colors.black,fontFamily:fonts.PoppinsRegular}}>Annulla</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width:"45%",display:"flex",alignItems:"center",justifyContent:"center"
            ,padding:RFPercentage(1),backgroundColor:colors.black,borderRadius:RFPercentage(1.5)
            }}>
                    <Text style={{color:colors.white,fontFamily:fonts.PoppinsRegular}}>Salva</Text>
                </TouchableOpacity>
            </View>
        </View>
        }
        {
            tab==="GRAMMI"&&
            <View style={{width:"100%",minHeight:400,padding:RFPercentage(2),display:"flex",justifyContent:"space-between"}}>
            <View>
            <View style={{display:"flex",justifyContent:'center',alignItems:"center",marginVertical:RFPercentage(1)}}>
                    <TextInput keyboardType='number-pad' selectionColor={colors.black} style={{borderWidth:RFPercentage(.1),borderColor:colors.black,
                    borderRadius:RFPercentage(1.4),textAlign:"center",
                    width:RFPercentage(20),padding:RFPercentage(1)}} placeholderTextColor={colors.grey3} placeholder='1g'/>
             </View>   
            <View style={style.bars}>
                <Text style={style.leftext}>
                200 gr
                </Text>
                <Text style={style.righttext}>
                Uovo, albume
                </Text>
            </View>
            <View style={style.bars}>
                <Text style={style.leftext}>
                100 gr
                </Text>
                <Text style={style.righttext}>
                Spinaci
                </Text>
            </View>
            <View style={style.bars}>
                <Text style={style.leftext}>
                100 gr
                </Text>
                <Text style={style.righttext}>
                Salmone affumicato
                </Text>
            </View>
            </View>
            <View style={{display:"flex",flexDirection:"row",marginVertical:RFPercentage(1)}}>
                <TouchableOpacity style={{width:"45%",display:"flex",alignItems:"center",justifyContent:"center"
            ,padding:RFPercentage(1)
            }}>
                    <Text style={{color:colors.black,fontFamily:fonts.PoppinsRegular}}>Annulla</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{width:"45%",display:"flex",alignItems:"center",justifyContent:"center"
            ,padding:RFPercentage(1),backgroundColor:colors.black,borderRadius:RFPercentage(1.5)
            }}>
                    <Text style={{color:colors.white,fontFamily:fonts.PoppinsRegular}}>Salva</Text>
                </TouchableOpacity>
            </View>
        </View>
        }
        </View>
      )
    }
    const Topbar=(tab,settab)=>{
        let arr=["PORZIONE","GRAMMI"]
        return(
            <>
        <View style={style.topbar}>
            {
                arr.map((item,i)=>(
                    <TouchableOpacity onPress={()=>settab(item)} style={[style.topbtn,{
                        borderBottomWidth:tab===item?RFPercentage(.2):0,
                        borderBottomColor:tab===item?colors.black:colors.white
                    }]} key={i}>
                        <Text style={style.btntext}>{item}</Text>
                 </TouchableOpacity>
                ))
            }
        </View>
        <Line/>
        </>
    )}

    const style=StyleSheet.create({
        container:{
            paddingVertical:RFPercentage(2),
            borderTopLeftRadius:RFPercentage(2),
            borderTopRightRadius:RFPercentage(2)
        },
        toptext:{
            fontFamily:fonts.PoppinsMedium,
            fontSize:RFPercentage(2.1),
            marginHorizontal:RFPercentage(2),
            marginVertical:RFPercentage(2.5)
        },
        topbar:{
            display:"flex",
            flexDirection:"row",
            justifyContent:"space-between"
        },
        topbtn:{
            width:"45%",
            marginHorizontal:"2.5%",
            display:'flex',
            alignItems:"center",
            justifyContent:"center"
        },
        btntext:{
            fontFamily:fonts.PoppinsRegular
        },
        inbtn:{
            backgroundColor:colors.black,
            paddingHorizontal:RFPercentage(1),
            paddingVertical:RFPercentage(.7),
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            borderRadius:RFPercentage(1.3)
        },
        txtbar:{
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            backgroundColor:colors.white,
            paddingHorizontal:RFPercentage(2)
        },
        bars:{
            display:"flex",
            flexDirection:"row",
            marginVertical:RFPercentage(1),
            alignItems:"center"
        },
        leftext:{
            fontFamily:fonts.PoppinsSemiBold,
            fontSize:RFPercentage(2.1)
        },
        righttext:{
            marginLeft:RFPercentage(2),
            fontFamily:fonts.PoppinsRegular,
            fontSize:RFPercentage(2.1)
        }
    })