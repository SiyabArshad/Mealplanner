import { View, Text,TouchableOpacity,StyleSheet,ImageBackground,Dimensions,Image,ScrollView,FlatList,SafeAreaView, StatusBar } from 'react-native'
import * as React from 'react'
import colors from "../extra/colors"
import fonts from "../extra/fonts"
import { RFPercentage } from 'react-native-responsive-fontsize'
import Icon1 from "react-native-vector-icons/EvilIcons"
import Icon2 from "react-native-vector-icons/Feather"
import Line from '../components/Line'
import AddFood from '../components/AddFood'
import Dropdown from '../components/Dropdown'
import Chart from '../components/Chart'
import Sharebox from '../components/Sharebox'
import Detailsbox from '../components/Detailsbox'
import Eliminationbox from '../components/Eliminationbox'
import Deletebox from '../components/Deletebox'
import { Modalize } from 'react-native-modalize';

export default function AddMeal({navigation}) {
    const modalizeshareRef = React.useRef(null);
    const onshareOpen = () => {
        modalizeshareRef.current?.open();
      };
      const onshareclose = () => {
        modalizeshareRef.current?.close();
      };
//hooks for delete modal
const modalizedeleteRef = React.useRef(null);
const ondeleteOpen = () => {
    modalizedeleteRef.current?.open();
  };
  const ondeleteclose = () => {
    modalizedeleteRef.current?.close();
  };
//end delete modal hooks
//hooks for detail modal
const modalizedetailRef = React.useRef(null);
const ondetailOpen = () => {
    modalizedetailRef.current?.open();
  };
  const ondetailclose = () => {
    modalizedetailRef.current?.close();
  };
//end detail modal hooks
//hooks for detail modal
const modalizeelemRef = React.useRef(null);
const onelemOpen = () => {
    modalizeelemRef.current?.open();
  };
  const onelemclose = () => {
    modalizeelemRef.current?.close();
  };
//end detail modal hooks

  
    return (
    <SafeAreaView style={styles.container}>
        <StatusBar translucent backgroundColor={"transparent"}></StatusBar>
        <Modalize adjustToContentHeight={true} ref={modalizeshareRef} >
        <Sharebox closefunc={onshareclose}/>
        </Modalize>
        <Modalize adjustToContentHeight={true} ref={modalizedeleteRef} >
        <Deletebox/>
        </Modalize>
        <Modalize adjustToContentHeight={true} ref={modalizedetailRef} >
        <Detailsbox closefunc={ondetailclose} openfunc={onelemOpen}/>
        </Modalize>
        <Modalize adjustToContentHeight={true} ref={modalizeelemRef} >
        <Eliminationbox closefunc={onelemclose}/>
        </Modalize>
        
        <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
        <View style={styles.child1}>
            <View style={styles.ch1cmp1}>
                <View style={styles.ch1text}>
                    <Text style={styles.semiboldtext}>Meal planner</Text>
                </View>
                <View style={styles.ch1icons}>
                    <TouchableOpacity onPress={onshareOpen}>
                    <Icon1 name='share-google' color={colors.black} size={30} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={()=>ondetailOpen()}>
                    <Icon2 name='more-vertical' color={colors.black} size={24}/>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.ch1cmp2}>
                <Text style={[styles.boldtext,{marginRight:RFPercentage(2)}]}>
                I love my diet
                </Text>
                <Icon2 name='edit-2' color={colors.black} size={20} ></Icon2>
            </View>
            <View style={styles.ch1cmp3}>
                <Text style={[styles.regulartext,{width:"80%"}]}>
                Guarda Beppe con attenzione, qui ci sarà la descrizione bladasdadsa
                asdasda...... Apro Box
                </Text>
            </View>
            <View style={styles.ch1cmp4}>
                <TouchableOpacity onPress={()=>navigation.navigate("MealScreen")}>
                <Text style={[styles.semiboldtext,{}]}>
                Piano standard 7 giorni
                </Text>
                </TouchableOpacity>
            </View>
        </View>
        <Line/>
        {
            ["Giorno 1","Giorno 2","Giorno 3","Giorno 4","Giorno 5"].map((item,i)=>(
                    <View key={i}>
                    <AddFood name={item} ondeleteOpen={ondeleteOpen} ondeleteClose={ondeleteclose}></AddFood>
                    <Line></Line>
                    </View>
                    ))
        }
        <View style={{display:"flex",flexDirection:"row",justifyContent:'space-between',paddingHorizontal:RFPercentage(2)
            ,paddingVertical:RFPercentage(1.5)
        }}>
            <Text style={{fontFamily:fonts.PoppinsBold,fontSize:RFPercentage(3),color:colors.grey3}}>Giorno 6</Text>
            <TouchableOpacity style={{paddingHorizontal:RFPercentage(1.7),paddingVertical:RFPercentage(1.3)
            ,backgroundColor:colors.green,borderRadius:RFPercentage(1.2)
            }}>
                <Text style={{color:colors.white,fontFamily:fonts.PoppinsRegular}}>AGGIUNGI</Text>
            </TouchableOpacity>
        </View>
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
            <View style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <TouchableOpacity style={styles.lastbtn}>
                <Text style={{fontSize:RFPercentage(2.2),fontFamily:fonts.PoppinsRegular,color:colors.white}}>
                    SALVA
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

})