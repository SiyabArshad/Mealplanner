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

export default function Filter({closefunc}) {
    const [typeofp,settypeofp]=React.useState("Vegetariano")
    const [checkboxlist,setcheckboxlist]=React.useState([])
    const [envfilter,setenvfilter]=React.useState("")
    const [vegfilter,setvegfilter]=React.useState("")
    const [kitchenfilter,setkitchenfilter]=React.useState("")
    let filterlist1=["Glutine","Latticini","Uova","Frutta col guscio","Crostacei","Zucchero","Latticini","Uova"]
    let filterlist2=[{
        name:"Avere un basso impatto ambientale",
        btns:["Poco","Abbastanza","Molto"]
    },
    {
        name:"Mangiare verdure di stagione",
        btns:["Poco","Abbastanza","Molto"]
    },
    {
        name:"Passare poco tempo in cucina",
        btns:["Poco","Abbastanza","Molto"]
    }
]

let enviromental={
    name:"Avere un basso impatto ambientale",
    btns:["Poco","Abbastanza","Molto"]
}
let vegetable={
    name:"Mangiare verdure di stagione",
    btns:["Poco","Abbastanza","Molto"]
}
let kitchen={
    name:"Passare poco tempo in cucina",
    btns:["Poco","Abbastanza","Molto"]
}
  return (
    <View style={style.container}>
        <ScrollView style={{marginBottom:RFPercentage(10)}}  horizontal={false} showsVerticalScrollIndicator={false}>
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
        <View style={style.child1}>
            <Text style={style.text3}>Allergie</Text>
            <Text style={style.text4}>
            Comunicaci le tue allergie o intolleranze
            </Text>
            {
                filterlist1.map((item,i)=>(
                        <View key={i} style={{display:"flex",flexDirection:"row",alignItems:"center",marginBottom:RFPercentage(2)}}>
                                <TouchableOpacity onPress={checkboxlist?.includes(item)?()=>setcheckboxlist(checkboxlist.filter((ite)=>ite!==item)) :()=>setcheckboxlist(items=>[...items,item])} style={{width:RFPercentage(2.5),height:RFPercentage(2.5),borderRadius:RFPercentage(.6)
                                    ,backgroundColor:checkboxlist?.includes(item)?colors.black:colors.grey1,marginRight:RFPercentage(2)}}/>
                                <Text style={{fontFamily:fonts.PoppinsRegular}}>{item}</Text>
                        </View>
                    )
                )
            }
        </View>
        <Line/>
        <View style={style.child1}>
            <Text style={style.text3}>Extra</Text>
            <Text style={style.text4}>
            Scegli quanto ti interessa:
            </Text>
            {
                    <View style={{marginBottom:RFPercentage(1)}}> 
                        <Text style={{fontFamily:fonts.PoppinsMedium,marginBottom:RFPercentage(1)}}>{enviromental.name}</Text>
                        <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                            {
                                enviromental.btns.map((it,j)=>(
                                    <TouchableOpacity onPress={()=>setenvfilter(it)} key={j} style={{width:RFPercentage(12),display:"flex",alignItems:"center",justifyContent:"center",paddingVertical:RFPercentage(1)
                                    ,backgroundColor:envfilter===it?colors.black:colors.white,borderColor:colors.black,borderWidth:RFPercentage(.1),borderRadius:RFPercentage(1.2)
                                    }}>
                                        <Text style={{color:envfilter===it?colors.white:colors.black,fontFamily:fonts.PoppinsRegular,fontSize:RFPercentage(1.5)}}>{it}</Text>
                                    </TouchableOpacity>
                                ))
                            }
                         </View>   
                    </View>
            }
            {
                    <View style={{marginBottom:RFPercentage(1)}}> 
                        <Text style={{fontFamily:fonts.PoppinsMedium,marginBottom:RFPercentage(1)}}>{vegetable.name}</Text>
                        <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                            {
                                vegetable.btns.map((it,j)=>(
                                    <TouchableOpacity onPress={()=>setvegfilter(it)} key={j} style={{width:RFPercentage(12),display:"flex",alignItems:"center",justifyContent:"center",paddingVertical:RFPercentage(1)
                                    ,backgroundColor:vegfilter===it?colors.black:colors.white,borderColor:colors.black,borderWidth:RFPercentage(.1),borderRadius:RFPercentage(1.2)
                                    }}>
                                        <Text style={{color:vegfilter===it?colors.white:colors.black,fontFamily:fonts.PoppinsRegular,fontSize:RFPercentage(1.5)}}>{it}</Text>
                                    </TouchableOpacity>
                                ))
                            }
                         </View>   
                    </View>
            }
            {
                    <View style={{marginBottom:RFPercentage(1)}}> 
                        <Text style={{fontFamily:fonts.PoppinsMedium,marginBottom:RFPercentage(1)}}>{kitchen.name}</Text>
                        <View style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                            {
                                kitchen.btns.map((it,j)=>(
                                    <TouchableOpacity onPress={()=>setkitchenfilter(it)} key={j} style={{width:RFPercentage(12),display:"flex",alignItems:"center",justifyContent:"center",paddingVertical:RFPercentage(1)
                                    ,backgroundColor:kitchenfilter===it?colors.black:colors.white,borderColor:colors.black,borderWidth:RFPercentage(.1),borderRadius:RFPercentage(1.2)
                                    }}>
                                        <Text style={{color:kitchenfilter===it?colors.white:colors.black,fontFamily:fonts.PoppinsRegular,fontSize:RFPercentage(1.5)}}>{it}</Text>
                                    </TouchableOpacity>
                                ))
                            }
                         </View>   
                    </View>
            }
        </View>
        <Line/>
            <View style={{display:"flex",flexDirection:"row",justifyContent:"center",marginVertical:RFPercentage(1)}}>
                <TouchableOpacity style={style.btn1}>
                    <Text style={style.btntext1}>Cancella tutto</Text>
                </TouchableOpacity>
                <TouchableOpacity style={style.btn}>
                    <Text style={style.btntext}>Filtra</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    </View>
  )
}

const style=StyleSheet.create({
    container:{
        height:Dimensions.get("window").height,
        backgroundColor:colors.white,
        borderTopLeftRadius:RFPercentage(2),
        borderTopRightRadius:RFPercentage(2),
        paddingBottom:RFPercentage(7)
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