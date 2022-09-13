import { View, Text,TouchableOpacity,StyleSheet,ImageBackground,Image,ScrollView,FlatList,SafeAreaView, StatusBar } from 'react-native'
import * as React from 'react'
import colors from "../extra/colors"
import fonts from "../extra/fonts"
import { RFPercentage } from 'react-native-responsive-fontsize'
import Icon1 from "react-native-vector-icons/AntDesign"
import Icon2 from "react-native-vector-icons/Feather"
import Line from './Line'
export default function Pianicard() {
    return (
    <View style={[style.card,style.boxshadow]}>
       <View style={style.child1}>
            <Text style={style.txt1}>Plan Name</Text>
            <Image resizeMode='cover' source={require("../Assets/lightstar.png")}/>
      </View>
      
      <View style={style.child3}>
        <View style={{width:"65%"}}>
        <View style={[style.row]}>
            <TouchableOpacity style={{
                backgroundColor:'rgba(0, 171, 110,0.2 )',paddingHorizontal:RFPercentage(.9),paddingVertical:RFPercentage(.4)
                ,borderRadius:RFPercentage(1),display:"flex",alignItems:"center",justifyContent:'center'
            }}>
                <Text style={{color:colors.green,fontFamily:fonts.PoppinsRegular,fontSize:RFPercentage(1.3)}}>STAGIONALE</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{
                backgroundColor:'rgba(255, 115, 0,0.2 )',paddingHorizontal:RFPercentage(.9),paddingVertical:RFPercentage(.4)
                ,borderRadius:RFPercentage(1),display:"flex",alignItems:"center",justifyContent:'center',marginLeft:RFPercentage(.5)
            }}>
                <Text style={{color:colors.orange,fontFamily:fonts.PoppinsRegular,fontSize:RFPercentage(1.3)}}>VITAMINA D</Text>
            </TouchableOpacity>
        </View>
        <Text style={{color:colors.black,fontFamily:fonts.PoppinsLight,textAlign:"justify",marginTop:RFPercentage(1),fontSize:RFPercentage(1.6)}}>
        Questa è la descrizione che vedrà l’utente a cui non interessa in prima battuta le Kcal perché food lover..
        </Text>
        </View>
        <View style={{display:"flex",flexDirection:"row",flexWrap:'wrap',width:"40%",paddingLeft:RFPercentage(1.6),marginVertical:RFPercentage(.5)}}>
        {
            [1,2,3,4].map((item,i)=>(
                <Image key={i} resizeMode='cover' style={{width:RFPercentage(6),height:RFPercentage(6),borderRadius:RFPercentage(.5),marginBottom:RFPercentage(.5),marginRight:RFPercentage(.5)}} source={require("../Assets/foods.png")}/>
            ))
        }
      </View>
      </View>
        <Line/>
        <View style={style.child2}>
        {
            /*
        <View style={style.row}>
            <Text style={{fontFamily:fonts.PoppinsRegular}}>Durata:</Text>
            <Text style={{marginLeft:RFPercentage(.5),fontFamily:fonts.PoppinsMedium}}>5gg</Text>
        </View>
*/}
        <View style={style.row}>
            <Text style={{fontFamily:fonts.PoppinsRegular}}>Calorie medie:</Text>
            <Text style={{marginLeft:RFPercentage(.5),fontFamily:fonts.PoppinsMedium}}>1900</Text>
        </View>
      </View>
    </View>
  )
}
const style=StyleSheet.create({
    card:{
        backgroundColor:colors.white,
        width:"90%",
        borderRadius:RFPercentage(3),
        padding:RFPercentage(1),
        marginBottom:RFPercentage(1)
    },
    row:{
        display:"flex",
        flexDirection:"row"
    }
    ,
    boxshadow:{
        elevation:5,
        shadowColor:colors.grey3,
        shadowOffset:{width:1,height:1},
        shadowOpacity:0.9,
        shadowRadius:5,
    },
    child1:{
        paddingHorizontal:RFPercentage(1.6),
        paddingVertical:RFPercentage(.8),
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    txt1:{
        color:colors.black,
        fontFamily:fonts.PoppinsMedium,
        fontSize:RFPercentage(2.2)
    },
    child2:{
        paddingHorizontal:RFPercentage(1.6),
        display:'flex',
        flexDirection:'row',
        justifyContent:'space-between',
        marginVertical:RFPercentage(1)
        
    },
    child3:{
        paddingHorizontal:RFPercentage(1.6),
        paddingVertical:RFPercentage(.8),
        marginVertical:RFPercentage(1),
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        overflow:"hidden"
        
    }
})