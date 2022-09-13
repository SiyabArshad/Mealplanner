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
import Slider from '@react-native-community/slider';
import Ruler from 'react-native-animated-ruler';
import { Line } from 'react-native-svg'
const g1protein=4//4calories in 1 gram of protein
const g1carb=4//4calories in 1 gram of carb
const g1fat=9//9calories in 1 gram of fat
export default function Nutritions({navigation}) {
  const[searchval,setsearchval]=React.useState('')
  const[calories,setcalories]=React.useState(0);
  const[carb,setcarb]=React.useState(0);
  const[protein,setprotein]=React.useState(0);
  const[fat,setfat]=React.useState(0);
  const[proteinpercentage,setproteinpercentage]=React.useState(0)
  const[fatpercentage,setfatpercentage]=React.useState(0)
  const[carbpercentage,setcarbpercentage]=React.useState(0)

  const proteinfrompercentagecalculation=(e)=>{
     setprotein((e/100)*(calories/g1protein))
  }
  const carbfrompercentagecalculation=(e)=>{
      setcarb((e/100)*(calories/g1carb))
  } 
  const fatfrompercentagecalculation=(e)=>{
    setfat((e/100)*(calories/g1fat))
  }
  return (
    <SafeAreaView style={{flex:1,backgroundColor:colors.white}}>
    <ScrollView>
    <View style={styles.container}>
    <Text style={styles.text1}>Valori Nutrizionali</Text>
    <Text style={styles.text2}>Kcal del pasto</Text>

    <View style={{width:"100%",marginVertical:RFPercentage(1)}}>
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
  step={10}
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

    <Text style={styles.text2}>Macro</Text>
    <View style={styles.slider}>
        <View style={styles.sliderchild1}>
              <View style={styles.slidertext}>
                <Text style={{fontFamily:fonts.PoppinsMedium,marginRight:RFPercentage(2)}}>
                CARBOIDRATI
                </Text>
                <Text style={{fontFamily:fonts.PoppinsSemiBold}}>
                  {Math.floor(carb)}g
                </Text>
              </View>
              <Text style={{fontFamily:fonts.PoppinsMedium}}>
                {Math.floor(carbpercentage)}%
              </Text>
        </View>
        <View style={{marginTop:RFPercentage(1)}}>
        <Slider
            value={carbpercentage}
            onValueChange={(value)=>{
              setcarbpercentage(value)
              carbfrompercentagecalculation(value)
            }}
            thumbTintColor={colors.orange}
           style={{width: "100%", height: 20}}
            minimumValue={0}
            maximumValue={100}
            minimumTrackTintColor={colors.orange}
            maximumTrackTintColor={colors.grey3}
/>
        <Image style={styles.sliderruler} source={require("../Assets/ruler.png")}/>
        </View>
    </View>
    <View style={styles.slider}>
        <View style={styles.sliderchild1}>
              <View style={styles.slidertext}>
                <Text style={{fontFamily:fonts.PoppinsMedium,marginRight:RFPercentage(2)}}>
                GRASSI
                </Text>
                <Text style={{fontFamily:fonts.PoppinsSemiBold}}>
                {Math.floor(fat)}g 
                </Text>
              </View>
              <Text style={{fontFamily:fonts.PoppinsMedium}}>
                {Math.floor(fatpercentage)}%
              </Text>
        </View>
        <View style={{marginTop:RFPercentage(1)}}>
        <Slider
            value={fatpercentage}
            onValueChange={(value)=>{
              setfatpercentage(value)
              fatfrompercentagecalculation(value)
            }}
            thumbTintColor="yellow"
           style={{width: "100%", height: 20}}
            minimumValue={0}
            maximumValue={100}
            minimumTrackTintColor="yellow"
            maximumTrackTintColor={colors.grey3}
/>
        <Image style={styles.sliderruler} source={require("../Assets/ruler.png")}/>
        </View>
    </View>

    <View style={styles.slider}>
        <View style={styles.sliderchild1}>
              <View style={styles.slidertext}>
                <Text style={{fontFamily:fonts.PoppinsMedium,marginRight:RFPercentage(2)}}>
                PROTEINE
                </Text>
                <Text style={{fontFamily:fonts.PoppinsSemiBold}}>
                {Math.floor(protein)}g
                </Text>
              </View>
              <Text style={{fontFamily:fonts.PoppinsMedium}}>
              {Math.floor(proteinpercentage)}%
              </Text>
        </View>
        <View style={{marginTop:RFPercentage(1)}}>
        <Slider
        value={proteinpercentage}
        onValueChange={(value)=>{
          setproteinpercentage(value)
          proteinfrompercentagecalculation(value)
        }}
            thumbTintColor={colors.purple}
           style={{width: "100%", height: 20}}
            minimumValue={0}
            maximumValue={100}
            minimumTrackTintColor={colors.purple}
            maximumTrackTintColor={colors.grey3}
/>
        <Image style={styles.sliderruler} source={require("../Assets/ruler.png")}/>
        </View>
    </View>
    <TouchableOpacity style={{paddingHorizontal:RFPercentage(1.5),paddingVertical:RFPercentage(.8),
    borderWidth:RFPercentage(.1),borderRadius:RFPercentage(1.2),width:"50%",display:"flex",justifyContent:"center",alignItems:"center"
    ,borderColor:colors.green,marginVertical:RFPercentage(2)
    }}>
        <Text style={{fontFamily:fonts.PoppinsRegular,color:colors.grey3}}>Mostra consigliate</Text>
    </TouchableOpacity>
    {
        proteinpercentage+fatpercentage+carbpercentage>100 &&
      <Text style={{fontFamily:fonts.PoppinsRegular,color:"red",marginBottom:RFPercentage(10)}}>
      Attento, la somma dei tre parametri non fa 100%
      </Text>
  }
  <Line/>
  <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between",marginTop:RFPercentage(2),marginBottom:RFPercentage(3)}}>
                        <TouchableOpacity style={styles.btn1}>
                            <Text style={styles.btntext1}>Cancella tutto</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.btn} onPress={()=>navigation.navigate("Planner")}>
                            <Text style={styles.btntext}>Salva</Text>
                        </TouchableOpacity>
    </View>
  </View>
  </ScrollView>
  </SafeAreaView>
  )
}
const styles=StyleSheet.create({
    container:{
      paddingHorizontal:RFPercentage(2),
      paddingVertical:RFPercentage(1.5),
      backgroundColor:colors.white
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
      marginVertical:RFPercentage(1)
    },
    addphoto:{
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-between",
      marginVertical:RFPercentage(1)
    },
    text3:{
      fontFamily:fonts.PoppinsMedium
    },
    slider:{
      marginVertical:RFPercentage(1)
    },
    sliderchild1:{
      display:"flex",
      flexDirection:"row",
      alignItems:"center",
      justifyContent:"space-between"
    },
    slidertext:{
      display:"flex",
      flexDirection:"row"
    },
    sliderruler:{
      width:"100%",
      resizeMode:"cover",
      marginTop:RFPercentage(.3)
    },
    rulertext:{
      fontFamily:fonts.PoppinsMedium,
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
