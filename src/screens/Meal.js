import { View, Text,TouchableOpacity,StyleSheet,ImageBackground,Image,ScrollView,FlatList,SafeAreaView, StatusBar } from 'react-native'
import * as React from 'react'
import colors from "../extra/colors"
import fonts from "../extra/fonts"
import { RFPercentage } from 'react-native-responsive-fontsize'
import Icon1 from "react-native-vector-icons/EvilIcons"
import Icon2 from "react-native-vector-icons/Feather"
import Icon3 from "react-native-vector-icons/Ionicons"
import Line from '../components/Line'
import Food from '../components/Food'
import Dropdown from '../components/Dropdown'
import Chart from '../components/Chart'
import Comments from '../components/Comments'
export default function Meal({navigation}) {
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar translucent backgroundColor={"transparent"}></StatusBar>
        <View style={styles.topnav}>
            <TouchableOpacity onPress={()=>navigation.navigate("Planner")}>
                <Icon3 name='arrow-back' color={colors.black} size={30}/>
            </TouchableOpacity>
            <Text style={[styles.semiboldtext,{marginLeft:RFPercentage(2)}]}>Nome piano</Text>
        </View>
        <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
        <View style={styles.child1}>
            <View style={styles.ch1cmp1}>
                <View style={styles.ch1text}>
                    <Text style={styles.semiboldtext}>Meal planner</Text>
                </View>
                <View style={styles.ch1icons}>
                    <Icon1 name='share-google' color={colors.black} size={30} />
                    <Icon2 name='more-vertical' color={colors.black} size={24}/>
                </View>
            </View>
            <View style={styles.ch1cmp2}>
                <Text style={[styles.boldtext,{marginRight:RFPercentage(2)}]}>
                Nome piano
                </Text>
            </View>
            <View style={styles.ch1cmp3}>
                <Text style={[styles.regulartext,{width:"90%"}]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Adipiscing amet, ornare mauris interdum. Pulvinar sed sem id viverra aliquet diam commodo. Curabitur et sem eget fringilla ut nec, pharetra venenatis.
                </Text>
            </View>
            <View style={styles.ch1cmp4}>
                <View style={{display:"flex",flexDirection:"row",alignItems:"center"}}>
                <TouchableOpacity style={styles.tagsbtn}>
                <Text style={[styles.tagsbtntext,{color:colors.purple}]}>DIETA FITNESS</Text>  
                </TouchableOpacity>  
                <TouchableOpacity style={styles.tagsbtn}>
                <Text style={[styles.tagsbtntext,{color:colors.magenta}]}>GLUTINE</Text>  
                </TouchableOpacity>  
                <TouchableOpacity style={styles.tagsbtn}>
                <Text style={[styles.tagsbtntext,{color:colors.orange}]}>VITAMINA D</Text>  
                </TouchableOpacity>  
                </View>   
                 
            </View>
            <View style={styles.userinfo}>
              <View style={styles.userinfoch1}></View>
              <View style={styles.userinfoch2}>
                      <View style={{display:"flex",flexDirection:'row'}}>
                        <Text style={{fontFamily:fonts.PoppinsRegular}}>Creato da </Text>
                        <Text style={{fontFamily:fonts.PoppinsSemiBold}}>Giuseppe</Text>
                      </View>
                      <View style={{display:"flex",flexDirection:'row'}}>
                      <View style={{display:"flex",flexDirection:'row',marginRight:RFPercentage(2)}}>
                        <Text style={{fontFamily:fonts.PoppinsSemiBold}}>1.248.755 </Text>
                        <Text style={{fontFamily:fonts.PoppinsRegular}}>Followers</Text>
                      </View>
                      <View style={{display:"flex",flexDirection:'row'}}>
                        <Text style={{fontFamily:fonts.PoppinsSemiBold}}>124 </Text>
                        <Text style={{fontFamily:fonts.PoppinsRegular}}>piani alimentari</Text>
                      </View>
                      </View>
              </View>
            </View>
        </View>
        <Line/>

        {
            ["Giorno 1","Giorno 2","Giorno 3","Giorno 4","Giorno 5","Giorno 6","Giorno 7"].map((item,i)=>(
                    <View key={i}>
                    <Food name={item}></Food>
                    <Line></Line>
                    </View>
                    ))
        }
        <View style={styles.bottomsection}>
            <Text style={styles.mdtext}>
            Andamento settimanale
            </Text>
            <Dropdown/>
            <Text style={[styles.semiboldtext,{color:colors.grey3,marginVertical:RFPercentage(3)}]}>
            ANDAMENTO GIORNALIERO
            </Text>
            <Chart></Chart>
            <View style={styles.count}>
                <View style={styles.countch1}>
                    <Text style={{color:colors.grey3,fontFamily:fonts.PoppinsSemiBold}}>TOTAL CALORIE</Text>
                    <Text style={{fontSize:RFPercentage(3.5),fontFamily:fonts.PoppinsExtraBold}}>14790</Text>
                </View>
                <View style={styles.countch2}>
                    <Text style={{color:colors.grey3,fontFamily:fonts.PoppinsSemiBold}}>MEDIA CALORIE GIORNO</Text>
                    <Text style={{fontSize:RFPercentage(3.5),fontFamily:fonts.PoppinsExtraBold}}>1200</Text>
                </View>
            </View>
            <Line></Line>
            <Comments/>
            <View style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <TouchableOpacity style={styles.lastbtn}>
                <Text style={{fontSize:RFPercentage(2.2),fontFamily:fonts.PoppinsRegular,color:colors.white}}>
                    ATTIVA
                </Text>
            </TouchableOpacity>
            </View>
        </View>
        
        </ScrollView>
    </SafeAreaView>
  )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.white
    },
    topnav:{
        paddingHorizontal:RFPercentage(2),
        paddingVertical:RFPercentage(1.3),
        display:"flex",
        flexDirection:"row",
        alignItems:"center"
    },
    child1:{
        paddingHorizontal:RFPercentage(2),
        paddingVertical:RFPercentage(1.3)
    },
    ch1cmp1:{
        display:"flex",
        justifyContent:"space-between"
        ,flexDirection:"row"
    },
    ch1text:{
        display:'flex',
        justifyContent:"center"
    },
    ch1icons:{
        display:"flex",
        flexDirection:"row",
        alignItems:"center"
    },
    ch1cmp2:{
        display:"flex",
        flexDirection:'row',
        alignItems:"center",
        marginTop:RFPercentage(2)
    }
    ,
    semiboldtext:{
        fontFamily:fonts.PoppinsSemiBold,
        fontSize:RFPercentage(2.2)
    },
    boldtext:{
        fontFamily:fonts.PoppinsBold,
        fontSize:RFPercentage(4)
    },
    ch1cmp3:{
        marginTop:RFPercentage(2)
    },
    ch1cmp4:{
        marginVertical:RFPercentage(2)
    },
    regulartext:{
        fontFamily:fonts.PoppinsRegular,
        fontSize:RFPercentage(1.8)
    },
    bottomsection:{
        paddingHorizontal:RFPercentage(2),
        paddingVertical:RFPercentage(1.3)
    },
    mdtext:{
        fontFamily:fonts.PoppinsMedium,
        fontSize:RFPercentage(2.2),
        marginVertical:RFPercentage(2)
    },
    count:{
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        marginBottom:RFPercentage(2)
    },
    countch1:{
        width:"50%"
    },
    countch2:{
        width:"50%"
    },
    lastbtn:{
        paddingHorizontal:RFPercentage(.5)
        ,paddingVertical:RFPercentage(.8),
        backgroundColor:colors.black,
        display:"flex",
        justifyContent:'center',
        alignItems:'center',
        borderRadius:RFPercentage(1.5),
        marginVertical:RFPercentage(2),
        width:"50%"
    }
,tagsbtn:{
  paddingHorizontal:RFPercentage(.5),
  paddingVertical:RFPercentage(.8)
  ,borderRadius:RFPercentage(1.5),
  backgroundColor:colors.white,
  elevation:2,
  shadowColor:colors.grey3,
  shadowRadius:2,
  shadowOpacity:.8,
  shadowOffset:{width:1,height:1},
  marginRight:RFPercentage(.8)
},
tagsbtntext:{
  fontFamily:fonts.PoppinsRegular,
  fontSize:RFPercentage(1.6)
},
userinfo:{
  display:"flex",
  flexDirection:'row'
},
userinfoch1:{
  width:50,
  height:50,
  borderRadius:25,
  backgroundColor:colors.grey3
},
userinfoch2:{
  marginLeft:RFPercentage(2)
}
})