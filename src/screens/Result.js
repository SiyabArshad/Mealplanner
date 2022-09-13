import { View, Text,TouchableOpacity,StyleSheet,ImageBackground,Image,ScrollView,FlatList,SafeAreaView, StatusBar } from 'react-native'
import * as React from 'react'
import colors from "../extra/colors"
import fonts from "../extra/fonts"
import { RFPercentage } from 'react-native-responsive-fontsize'
import Icon1 from "react-native-vector-icons/EvilIcons"
import Icon2 from "react-native-vector-icons/Feather"
import Icon3 from "react-native-vector-icons/Ionicons"
import TopPlan from '../components/TopPlan'
import Plan from '../components/Plan'
import Headeritemtoplan from '../components/Headeritemtoplan'
import Planitem from '../components/Planitem'
import Searchcard from '../components/Searchcard'
import Filter from '../components/Filter'
import CommunityPlanitem from '../components/CommunityPlanitem'
import { Modalize } from 'react-native-modalize';
import Ingredient from '../components/Ingredient'
import Custom from '../components/Custom'
import Custom2 from '../components/Custom2'
import Resulttop from '../components/Resulttop'
import Resultingredient from '../components/Resultingredient'
import Pianicard from '../components/Pianicard'
import SearchFilter from '../components/ResultFilter'
export default function Result({navigation}) {
    //hooks for filter modal
const modalizefilterRef = React.useRef(null);
const onfilterOpen = () => {
    modalizefilterRef.current?.open();
  };
  const onfilterclose = () => {
    modalizefilterRef.current?.close();
  };
//end filter modal hooks
  const[tab,settab]=React.useState("RICETTE")
  const navfunction=(stat)=>{
    settab(stat)
  }
    const[search,setsearch]=React.useState("")
    const searchfunc=(stat)=>{
        setsearch(stat)
    }
  return (
    <SafeAreaView style={style.container}>
         <StatusBar translucent backgroundColor={"transparent"}></StatusBar>
         <Modalize adjustToContentHeight={true} ref={modalizefilterRef} >
        <SearchFilter tab={tab} closefunc={onfilterclose}/>
        </Modalize>
        
        <Resulttop currtab={navfunction}  openfunc={onfilterOpen}  searchfunc={searchfunc} navigation={navigation}/>
        {
            search?
            <Searchcard/>
            :
            <>
        <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
            <View style={{display:"flex",alignItems:"center"}}>
                    {
                        tab==='RICETTE'&&
                       [1,2,3,4,5].map((item,i)=>(
                        <CommunityPlanitem key={i}/>
                       )) 
                    }
                    {
                        tab==='PIANI'&&
                       [1,2,3,4,5].map((item,i)=>(
                        <View key={i} style={{display:"flex",flexDirection:"row",alignItems:"center"
                        ,width:"90%",marginBottom:RFPercentage(1)
                        }}>
                            <Image style={{height:RFPercentage(7),width:RFPercentage(7),borderRadius:RFPercentage(2)}} source={require("../Assets/user2.png")}/>
                            <Text style={{fontFamily:fonts.PoppinsMedium,marginLeft:RFPercentage(2)}}>Giuseppe</Text>
                          </View>  
                       )) 
                    }
            </View>
            {
                 tab==='INGREDIENTI'&&
                 <View style={{display:"flex",flexDirection:"row",flexWrap:"wrap",justifyContent:"center"}}>
                {
                 [1,2,3,4,5,6,7,8,9].map((item,i)=>(
                  <Resultingredient key={i}/>
                 )) 
}
                 </View>
            }
            {
                tab==='UTENTI'&&
                <View style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                {        
                [1,2,3,4,5,6,7,8,9].map((item,i)=>(
                    <Pianicard key={i}/>
                   ))
                        }
                        </View>
    }
        </ScrollView>
        <View style={style.last}>
        <TouchableOpacity style={style.endbtn}>
            <Text style={style.endbtntext}>Aggiungi</Text>
        </TouchableOpacity>
        </View>
        </>
}
    </SafeAreaView>
  )
}

const style=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.white
    },
    last:{
        width:"100%",
        position:"absolute",
        bottom:RFPercentage(5),
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
    },
    endbtn:{
        width:RFPercentage(20),
        paddingHorizontal:RFPercentage(1.5),
        paddingVertical:RFPercentage(1),
        backgroundColor:colors.black,
        borderRadius:RFPercentage(1.8),
        display:"flex",
        flexDirection:"row",
        justifyContent:'center',
        alignItems:"center"
    },
    endbtntext:{
        color:colors.white,
        fontFamily:fonts.PoppinsRegular
    }
})