import { View, Text,TouchableOpacity,StyleSheet,ImageBackground,Image,ScrollView,FlatList,SafeAreaView, Dimensions,StatusBar,TextInput } from 'react-native'
import * as React from 'react'
import colors from "../../extra/colors"
import fonts from "../../extra/fonts"
import { RFPercentage } from 'react-native-responsive-fontsize'
import Icon1 from "react-native-vector-icons/AntDesign"
import Icon2 from "react-native-vector-icons/Feather"
import Dropdown from '../Dropdown'
import Chart from '../Chart'
import Line from '../Line'

export default function DairyOptions({navigation,openfunc,closefunc}) {
  return (
    <View style={style.container}>
      <TouchableOpacity onPress={closefunc}>
        <Icon1 name='close' size={24} color={colors.black}/>
      </TouchableOpacity>
      <Text style={style.regtext}>
      Aggiungi al diario
      </Text>
      <View>
        <View style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",marginVertical:RFPercentage(2)}}>
            <TouchableOpacity style={{marginRight:RFPercentage(2),padding:5,display:"flex",alignItems:"center",justifyContent:"center"}}>
                <Image resizeMethod='contain' style={style.img} source={require("../../Assets/Cup.png")}/>
                <Text style={{fontSize:RFPercentage(2.1),marginTop:RFPercentage(.5)}}>Colazione</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft:RFPercentage(2),padding:5,display:"flex",alignItems:"center",justifyContent:"center"}}>
                <Image resizeMethod='contain' style={style.img} source={require("../../Assets/Chinise.png")}/>
                <Text style={{fontSize:RFPercentage(2.1),marginTop:RFPercentage(.5)}}>Pranzo</Text>
            </TouchableOpacity>
        </View>
        <View style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",marginVertical:RFPercentage(2)}}>
            <TouchableOpacity style={{marginHorizontal:RFPercentage(2),padding:5,display:"flex",alignItems:"center",justifyContent:"center"}}>
                <Image resizeMethod='contain' style={style.img} source={require("../../Assets/Apple.png")}/>
                <Text style={{fontSize:RFPercentage(2.1),marginTop:RFPercentage(.5)}}>Spuntino</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginHorizontal:RFPercentage(2),padding:5,display:"flex",alignItems:"center",justifyContent:"center"}}>
                <Image resizeMethod='contain' style={style.img} source={require("../../Assets/Beach.png")}/>
                <Text style={{fontSize:RFPercentage(2.1),marginTop:RFPercentage(.5)}}>Acqua</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginHorizontal:RFPercentage(2),padding:5,display:"flex",alignItems:"center",justifyContent:"center"}}>
                <Image resizeMethod='contain' style={style.img} source={require("../../Assets/Moon.png")}/>
                <Text style={{fontSize:RFPercentage(2.1),marginTop:RFPercentage(.5)}}>Cena</Text>
            </TouchableOpacity>
        </View>
        <View style={{display:"flex",flexDirection:"row",justifyContent:"center",alignItems:"center",marginVertical:RFPercentage(2)}}>
            <TouchableOpacity style={{marginRight:RFPercentage(2),padding:5,display:"flex",alignItems:"center",justifyContent:"center"}}>
                <Image resizeMethod='contain' style={style.img} source={require("../../Assets/Bice.png")}/>
                <Text style={{fontSize:RFPercentage(2.1),marginTop:RFPercentage(.5)}}>Attività</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{marginLeft:RFPercentage(2),padding:5,display:"flex",alignItems:"center",justifyContent:"center"}}>
                <Image resizeMethod='contain' style={style.img} source={require("../../Assets/Dialog.png")}/>
                <Text style={{fontSize:RFPercentage(2.1),marginTop:RFPercentage(.5)}}>Note</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

const style=StyleSheet.create({
    container:{
        paddingHorizontal:RFPercentage(2),
        paddingVertical:RFPercentage(1.3)
    },
    regtext:{
        fontFamily:fonts.PoppinsMedium,
        fontSize:RFPercentage(2.4),
        marginVertical:RFPercentage(3)
    }
})