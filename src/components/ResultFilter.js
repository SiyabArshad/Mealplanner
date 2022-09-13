import { View, Text,TouchableOpacity,StyleSheet,ImageBackground,Dimensions,Image,ScrollView,TextInput,FlatList,SafeAreaView, StatusBar } from 'react-native'
import * as React from 'react'
import colors from "../extra/colors"
import fonts from "../extra/fonts"
import { RFPercentage } from 'react-native-responsive-fontsize'
import Icon1 from "react-native-vector-icons/AntDesign"
import Icon2 from "react-native-vector-icons/Feather"
import Icon3 from "react-native-vector-icons/Ionicons"
import Icon4 from "react-native-vector-icons/MaterialIcons"
import Ficon from "react-native-vector-icons/MaterialCommunityIcons"
import Line from './Line'
import Ruler from 'react-native-animated-ruler';

export default function ResultFilter({closefunc,tab}) {
    const [typeofp,settypeofp]=React.useState("Vegetariano")
    const [day,setday]=React.useState()
    const [calories,setcalories]=React.useState()
  return (
    <View style={style.container}>
        <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
        <TouchableOpacity onPress={closefunc} style={style.topbtn}>
            <Icon1 name='close' size={24} color={colors.black}/>
        </TouchableOpacity>
        <Text style={style.diet}>Dieta</Text>
        <Text style={style.text2}>Seleziona le tue preferenze</Text>
        <View style={{display:'flex',flexDirection:'row',justifyContent:"space-between",margin:RFPercentage(2)}}>
            <TouchableOpacity onPress={()=>settypeofp("Mangio tutto")} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <Ficon name='hamburger' size={24} color={typeofp==="Mangio tutto"?colors.black :colors.grey3}/>
                <Text style={{fontFamily:fonts.PoppinsRegular,color:typeofp==="Mangio tutto"?colors.black:colors.grey3}}>Mangio tutto</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>settypeofp("Vegetariano")} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <Ficon name='noodles' size={24} color={typeofp==="Vegetariano"?colors.black:colors.grey3}/>
                <Text style={{fontFamily:fonts.PoppinsRegular,color:typeofp==="Vegetariano"?colors.black :colors.grey3}}>Vegetariano</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>settypeofp("Vegano")} style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <Ficon name='fruit-pineapple' size={24} color={typeofp==="Vegano"?colors.black :colors.grey3}/>
                <Text style={{fontFamily:fonts.PoppinsRegular,color:typeofp==="Vegano"?colors.black :colors.grey3}}>Vegano</Text>
            </TouchableOpacity>
        </View>
        <Line/>
        <View style={[style.child1,{display:tab==='PIANI'?"none":"flex"}]}>
            <Text style={style.text3}>Giorni</Text>
            <View style={{width:"100%",marginVertical:RFPercentage(1),display:"flex",alignItems:'center'
            ,justifyContent:"center"}}>
<Ruler
  style={{ borderRadius: 10, elevation: 3 }}
  width={350}
  height={100}
  vertical={false}
  onChangeValue={value =>setday(value)}
  minimum={1}
  maximum={7}
  segmentWidth={2}
  segmentSpacing={20}
  indicatorColor={colors.green}
  indicatorWidth={100}
  indicatorHeight={50}
  indicatorBottom={20}
  step={1}
  stepColor={colors.green}
  stepHeight={40}
  normalColor='#999999'
  normalHeight={20}
  backgroundColor={colors.white}
  numberFontFamily='System'
  numberSize={40}
  numberColor='#000000'
  unit='Day'
  unitBottom={20}
  unitFontFamily='System'
  unitColor='#888888'
  unitSize={16}
  
/>

    </View>


        </View>
        <Line/>
        <View style={[style.child1,{display:tab==='PIANI'?"none":"flex"}]}>
            <Text style={style.text3}>Kcal medie</Text>
            <View style={{width:"100%",marginVertical:RFPercentage(1),display:"flex",alignItems:'center'
            ,justifyContent:"center"}}>
<Ruler
  style={{ borderRadius: 10, elevation: 3 }}
  width={350}
  height={100}
  vertical={false}
  onChangeValue={value =>setcalories(value)}
  minimum={1000}
  maximum={2000}
  segmentWidth={2}
  segmentSpacing={20}
  indicatorColor={colors.green}
  indicatorWidth={100}
  indicatorHeight={50}
  indicatorBottom={20}
  step={1}
  stepColor={colors.green}
  stepHeight={40}
  normalColor='#999999'
  normalHeight={20}
  backgroundColor={colors.white}
  numberFontFamily='System'
  numberSize={40}
  numberColor='#000000'
  unit='Kcal'
  unitBottom={20}
  unitFontFamily='System'
  unitColor='#888888'
  unitSize={16}
  
/>

    </View>
  
        </View>
        <Line/>
            <View style={{display:"flex",flexDirection:"row",justifyContent:"center",marginVertical:RFPercentage(1)}}>
                <TouchableOpacity style={style.btn1}>
                    <Text style={style.btntext1}>Cancella tutto</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.btn}>
                    <Text style={style.btntext}>Conferma</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    </View>
  )
}

const style=StyleSheet.create({
    container:{
        backgroundColor:colors.white,
        borderTopLeftRadius:RFPercentage(2),
        borderTopRightRadius:RFPercentage(2),
        paddingBottom:RFPercentage(7),
       },
    topbtn:{
        margin:RFPercentage(2)
    },
    diet:{
        fontFamily:fonts.PoppinsMedium,
        fontSize:RFPercentage(3),
        marginHorizontal:RFPercentage(2),
        marginBottom:RFPercentage(.5)
    },
    text2:{
        fontFamily:fonts.PoppinsLight,
        marginHorizontal:RFPercentage(2),
        marginBottom:RFPercentage(.5)
    },
    child1:{
        padding:RFPercentage(2)
    },
    text3:{
        fontFamily:fonts.PoppinsSemiBold,
        fontSize:RFPercentage(2.5),
        marginBottom:RFPercentage(.5)
    },
    text4:{
        fontFamily:fonts.PoppinsLight,
        marginBottom:RFPercentage(3)
    },
    btn1:{
       width:"40%",
       backgroundColor:colors.white,
       display:"flex",
       justifyContent:"center",
       alignItems:"center",
       borderRadius:RFPercentage(1),
       paddingHorizontal:RFPercentage(.7),
       paddingVertical:RFPercentage(1),
    },
    btntext1:{
       color:colors.black,
       fontFamily:fonts.PoppinsMedium
    },
    btn:{
       width:"40%",
       backgroundColor:colors.black,
       display:"flex",
       justifyContent:"center",
       alignItems:"center",
       borderRadius:RFPercentage(1),
       paddingHorizontal:RFPercentage(.7),
       paddingVertical:RFPercentage(1),
       marginLeft:RFPercentage(.5)
    },
    btntext:{
       color:colors.white,
       fontFamily:fonts.PoppinsMedium
    }
})