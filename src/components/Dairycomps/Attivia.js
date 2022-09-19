import { View, Text,TouchableOpacity,StyleSheet,ImageBackground,Image,ScrollView,FlatList,SafeAreaView, Dimensions,StatusBar,TextInput } from 'react-native'
import * as React from 'react'
import colors from "../../extra/colors"
import fonts from "../../extra/fonts"
import { RFPercentage } from 'react-native-responsive-fontsize'
import Icon1 from "react-native-vector-icons/AntDesign"
import Icon2 from "react-native-vector-icons/Feather"
export default function Attivia() {
  return (
    <View>
      <View style={styles.cont1}>
        <Text style={styles.cont1text}>Attività sportiva</Text>
        <TouchableOpacity style={styles.btn}>
            <Icon2 name='plus' size={30} color={colors.black}/>
        </TouchableOpacity>
    </View>
    <View style={styles.cont2}>
    <Text style={styles.toptext}>
    CALORIE BRUCIATE
    </Text>
    <Text style={styles.quan}>
    654
    </Text>
    <Text style={{width:"90%",marginVertical:RFPercentage(.5),fontFamily:fonts.PoppinsLight}}>
    Lo sapevi che chi fa sport ti rende sano quasi quanto Ilario? Cosa stai aspettando?
    </Text>
    </View>
    <View style={{paddingHorizontal:RFPercentage(2),paddingVertical:RFPercentage(.5),display:"flex",alignItems:"center",justifyContent:"center"}}>
            {
                [1,2,3].map((item,i)=>(
                    <View key={i} style={styles.card}>
                        <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                        <Image style={{height:15,width:15,resizeMode:"cover"}} source={require("../../Assets/bind.png")}/>
                        <View style={{marginHorizontal:RFPercentage(2)}}>
                            <Text style={{fontFamily:fonts.PoppinsMedium,fontSize:RFPercentage(1.9)}}>3,84 km</Text>
                            <Text style={{fontFamily:fonts.PoppinsRegular}}>20 minuti</Text>
                        </View>
                        <Text style={{fontFamily:fonts.PoppinsMedium}}>218 Kcal</Text>  
                        </View>
                        <TouchableOpacity style={{backgroundColor:colors.grey1,display:"flex",justifyContent:"center",
                    alignItems:"center",height:RFPercentage(4),width:RFPercentage(4),borderRadius:RFPercentage(1.2)
                    }}>
                            <Icon1 name='minus' color={colors.black} size={24}/>
                        </TouchableOpacity>
                     </View>   
                ))
            }
    </View>
    </View>
  )
}
const styles=StyleSheet.create({
    cont1:{
        display:"flex",
        flexDirection:'row',
        justifyContent:"space-between",
        paddingHorizontal:RFPercentage(2),
        paddingVertical:RFPercentage(.5),
        marginTop:RFPercentage(1),
        backgroundColor:colors.white
    },
    cont1text:{
        fontFamily:fonts.PoppinsBold,
        fontSize:RFPercentage(2.8)
    },
    cont2:{
        paddingHorizontal:RFPercentage(2),
        paddingVertical:RFPercentage(.5),
        marginTop:RFPercentage(1),
        
    },
    toptext:{
        fontSize:RFPercentage(2),
        fontFamily:fonts.PoppinsSemiBold,
        color:colors.grey3
    },
    quan:{
        fontFamily:fonts.PoppinsExtraBold,
        fontSize:RFPercentage(3.2),
        marginTop:RFPercentage(.4)
    },
    card:{
        width:"95%",
        backgroundColor:colors.white,
        borderRadius:RFPercentage(1.3),
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        paddingHorizontal:RFPercentage(1.2),
        paddingVertical:RFPercentage(.8),
        elevation:2,
        shadowColor:colors.grey3,
        shadowOffset:{width:1,height:1},
        shadowOpacity:0.4,
        shadowRadius:5,
        marginBottom:RFPercentage(1)
        
    }
})