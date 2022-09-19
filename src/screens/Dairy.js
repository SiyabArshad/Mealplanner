import { View, Text,TouchableOpacity,StyleSheet,ImageBackground,Image,ScrollView,FlatList,SafeAreaView, StatusBar,Dimensions } from 'react-native'
import * as React from 'react'
import colors from "../extra/colors"
import fonts from "../extra/fonts"
import { RFPercentage } from 'react-native-responsive-fontsize'
import Icon1 from "react-native-vector-icons/EvilIcons"
import Icon2 from "react-native-vector-icons/Feather"
import Icon3 from "react-native-vector-icons/Ionicons"
import TopPlan from '../components/TopPlan'
import Plan from '../components/Plan'
import Topbar from '../components/Dairycomps/Topbar'
import TopNav from '../components/Dairycomps/TopNav'
import Notecard from '../components/Dairycomps/Notecard'
import AddNote from '../components/Dairycomps/AddNote'
import Week from '../components/Dairycomps/Week'
import Attivia from '../components/Dairycomps/Attivia'
import Pasti from '../components/Dairycomps/Pasti'
import Line from '../components/Line'
import AddFood from '../components/Foodsection'
import Dropdown from '../components/Dropdown'
import Chart from '../components/Chart'
import Sharebox from '../components/Sharebox'
import Detailsbox from '../components/Detailsbox'
import Eliminationbox from '../components/Eliminationbox'
import Deletebox from '../components/Deletebox'
import Swap from '../components/Swap'
import { Modalize } from 'react-native-modalize';
import Nutreints from '../components/Nutreints'
import SelectDay from '../components/SelectDay'
import Mealmodal from '../components/Mealmodal'

export default function Dairy({navigation}) {
    const[nav,setnav]=React.useState("note")
    const [bks,setbks]=React.useState([])
    const setnavfunc=(status)=>{
        setnav(status)
    }
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
//swap modalize hook
const modalizeswapRef = React.useRef(null);
    const onswapOpen = () => {
        modalizeswapRef.current?.open();
      };
      const onswapclose = () => {
        modalizeswapRef.current?.close();
      };
//end swap
//Nutreint modalize hook
const modalizenutRef = React.useRef(null);
    const onnutOpen = () => {
        modalizenutRef.current?.open();
      };
      const onnutclose = () => {
        modalizenutRef.current?.close();
      };
//end 
//slect day modalize hook
const modalizedayRef = React.useRef(null);
    const ondayOpen = () => {
        modalizedayRef.current?.open();
      };
      const ondayclose = () => {
        modalizedayRef.current?.close();
      };
//end 
  //slect meal modalize hook
const modalizemealRef = React.useRef(null);
const onmealOpen = () => {
    modalizemealRef.current?.open();
  };
  const onmealclose = () => {
    modalizemealRef.current?.close();
  };
//end
  return (
    <SafeAreaView style={{ backgroundColor:colors.white,flex:1}}>
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
        <Modalize adjustToContentHeight={true} ref={modalizeswapRef} >
        <Swap closefunc={onswapclose}/>
        </Modalize>
        <Modalize adjustToContentHeight={true} ref={modalizenutRef} >
        <Nutreints closefunc={onnutclose} ondayOpen={ondayOpen}/>
        </Modalize>
        <Modalize adjustToContentHeight={true} ref={modalizedayRef} >
        <SelectDay onmealOpen={onmealOpen} closefunc={ondayclose}/>
        </Modalize>
        <Modalize adjustToContentHeight={true} ref={modalizemealRef} >
        <Mealmodal openfunc={onmealOpen} closefunc={onmealclose}/>
        </Modalize>
    <ScrollView showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false} horizontal={false}>
    <Topbar navigation={navigation}/>
    <Week/>
    <TopNav navfunc={setnavfunc}/>
    <Line/>
    {
        nav==="note"&&
        <>
    <View style={styles.cont1}>
        <Text style={styles.cont1text}>Note</Text>
        <TouchableOpacity style={styles.btn}>
            <Icon2 name='plus' size={30} color={colors.black}/>
        </TouchableOpacity>
    </View>
    <Text style={styles.regtext}>
    Nessuna nota al momento
    </Text>
    <View style={{display:"flex",alignItems:"center"}}>
    <Notecard/>
    </View>
    <AddNote/>
    </>
}
{
    nav==="ATTIVITA’"&&
    <Attivia/>
}
{
    nav==="pasti"&&
    <>
    <Pasti/>
    {
            [1].map((item,i)=>(
                    <View key={i}>
                    <AddFood navigation={navigation} name={""} onnutOpen={onnutOpen} ondeleteOpen={ondeleteOpen} ondeleteClose={ondeleteclose} onswapOpen={onswapOpen}></AddFood>
                    <Line></Line>
                    </View>
                    ))
        }
        <View style={styles.card}>
        <View style={{display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
            <Text style={{fontFamily:fonts.PoppinsMedium}}>ACQUOMETRO</Text>
            <TouchableOpacity>
                <Icon2 name='plus' color={colors.black} size={24}/>
            </TouchableOpacity>
        </View>
        <Text style={{marginVertical:RFPercentage(1),width:"90%",fontFamily:fonts.PoppinsLight}}>
        Idratare il proprio corpo è fondamentale! Dovresti bere almeno 2lt d’acqua al giorno.
        </Text>
        <View style={{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center",alignItems:"center"}}>
            {
                [1,2,3,4,5,6,7,8,9,10].map((item,i)=>(
                    <ImageBackground key={i} style={styles.buck} source={bks?.includes(item)?require("../Assets/bucket2.png"):require("../Assets/bucket1.png")}>
                        <TouchableOpacity
                        onPress={bks?.includes(item)?()=>setbks(bks.filter((ite)=>ite!==item)):()=>setbks(it=>[...it,item])}
                        style={{backgroundColor:colors.transgrey3,borderRadius:RFPercentage(.4)}}>
                            <Icon2 name={bks?.includes(item)?"minus":'plus'} color={bks?.includes(item)?colors.white:colors.black} size={20}/>
                        </TouchableOpacity>
                    </ImageBackground>
                ))
            }
        </View>
        <View style={{width:"95%",marginTop:RFPercentage(1),marginHorizontal:"2.5%",padding:RFPercentage(1.3),borderRadius:RFPercentage(1.9),
        backgroundColor:colors.transgreen}}>
            <Text style={{color:colors.green,fontFamily:fonts.PoppinsSemiBold}}>
            Stai andando bene!
            </Text>
            <Text style={{color:colors.green,fontSize:RFPercentage(1.5),fontFamily:fonts.PoppinsLight,textAlign:"left",marginVertical:RFPercentage(.5)}}>
            Idratarsi costantemente significa aumentare l’efficienza del tuo organismo e ad assumere la giusta quantità di cibo 
            </Text>
        </View>
        </View>
    </>
}
    </ScrollView>
    <TouchableOpacity style={styles.addbtn} onPress={()=>navigation.navigate("addplan")}>
            <Icon2 name='plus' color={colors.white} size={30}/>
        </TouchableOpacity>
    </SafeAreaView>
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

    addbtn:{
        position:"absolute",
        bottom:20,
        right:20,
        backgroundColor:colors.green,
        width:RFPercentage(6),
        height:RFPercentage(6),
        display:'flex',
        justifyContent:"center",
        alignItems:"center",
        borderRadius:RFPercentage(1.5)
    },
    cont1text:{
        fontFamily:fonts.PoppinsBold,
        fontSize:RFPercentage(2.8)
    },
    regtext:{
        fontSize:RFPercentage(1.8),
        fontFamily:fonts.PoppinsLight,
        marginHorizontal:RFPercentage(2),
        marginVertical:RFPercentage(1)
    },
    card:{
        marginHorizontal:RFPercentage(2),
        marginVertical:RFPercentage(1),
        backgroundColor:colors.white,
        elevation:2,
        shadowColor:colors.grey3,
        shadowOffset:{width:0,height:.5},
        shadowOpacity:0.4,
        shadowRadius:5,
        borderRadius:RFPercentage(2),
        padding:RFPercentage(2)
    },
    buck:{
        width:RFPercentage(7),
        height:RFPercentage(7),
        margin:RFPercentage(.5),
        resizeMode:"cover",
        display:"flex",
        justifyContent:"center",
        alignItems:'center'
    }
})