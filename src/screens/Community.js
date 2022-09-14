import { View, Text,TouchableOpacity,StyleSheet,ImageBackground,Image,ScrollView,FlatList,TextInput,SafeAreaView, StatusBar } from 'react-native'
import * as React from 'react'
import colors from "../extra/colors"
import fonts from "../extra/fonts"
import { RFPercentage } from 'react-native-responsive-fontsize'
import Icon1 from "react-native-vector-icons/EvilIcons"
import Icon2 from "react-native-vector-icons/Feather"
import Icon3 from "react-native-vector-icons/Ionicons"
import TopPlan from '../components/TopPlan'
import Plan from '../components/Plan'
import Line from '../components/Line'
import Searchcomp from '../components/Searchcomp'
export default function Community({navigation}) {
    const [sp,setsp]=React.useState(false)
    const [search,setsearch]=React.useState("")
    const searchchange=(e)=>{
        setsearch(e)
    }
    const spchange=(e)=>{
        setsp(e)
    }
    return (
    <SafeAreaView style={style.container}>
   {
    sp?
    <Searchcomp navigation={navigation} spchange={spchange} />
    :
    <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
    {
        Topbar(search,searchchange,sp,spchange)
    }
    <Text style={style.semib}>Scopri</Text>
    {
        Section1()
    }
<Line/>
{
    Section2()
}
<Line/>
{
    Section3()
}
{
    Section4()
}
{
    Section5()
}
</ScrollView>
   }
    </SafeAreaView>
  )
}

//internal components from specific community screen 
//topbar start
const Topbar=(search,searchchange,sp,spchange)=>{
    
    return(
        <View style={style.child1}>
        <TouchableOpacity style={style.btn} onPress={()=>navigation.navigate("home")}>
        <Image style={style.tpimgs} source={require("../Assets/noti.png")} />  
        </TouchableOpacity>
        <View style={style.searchbox}>
        <Icon1 name='search' size={24} color={colors.black}/>
        <TextInput onFocus={()=>spchange(true)} placeholderTextColor={colors.black} selectionColor={colors.black} value={search} onChangeText={(e)=>{
            searchchange(e)
            }} style={style.search} placeholder='Search'/>
        </View>
        <TouchableOpacity style={style.btn}>
        <Image style={style.tpimgs} source={require("../Assets/navbararrow.png")} />
        </TouchableOpacity>
  </View>
    )
}
//ends topbar
//start section1
const Section1=()=>{
    return(
        <View style={style.section1}>
            <View style={style.section1text}>
                <Text style={style.boldone}>Le più amate</Text>
                <View style={style.sec2}>
                <Text style={[style.regtext,{color:colors.green}]}>vedi tutte</Text>
                <Icon3 name='chevron-forward-outline' size={24} color={colors.green} />
                </View>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={style.grid}>
            {
                [1,2,3,4].map((item,i)=>(
                    <View key={i}>
                    <View style={{display:"flex",flexDirection:"row",alignItems:"center",marginVertical:RFPercentage(.8),marginHorizontal:RFPercentage(.3)}}>
                        <ImageBackground style={{height:20,width:20,borderRadius:10,backgroundColor:colors.black}}/>
                        <Text style={[style.regtext,{marginLeft:RFPercentage(.5)}]}>Autore</Text>
                    </View>
                    <ImageBackground key={i}  resizeMode='cover' imageStyle={{ borderRadius: RFPercentage(3)}} style={styles.editeditem} source={require("../Assets/pasta.png")}>
                            <View style={styles.ch2textch1}>
                                 <ImageBackground  style={{
                                 position:"relative",
                                 top:-10,
                                 height:RFPercentage(3),width:RFPercentage(3),display:"flex",
                                 justifyContent:"center",alignItems:"center"}} source={require("../Assets/Star26.png")}>
                                     <Image source={require("../Assets/Cheese.png")}/>
                                 </ImageBackground>
                                 <Text style={styles.itemname}>
                                 Piadine di avocado e mais con salsa bianca 
                                 </Text>
                                 <View style={{display:"flex",flexDirection:"row",flexWrap:"wrap"}}>
                                 {
                                    ["STAGIONALE","FITNESS","VITAMINA C"].map((item,i)=>{
                                        return(
                                            <TouchableOpacity style={{backgroundColor:colors.white,paddingHorizontal:RFPercentage(.3),
                                                paddingVertical:RFPercentage(.125),borderRadius:RFPercentage(.9),margin:RFPercentage(.1)
                                            }}  key={i}>
                                                <Text style={[style.regtext,{fontSize:RFPercentage(1.5),color:i===0&&colors.green||
                                                i===1&&colors.magenta||i===2&&colors.orange
                                                }]}>{item}</Text>
                                            </TouchableOpacity>
                                        )
                                    })
                                 }
                                 </View>
                                 
                            </View>
    </ImageBackground>
    </View>
                ))
            }
            </View>
            </ScrollView>
        </View>
    )
}
//end section1
//start section2
const Section2=()=>{
    return(
        <View style={[style.section1,{marginTop:RFPercentage(2)}]}>
            <View style={style.section1text}>
                <Text style={style.boldone}>Piani alimentari</Text>
                <View style={style.sec2}>
                <Text style={[style.regtext,{color:colors.green}]}>vedi tutte</Text>
                <Icon3 name='chevron-forward-outline' size={24} color={colors.green} />
                </View>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={style.grid}>
            {
                [1,2,3,4].map((item,i)=>(
                    <View key={i}>
                    <View style={{display:"flex",flexDirection:"row",alignItems:"center",marginVertical:RFPercentage(.8),marginHorizontal:RFPercentage(.3)}}>
                        <ImageBackground style={{height:20,width:20,borderRadius:10,backgroundColor:colors.black}}/>
                        <Text style={[style.regtext,{marginLeft:RFPercentage(.5)}]}>Autore</Text>
                    </View>
        <ImageBackground key={i} imageStyle={{ borderRadius: RFPercentage(3)}} style={styles.editeditem2}>
                           <View style={style.sec2p1}>
                                <Text style={{fontFamily:fonts.PoppinsSemiBold,fontSize:RFPercentage(2.3)}}>Sportivo vegetariano</Text>
                                <Image source={require("../Assets/lightstar.png")}/>
                           </View>
                           <View style={{display:"flex",flexDirection:"row",marginVertical:RFPercentage(1),  paddingHorizontal:RFPercentage(1),}}>
                                <TouchableOpacity style={style.fbtn}>
                                    <Text style={{fontFamily:fonts.PoppinsRegular,color:colors.purple,fontSize:RFPercentage(1.5)}}>FITNESS</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={style.fbtn2}>
                                    <Text style={{fontFamily:fonts.PoppinsRegular,color:colors.orange,fontSize:RFPercentage(1.5)}}>VITAMINA C</Text>
                                </TouchableOpacity>
                           </View>
                           <View style={{display:"flex",flexDirection:"row",flexWrap:"wrap",paddingHorizontal:RFPercentage(1)}}>
                                    {
                                    [1,2,3].map((item,i)=>(
                                        <ImageBackground key={i} imageStyle={{
                                            borderRadius:RFPercentage(.5)
                                        }} style={style.sec2gridimgs} source={require("../Assets/pasta.png")}/>
                                    ))
                                    
                                    }
                           </View>
                           <Line/>
                           <View style={{padding:RFPercentage(1),marginVertical:RFPercentage(1),display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
                                    <View style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                                    <Text style={style.regtext}>
                                    Giorni:
                                    </Text>
                                    <Text style={{fontFamily:fonts.PoppinsBold,marginLeft:RFPercentage(.5)}}>5</Text>
                                    </View>
                                    <View style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center"}}>
                                    <Text style={style.regtext}>
                                    Kcal:
                                    </Text>
                                    <Text style={{fontFamily:fonts.PoppinsBold,marginLeft:RFPercentage(.5)}}>1900</Text>
                                    </View>
                           </View>
    </ImageBackground>
    </View>
                ))
            }
            </View>
            </ScrollView>
        </View>
    )
}
//end section2
//start section3
const Section3=()=>{
    return(
        <View style={[style.section1,{marginTop:RFPercentage(2)}]}>
            <View style={style.section1text}>
                <Text style={style.boldone}>Utenti del mese</Text>
                <View style={style.sec2}>
                <Text style={[style.regtext,{color:colors.green}]}>vedi tutte</Text>
                <Icon3 name='chevron-forward-outline' size={24} color={colors.green} />
                </View>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={style.grid}>
            {
                [1,2,3,4,5,6,7,8].map((item,i)=>(
                    <View key={i} style={{width:RFPercentage(11),
                    marginRight:RFPercentage(.5),display:"flex",alignItems:"center"
                    ,justifyContent:"center"}}>
                        <Image style={{width:RFPercentage(8),height:RFPercentage(8),borderRadius:RFPercentage(2)}} source={require("../Assets/user2.png")}/>
                        <Text style={{fontFamily:fonts.PoppinsRegular,textAlign:"center",marginTop:RFPercentage(.5),fontSize:RFPercentage(1.5)}}>Hidekazu Tokeyo</Text>
                     </View>   
                ))
            }
            </View>
            </ScrollView>
        </View>
    )
}
//end section3
//start section4
const Section4=()=>{
    return(
        <ImageBackground style={{width:"100%",height:RFPercentage(20),marginVertical:RFPercentage(.5)}} source={require("../Assets/part.png")}>
            <Text style={{width:"50%",fontFamily:fonts.PoppinsBold,fontSize:RFPercentage(3),margin:RFPercentage(1.5),color:colors.white}}>
            Partecipa al questionario
            </Text>
            <View style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <TouchableOpacity style={{marginTop:RFPercentage(2),width:"40%",backgroundColor:colors.black,paddingVertical:RFPercentage(1),
                paddingHorizontal:RFPercentage(2),display:"flex",justifyContent:"center",alignItems:"center",
                borderRadius:RFPercentage(1)
                
                }}>
                    <Text style={{color:colors.white,fontSize:RFPercentage(2)}}>Tasto</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    )
}
//end section4
//start section5
const Section5=()=>{
    return(
        <View style={{margin:RFPercentage(1)}}>
            <Text style={{fontSize:RFPercentage(1.9),marginVertical:RFPercentage(.5),fontFamily:fonts.PoppinsMedium}}>
            Scopri di più
            </Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            <View style={style.grid}>
                {
                    [1,2,3,4,5].map((item,i)=>(
                        <View key={i} style={{width:RFPercentage(30),marginRight:RFPercentage(1),height:RFPercentage(15)}}>
        <ImageBackground imageStyle={{borderRadius:RFPercentage(2.5)}} style={{width:"100%",height:"100%",marginVertical:RFPercentage(.5),display:"flex",
    justifyContent:"center",alignItems:"center"
    }} source={require("../Assets/oranges.png")}>
            <Text style={{fontFamily:fonts.PoppinsMedium,color:colors.white}}>
            La frutta invernale
            </Text>
        </ImageBackground>
        </View>
                    ))
                }
                </View>
            </ScrollView>
        </View>
    )
}

//end section5
const style=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.white
    },
    child1:{
        paddingHorizontal:RFPercentage(1.5),
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        overflow:"hidden",
        marginBottom:RFPercentage(2)
    },
    searchbox:{
        width:RFPercentage(30),
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        borderWidth:RFPercentage(.1),
        borderRadius:RFPercentage(1.8),
        overflow:"hidden",
        marginLeft:RFPercentage(2)
    },
    search:{
        width:"90%",
        paddingHorizontal:RFPercentage(1.5),
        paddingVertical:RFPercentage(.6),
        fontFamily:fonts.PoppinsRegular
    },
    tpimgs:{
        resizeMode:"cover",
    },
    semib:{
        marginHorizontal:RFPercentage(1.5),
        fontFamily:fonts.PoppinsSemiBold,
        fontSize:RFPercentage(3),
        marginBottom:RFPercentage(1
            )
    },
    btn:{
        width:RFPercentage(5),
        height:RFPercentage(5),
        display:"flex",
        alignItems:"center",
        justifyContent:"center"
    },
    section1text:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginBottom:RFPercentage(1)
    },
    sec2:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center"
    },
    boldone:{
        fontFamily:fonts.PoppinsBold,
        fontSize:RFPercentage(2.2)
    },
    regtext:{
        fontFamily:fonts.PoppinsRegular
    },
    section1:{
        paddingHorizontal:RFPercentage(1.5),
      
    },
    grid:{
        display:"flex",
        flexDirection:"row",
        marginBottom:RFPercentage(2)
    },
    sec2p1:{
        display:"flex",
        flexDirection:"row",
        justifyContent:'space-between',
        overflow:"hidden",
        padding:RFPercentage(1),
    },
    fbtn:{
        backgroundColor:colors.purple2,
        paddingHorizontal:RFPercentage(.8),
        paddingVertical:RFPercentage(.2),
        borderRadius:RFPercentage(.8),
        marginRight:RFPercentage(.5),
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    fbtn2:{
        backgroundColor:colors.orange2,
        paddingHorizontal:RFPercentage(.4),
        paddingVertical:RFPercentage(.2),
        borderRadius:RFPercentage(.8),
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    sec2gridimgs:{
        width:RFPercentage(5),
        height:RFPercentage(5),
        margin:RFPercentage(.5)
    }
})

const styles=StyleSheet.create({
    editeditem:{
        height:RFPercentage(30),
        width:RFPercentage(22),
        marginHorizontal:RFPercentage(.5),
        marginBottom:RFPercentage(.5),
        padding:RFPercentage(1),
        display:"flex"
        ,flexDirection:"column",
        justifyContent:'flex-end'   
    },
    ch2textch1:{
        backgroundColor:colors.transgrey3,
        opacity:0.7,
        paddingHorizontal:RFPercentage(.8),
        borderTopRightRadius:RFPercentage(1),
        borderTopLeftRadius:RFPercentage(1),
        borderBottomLeftRadius:RFPercentage(3),
        borderBottomRightRadius:RFPercentage(3)
    },
    itemname:{
        fontFamily:fonts.PoppinsMedium,
        fontSize:RFPercentage(1.6),
        color:colors.black
    },
    itemnut:{
        fontFamily:fonts.PoppinsRegular,
        fontSize:RFPercentage(1.6),
        color:colors.black,
        marginVertical:RFPercentage(1)   
    },
    editeditem2:{
        minHeight:RFPercentage(24),
        width:RFPercentage(22),
        marginHorizontal:RFPercentage(.5),
        marginBottom:RFPercentage(.5),
        backgroundColor:colors.white,
        elevation:5,
        shadowColor:colors.grey3,
        shadowOffset:{width:1,height:1},
        shadowOpacity:0.6,
        shadowRadius:5,
        borderRadius:RFPercentage(3)   
    },
})