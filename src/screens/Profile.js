import { View, Text,TouchableOpacity,StyleSheet,ImageBackground,Image,ScrollView,FlatList,SafeAreaView, StatusBar } from 'react-native'
import * as React from 'react'
import colors from "../extra/colors"
import fonts from "../extra/fonts"
import { RFPercentage } from 'react-native-responsive-fontsize'
import Icon1 from "react-native-vector-icons/AntDesign"
import Icon2 from "react-native-vector-icons/Ionicons"
import Line from '../components/Line'
import Deletebox from '../components/Deletebox'
import { Modalize } from 'react-native-modalize';
import Ingredient from "../components/Ingredient"
import Seso from '../components/Seso'
import Sport from '../components/Sport'
import Movement from '../components/Movement'
import { TextInput } from 'react-native-gesture-handler'

export default function Profile({navigation}) {
      const modalizesesoRef = React.useRef(null);
    const onsesoOpen = () => {
        modalizesesoRef.current?.open();
      };
      const onsesoclose = () => {
        modalizesesoRef.current?.close();
      };
      const modalizesportRef = React.useRef(null);
      const onsportOpen = () => {
          modalizesportRef.current?.open();
        };
        const onsportclose = () => {
          modalizesportRef.current?.close();
        };
        const modalizemovRef = React.useRef(null);
        const onmovOpen = () => {
            modalizemovRef.current?.open();
          };
          const onmovclose = () => {
            modalizemovRef.current?.close();
          };
      
    
    return (
    <View  style={style.container}>
     <Modalize adjustToContentHeight={true} ref={modalizesesoRef} >
        <Seso closefunc={onsesoclose}/>
    </Modalize>
    <Modalize adjustToContentHeight={true} ref={modalizesportRef} >
        <Sport closefunc={onsportclose}/>
    </Modalize> 
    <Modalize adjustToContentHeight={true} ref={modalizemovRef} >
        <Movement closefunc={onmovclose}/>
    </Modalize> 
     
      <Text style={style.toptext}>Oreegano sta usando questo profilo</Text>
      <Line/>
      <TouchableOpacity style={style.parch}>
        <Text style={style.text1}>Età</Text>
        <TextInput selectionColor={colors.black} placeholderTextColor={colors.black} placeholder='32 anni'/>
      </TouchableOpacity>
      <Line/>
      <TouchableOpacity onPress={()=>{
       
        onsesoOpen()
      }} style={style.parch}>
        <Text style={style.text1}>Sesso</Text>
        <Text style={style.text2}>Uamo</Text>
      </TouchableOpacity>
      <Line/>
      <TouchableOpacity style={style.parch}>
        <Text style={style.text1}>Altezza</Text>
        <TextInput selectionColor={colors.black} placeholderTextColor={colors.black} placeholder='186 cm'/>
      </TouchableOpacity>
      <Line/>
      <TouchableOpacity style={style.parch}>
        <Text style={style.text1}>Peso</Text>
        <TextInput selectionColor={colors.black} placeholderTextColor={colors.black} placeholder='87,5 kg'/>
      </TouchableOpacity>
      <Line/>
      <TouchableOpacity style={style.parch}>
        <Text style={style.text1}>Obiettivo</Text>
        <TextInput selectionColor={colors.black} placeholderTextColor={colors.black} placeholder='Perdere peso'/>
      </TouchableOpacity>
      <Line/>
      <TouchableOpacity
      onPress={()=>{
        onsportOpen()
      }} 
      style={style.parch}>
        <Text style={style.text1}>Sport</Text>
        <Text style={style.text2}>Poco</Text>
      </TouchableOpacity>
      <Line/>
      <TouchableOpacity style={style.parch}
       onPress={()=>{
        onmovOpen()
      }} 
     
      >
        <Text style={style.text1}>Movimento</Text>
        <Text style={style.text2}>Poco</Text>
      </TouchableOpacity>
      <Line/>
      <View style={{display:"flex",flexDirection:"row",justifyContent:"center",marginTop:RFPercentage(2),marginBottom:RFPercentage(3)}}>
                        <TouchableOpacity style={style.btn1}>
                            <Text style={style.btntext1}>Annulla</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={style.btn} onPress={()=>navigation.navigate("nutritions")}>
                            <Text style={style.btntext}>Continua</Text>
                        </TouchableOpacity>
        </View>
    </View>
  )
}

const style=StyleSheet.create({
    container:{
        backgroundColor:colors.white,
        flex:1
    },
    topicon:{
        margin:RFPercentage(2)
    },
    toptext:{
        color:colors.grey3,
        fontFamily:fonts.PoppinsLight,
        textAlign:"center",
        marginBottom:RFPercentage(2),
        marginTop:RFPercentage(2)
    },
    parch:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        paddingVertical:RFPercentage(1),
        marginVertical:RFPercentage(1),
        paddingHorizontal:RFPercentage(3)
    },
    text1:{
        fontFamily:fonts.PoppinsSemiBold,
        fontSize:RFPercentage(2.5)
    },
    text2:{
        fontFamily:fonts.PoppinsRegular
    },
    btn1:{
        width:"40%",
        backgroundColor:colors.white,
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        borderRadius:RFPercentage(1),
        paddingHorizontal:RFPercentage(.7),
        paddingVertical:RFPercentage(1.2),
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
        paddingVertical:RFPercentage(1.2),
        marginLeft:RFPercentage(.5)
     },
     btntext:{
        color:colors.white,
        fontFamily:fonts.PoppinsMedium
     }
})