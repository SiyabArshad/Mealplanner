import { View, Text,TouchableOpacity,StyleSheet,ImageBackground,Image,ScrollView,FlatList,SafeAreaView, StatusBar } from 'react-native'
import * as React from 'react'
import colors from "../extra/colors"
import fonts from "../extra/fonts"
import { RFPercentage } from 'react-native-responsive-fontsize'
import Icon1 from "react-native-vector-icons/AntDesign"
import Icon2 from "react-native-vector-icons/Feather"
import Line from './Line'

export default function Food({name}) {
    const [expand1,setexpand1]=React.useState(false)
    const [expand2,setexpand2]=React.useState(false)
    //start single comp
    const Singlecomp=({nm})=>{
        return(
            <View style={styles.card}>
            <View style={styles.cardch1}>
                <TouchableOpacity style={[styles.navbtn,{backgroundColor:colors.white}]}>
                    <Text style={[styles.mediumtext,{fontSize:RFPercentage(1.7)}]}>
                        {nm}    
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.cardch2}>
                <View style={styles.items}>
                   {/**item card start */}
                    <ImageBackground resizeMode='cover' imageStyle={{ borderRadius: RFPercentage(3)}} style={styles.editeditem} source={require("../Assets/itemno1.png")}>
                   <View style={styles.itemch1}>
                   <TouchableOpacity style={styles.itembtns}>
                   <Icon2 name='arrow-left-circle' color={colors.black} size={24}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itembtns}>
                    <Icon2 name='more-vertical' color={colors.black} size={24}/>
                    </TouchableOpacity>
                   </View>
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
                        <Text style={styles.itemnut}>
                        300 kcal, 1 porz
                        </Text>
                   </View>
                    </ImageBackground>
                    {/**item end */}
                    <ImageBackground resizeMode='cover' imageStyle={{ borderRadius: RFPercentage(3)}} style={styles.editeditem} source={require("../Assets/itemno1.png")}>
                   <View style={styles.itemch1}>
                    <TouchableOpacity style={[styles.itembtns,{backgroundColor:colors.white,opacity:.7}]}>
                    <Icon2 name='more-vertical' color={colors.black} size={24}/>
                    </TouchableOpacity>
                   </View>
                   <View style={[styles.ch2textch1,{backgroundColor:colors.white,opacity:.7}]}>
                        <Text style={styles.itemname}>
                        Piadine di avocado e mais con salsa bianca 
                        </Text>
                        <Text style={styles.itemnut}>
                        300 kcal
                        </Text>
                   </View>
                    </ImageBackground>
                    {/**item end */}
                </View>
               
                {/*details*/}
                {

                    expand1 &&
                <View style={styles.nutridetails}>
                    <Text style={styles.nuptext}>VALORI NUTRIZIONALI</Text>
                    <View style={[styles.nip,{backgroundColor:colors.grey1}]}>
                        <Text style={[styles.nict1,{color:colors.green}]}>
                            CALORIE
                        </Text>
                        <Text style={[styles.nict2,{color:colors.green}]}>
                            400
                        </Text>
                        <Text style={styles.nict3}>
                            3%
                        </Text>
                    </View>
                    <View style={[styles.nip,{backgroundColor:colors.white}]}>
                        <Text style={[styles.nict1,{color:colors.black}]}>
                            CARBOIDRATE
                        </Text>
                        <Text style={[styles.nict2,{color:colors.black}]}>
                            400g
                        </Text>
                        <Text style={styles.nict3}>
                            3%
                        </Text>
                    </View>
                    <View style={[styles.nip,{backgroundColor:colors.grey1}]}>
                        <Text style={[styles.nict1,{color:colors.black}]}>
                            GRASI
                        </Text>
                        <Text style={[styles.nict2,{color:colors.black}]}>
                            40g
                        </Text>
                        <Text style={styles.nict3}>
                            3%
                        </Text>
                    </View>
                    <View style={[styles.nip,{backgroundColor:colors.white}]}>
                        <Text style={[styles.nict1,{color:colors.black}]}>
                            PROTEINE
                        </Text>
                        <Text style={[styles.nict2,{color:colors.black}]}>
                            82g
                        </Text>
                        <Text style={styles.nict3}>
                            52%
                        </Text>
                    </View>
                    <View style={[styles.nip,{backgroundColor:colors.grey1}]}>
                        <Text style={[styles.nict1,{color:colors.black}]}>
                            FIBRE
                        </Text>
                        <Text style={[styles.nict2,{color:colors.black}]}>
                            20g
                        </Text>
                        <Text style={styles.nict3}>
                            89%
                        </Text>
                    </View>
                    
                    <Text style={styles.nuptext2}>*Valori giornalieri percentuali basati su una dieta di 2000 calorie</Text>
                </View>
}
                {/**end details */}

            </View>
            
        </View>
        )
    }
    
    //end single comp
  return (
    <View style={styles.container}>
     <View style={styles.ch1}>
                <View style={styles.ch1text}>
                    <Text style={styles.mediumtext}>{name}</Text>
                </View>
                <View style={styles.ch1icons}>
                    <TouchableOpacity onPress={()=>setexpand1(!expand1)} style={{height:RFPercentage(2.5),width:RFPercentage(2.5),marginRight:RFPercentage(2)}}>
                    <Image style={{height:"100%",width:"100%"}} source={expand1?require("../Assets/greenexpand.png") :require("../Assets/expand.png")}></Image>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>setexpand2(!expand2)}>
                    <Icon1 name='arrowsalt' color={expand2?colors.green:colors.black} size={20}/>
                    </TouchableOpacity>
                </View>
    </View>
    {
        expand2 ?
       <>
              <Singlecomp nm={"COLAZIONE"}></Singlecomp>
              <Singlecomp nm={"PRANZO"}></Singlecomp>
              <Singlecomp nm={"CENA"}></Singlecomp>
              <Singlecomp nm={"SPUNTINO"}></Singlecomp>
        </>
       :<View style={styles.card}>
            <View style={styles.cardch1}>
            {
                ["COLAZIONE","PRANZO","CENA","SPUNTINO"].map((item,i)=>(
                <TouchableOpacity key={i} style={[styles.navbtn,{backgroundColor:colors.white}]}>
                    <Text style={[styles.mediumtext,{fontSize:RFPercentage(1.7)}]}>
                        {item}    
                    </Text>
                </TouchableOpacity>
                ))
            }
            </View>
            <View style={styles.cardch2}>
                <View style={styles.items}>
                   {/**item card start */}
                    <ImageBackground resizeMode='cover' imageStyle={{ borderRadius: RFPercentage(3)}} style={styles.editeditem} source={require("../Assets/itemno1.png")}>
                   <View style={styles.itemch1}>
                   <TouchableOpacity style={styles.itembtns}>
                   <Icon2 name='arrow-left-circle' color={colors.black} size={24}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.itembtns}>
                    <Icon2 name='more-vertical' color={colors.black} size={24}/>
                    </TouchableOpacity>
                   </View>
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
                        <Text style={styles.itemnut}>
                        300 kcal, 1 porz
                        </Text>
                   </View>
                    </ImageBackground>
                    {/**item end */}
                    <ImageBackground resizeMode='cover' imageStyle={{ borderRadius: RFPercentage(3)}} style={styles.editeditem} source={require("../Assets/itemno1.png")}>
                   <View style={styles.itemch1}>
                    <TouchableOpacity style={[styles.itembtns,{backgroundColor:colors.white,opacity:.7}]}>
                    <Icon2 name='more-vertical' color={colors.black} size={24}/>
                    </TouchableOpacity>
                   </View>
                   <View style={[styles.ch2textch1,{backgroundColor:colors.white,opacity:.7}]}>
                        <Text style={styles.itemname}>
                        Piadine di avocado e mais con salsa bianca 
                        </Text>
                        <Text style={styles.itemnut}>
                        300 kcal
                        </Text>
                   </View>
                    </ImageBackground>
                    {/**item end */}
                </View>
                {/*details*/}
                {

                    expand1 &&
                <View style={styles.nutridetails}>
                    <Text style={styles.nuptext}>VALORI NUTRIZIONALI</Text>
                    <View style={[styles.nip,{backgroundColor:colors.grey1}]}>
                        <Text style={[styles.nict1,{color:colors.green}]}>
                            CALORIE
                        </Text>
                        <Text style={[styles.nict2,{color:colors.green}]}>
                            400
                        </Text>
                        <Text style={styles.nict3}>
                            3%
                        </Text>
                    </View>
                    <View style={[styles.nip,{backgroundColor:colors.white}]}>
                        <Text style={[styles.nict1,{color:colors.black}]}>
                            CARBOIDRATE
                        </Text>
                        <Text style={[styles.nict2,{color:colors.black}]}>
                            400g
                        </Text>
                        <Text style={styles.nict3}>
                            3%
                        </Text>
                    </View>
                    <View style={[styles.nip,{backgroundColor:colors.grey1}]}>
                        <Text style={[styles.nict1,{color:colors.black}]}>
                            GRASI
                        </Text>
                        <Text style={[styles.nict2,{color:colors.black}]}>
                            40g
                        </Text>
                        <Text style={styles.nict3}>
                            3%
                        </Text>
                    </View>
                    <View style={[styles.nip,{backgroundColor:colors.white}]}>
                        <Text style={[styles.nict1,{color:colors.black}]}>
                            PROTEINE
                        </Text>
                        <Text style={[styles.nict2,{color:colors.black}]}>
                            82g
                        </Text>
                        <Text style={styles.nict3}>
                            52%
                        </Text>
                    </View>
                    <View style={[styles.nip,{backgroundColor:colors.grey1}]}>
                        <Text style={[styles.nict1,{color:colors.black}]}>
                            FIBRE
                        </Text>
                        <Text style={[styles.nict2,{color:colors.black}]}>
                            20g
                        </Text>
                        <Text style={styles.nict3}>
                            89%
                        </Text>
                    </View>
                    
                    <Text style={styles.nuptext2}>*Valori giornalieri percentuali basati su una dieta di 2000 calorie</Text>
                </View>
}
                {/**end details */}

            </View>
            
        </View>
}     
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        backgroundColor:colors.white,
        paddingHorizontal:RFPercentage(2),
        paddingVertical:RFPercentage(1.3),
        marginTop:RFPercentage(.5)
    },
    ch1:{
        display:"flex",
        justifyContent:"space-between"
        ,flexDirection:"row"
    },
    ch1text:{
        display:"flex",
        justifyContent:"center"
    },
    mediumtext:{
        fontFamily:fonts.PoppinsMedium,
        fontSize:RFPercentage(2)
    },
    ch1icons:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    card:{
        marginVertical:RFPercentage(2.5),
    },
    cardch1:{
        display:'flex',
        flexDirection:'row',
    }
    ,
    cardch2:{
        backgroundColor:colors.white,
        borderTopRightRadius:RFPercentage(3),
        borderBottomRightRadius:RFPercentage(3),
        borderBottomLeftRadius:RFPercentage(3),
        elevation:2,
        shadowColor:colors.grey3,
        shadowRadius:2,
        shadowOpacity:.4,
        shadowOffset:{width:0,height:4},
        display:"flex",
        paddingBottom:RFPercentage(2)
    },
    navbtn:{
        paddingHorizontal:RFPercentage(1.8),
        paddingVertical:RFPercentage(.9),
        borderTopLeftRadius:RFPercentage(1.8),
        borderTopRightRadius:RFPercentage(1.8),
        elevation:2,
        shadowColor:colors.grey3,
        shadowRadius:2,
        shadowOpacity:.8,
        shadowOffset:{width:1,height:2},
        marginRight:RFPercentage(.2),
    },
    items:{
        display:"flex",
        flexDirection:"row",
        justifyContent:'center',
        alignItems:'center',
        flexWrap:"wrap"
    },
    editeditem:{
        height:RFPercentage(30),
        width:RFPercentage(22),
        marginHorizontal:RFPercentage(.5),
        marginVertical:RFPercentage(2),
        padding:RFPercentage(1),
        display:"flex"
        ,flexDirection:"column",
        justifyContent:'space-between'   
    },
    itemch1:{
        display:"flex",
        flexDirection:"row",
        justifyContent:'flex-end'
    },
    itembtns:{
        backgroundColor:colors.brown,
        opacity:0.7,
        borderRadius:RFPercentage(.8),
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        paddingHorizontal:RFPercentage(.5),
        paddingVertical:RFPercentage(.3),
        marginRight:RFPercentage(.5)
    },
    ch2textch1:{
        backgroundColor:colors.brown,
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
    nutridetails:{
        marginHorizontal:RFPercentage(1),
        marginVertical:RFPercentage(2)
    },
    nuptext:{
        fontFamily:fonts.PoppinsBold,
        fontSize:RFPercentage(2.2),
        color:colors.grey3
    },
    nuptext2:{
        fontFamily:fonts.PoppinsLight,
        color:colors.black,
        marginTop:RFPercentage(1)
    },
    nip:{
        paddingHorizontal:RFPercentage(2),
        paddingVertical:RFPercentage(1.5),
        display:"flex",
        flexDirection:'row',
        borderRadius:RFPercentage(1.5),
        marginVertical:RFPercentage(.5)
    },
    nict1:{
        width:"60%",
        fontFamily:fonts.PoppinsMedium
    },
    nict2:{
        width:"20%",
        fontFamily:fonts.PoppinsSemiBold
    },
    nict3:{
        width:"20%"
        ,fontFamily:fonts.PoppinsLight
    }

    })