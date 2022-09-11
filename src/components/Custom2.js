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
import Slider from '@react-native-community/slider';
const g1protein=4//4calories in 1 gram of protein
const g1carb=4//4calories in 1 gram of carb
const g1fat=9//9calories in 1 gram of fat
export default function Custom2() {
  const[searchval,setsearchval]=React.useState('')
  const[calories,setcalories]=React.useState(0);
  const[carb,setcarb]=React.useState(0);
  const[protein,setprotein]=React.useState(0);
  const[fat,setfat]=React.useState(0);
  const[proteinpercentage,setproteinpercentage]=React.useState(0)
  const[fatpercentage,setfatpercentage]=React.useState(0)
  const[carbpercentage,setcarbpercentage]=React.useState(0)

  const proteinpercentagecalculation=(e)=>{
      setproteinpercentage(((e*g1protein)/calories)*100)
  }
  const carbpercentagecalculation=(e)=>{
      setcarbpercentage(((e*g1carb)/calories)*100)
  } 
  const fatpercentagecalculation=(e)=>{
    setfatpercentage(((e*g1fat)/calories)*100)
  }
  return (
    <View style={style.container}>
    <Text style={style.text1}>
    Nome pasto
    </Text>
    <TextInput 
      onChangeText={(e)=>setsearchval(e)}
      value={searchval}
      placeholder='Dai un nome al tuo pasto personalizzato' 
      selectionColor={colors.black} style={style.search}
    />
    <View style={{marginVertical:RFPercentage(2)}}>
    <Text style={style.text2}>
    Scegli tu la quantità di calorie e i valori
    </Text>
    <Text style={style.text2}>
    nutrizionali che hai assunto per questo pasto.
    </Text>
    </View>
    <Text style={[style.text1,{fontSize:RFPercentage(2.5)}]}>
      Calorie
    </Text>
    <View style={{marginVertical:RFPercentage(1),display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
        <Text style={{fontFamily:fonts.PoppinsRegular,width:"65%"}}>
        Calorie totali del pasto
        </Text>
        <TextInput onChangeText={(e)=>setcalories(e)} value={calories} selectionColor={colors.black} placeholder='1Kcal' style={style.inp}/>
    </View>
    <Text style={[style.text1,{fontSize:RFPercentage(2.5)}]}>
    Valori nutrizionali
    </Text>
    <View style={{marginVertical:RFPercentage(1),display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
        <Text style={{fontFamily:fonts.PoppinsRegular,width:"65%"}}>
        Carboidrati
        </Text>
        <TextInput onChangeText={(e)=>{
          setcarb(e)
          carbpercentagecalculation(e)
        }} value={carb} selectionColor={colors.black} placeholder='1g' style={style.inp}/>
    </View>
    <View style={{marginVertical:RFPercentage(1),display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
        <Text style={{fontFamily:fonts.PoppinsRegular,width:"65%"}}>
        Proteine
        </Text>
        <TextInput onChangeText={(e)=>{
          setprotein(e)
          proteinpercentagecalculation(e)
        }} value={protein} selectionColor={colors.black} placeholder='1g' style={style.inp}/>
    </View>
    <View style={{marginVertical:RFPercentage(1),display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
        <Text style={{fontFamily:fonts.PoppinsRegular,width:"65%"}}>
        Grassi
        </Text>
        <TextInput onChangeText={(e)=>{
          setfat(e)
          fatpercentagecalculation(e)
          }} value={fat} selectionColor={colors.black} placeholder='1g' style={style.inp}/>
    </View>
    <View style={style.addphoto}>
        <Text style={style.text3}>Aggiungi foto</Text>
        <TouchableOpacity>
          <Icon1 name='plus' size={24} color={colors.black}></Icon1>
        </TouchableOpacity>
      </View>
      {
        proteinpercentage+fatpercentage+carbpercentage>100 &&
      <Text style={{fontFamily:fonts.PoppinsRegular,color:"red"}}>
      Attento, la somma dei tre parametri non fa 100%
      </Text>
  }
 </View>
  )
}

const style=StyleSheet.create({
  container:{
    paddingHorizontal:RFPercentage(2),
    paddingVertical:RFPercentage(1.5)
  },
  text1:{
    fontFamily:fonts.PoppinsMedium,
    marginVertical:RFPercentage(1)
  },
  search:{
    paddingHorizontal:RFPercentage(1),
    paddingVertical:RFPercentage(.9),
    fontFamily:fonts.PoppinsRegular,
    borderWidth:RFPercentage(.1),
    borderColor:colors.black,
    borderRadius:RFPercentage(1.8),
    marginVertical:RFPercentage(1)
  },
  text2:{
    fontFamily:fonts.PoppinsLight,
    textAlign:'left'
  },
  addphoto:{
    display:"flex",
    flexDirection:"row",
    justifyContent:"space-between",
    marginVertical:RFPercentage(2)
  },
  text3:{
    fontFamily:fonts.PoppinsMedium
  },
  inp:{
    width:"30%",
    paddingHorizontal:RFPercentage(1),
    paddingVertical:RFPercentage(.5),
    borderRadius:RFPercentage(.9),
    borderColor:colors.black,
    borderWidth:RFPercentage(.1),
    textAlign:"center"
  }
})