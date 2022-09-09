import { View, Text,TouchableOpacity,StyleSheet,ImageBackground,Image,ScrollView,FlatList,SafeAreaView, StatusBar } from 'react-native'
import * as React from 'react'
import colors from "../extra/colors"
import fonts from "../extra/fonts"
import { RFPercentage } from 'react-native-responsive-fontsize'
import Icon1 from "react-native-vector-icons/AntDesign"
import Icon2 from "react-native-vector-icons/Feather"
import Line from './Line'

export default function TopPlan() {
  return (
    <View>
      <Text style={style.text1}>Piano attivo</Text>
      <View style={style.child1}>
        <Image resizeMode='cover' style={style.dp} source={require("../Assets/user2.png")} />
        <Text style={style.text2}>Name Author</Text>
      </View>
      <View style={{display:"flex",flexDirection:"row",justifyContent:"center",marginVertical:RFPercentage(2)}}>
            {/**card code */}
            <View style={[style.card,style.boxshadow]}>
                <View style={style.cardch1}>
                    <View>
                        <Text style={style.text3}>Sportivo vegetariano</Text>
                        <View style={style.cardch2}>
                            <TouchableOpacity style={[style.btns,{borderColor:colors.purple}]}>
                                <Text style={[style.btntext,{color:colors.purple}]}>Fitness</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={[style.btns,{marginLeft:RFPercentage(.5),borderColor:colors.orange}]}>
                                <Text style={[style.btntext,{color:colors.orange}]}>VITAMINA C</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Image source={require("../Assets/darkstar.png")}/>
                </View>
                <View style={style.cardchild3}>
                    <View>
                        <Text style={style.ptext}>Durata:</Text>
                        <Text style={style.ptext2}>7 giorni</Text>
                    </View>
                    <View style={{marginLeft:RFPercentage(10)}}>
                        <Text style={style.ptext}>Calorie medie:</Text>
                        <Text style={style.ptext2}>900</Text>
                    </View>
                </View>
                <Image style={{marginVertical:RFPercentage(1.5)}} source={require("../Assets/line.png")}/>
                <View style={[style.cardchild3,{justifyContent:"space-between"}]}>
                    <View style={{display:"flex",flexDirection:"row"}}>
                        <Text style={[style.ptext,{marginRight:RFPercentage(.5),fontSize:RFPercentage(1.6)}]}>Attivazione:</Text>
                        <Text style={[style.ptext2,{fontSize:RFPercentage(1.6)}]}>18/9</Text>
                    </View>
                    <View style={{display:"flex",flexDirection:"row"}}>
                        <Text style={[style.ptext,{marginRight:RFPercentage(.5),fontSize:RFPercentage(1.6)}]}>Termine:</Text>
                        <Text style={[style.ptext2,{fontSize:RFPercentage(1.6)}]}>25/9</Text>
                    </View>
                </View>
                <View style={{paddingHorizontal:RFPercentage(2),marginBottom:RFPercentage(1)}}>
                    {/*slider code of 2 views no external library use just set width value of view2*/}
                    <View style={{width:"100%",backgroundColor:colors.grey1,height:RFPercentage(1),borderRadius:RFPercentage(.5)}}>
                        <View style={{width:"50%",height:RFPercentage(1),backgroundColor:colors.green,borderRadius:RFPercentage(.5)}}></View>
                    </View>
                </View>    
            </View>
            {/**end card code */}
            
        </View>
    </View>
  )
}

const style=StyleSheet.create({
text1:{
    color:colors.white,
    fontSize:RFPercentage(3),
    fontFamily:fonts.PoppinsSemiBold,
    marginVertical:RFPercentage(1)
},
boxshadow:{
    elevation:2,
    shadowColor:colors.white,
    shadowOffset:{width:2,height:2},
    shadowOpacity:0.8,
    shadowRadius:10
},
child1:{
    display:'flex',
    flexDirection:'row',
    alignItems:"center"
},
dp:{
    height:RFPercentage(4),
    width:RFPercentage(4),
    borderRadius:RFPercentage(2)
},
text2:{
    fontFamily:fonts.PoppinsMedium,
    color:colors.white,
    marginLeft:RFPercentage(1)
},
card:{
    backgroundColor:colors.white,
    width:"100%",
    borderRadius:RFPercentage(1.8)
},
cardch1:{
    display:"flex",
    flexDirection:"row",
    justifyContent:'space-between',
    paddingHorizontal:RFPercentage(2),
    paddingVertical:RFPercentage(1.5)
},
text3:{
    fontFamily:fonts.PoppinsSemiBold,
    fontSize:RFPercentage(2.3)
},
cardch2:{
    display:"flex",
    flexDirection:"row"
},
btns:{
    paddingHorizontal:RFPercentage(.7),
    paddingVertical:RFPercentage(.1),
    borderRadius:RFPercentage(1.2),
    borderWidth:RFPercentage(.1)
},
btntext:{
    fontFamily:fonts.PoppinsRegular,
    textAlign:'center',
    textTransform:"uppercase",
    fontSize:RFPercentage(1.5)
},
cardchild3:{
    paddingHorizontal:RFPercentage(2),
    display:'flex',
    flexDirection:"row",
    marginBottom:RFPercentage(1)
},
ptext:{
    fontFamily:fonts.PoppinsLight
},
ptext2:{
    fontFamily:fonts.PoppinsSemiBold,
    fontSize:RFPercentage(2.1)
}
})