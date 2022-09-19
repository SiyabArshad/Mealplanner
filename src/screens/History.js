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
import Bottom1 from '../components/Dairycomps/Bottom1'
import Bottom2 from '../components/Dairycomps/Bottom2'
import Calendarshow from '../components/Dairycomps/Calendarshow'
export default function History() {
    const[nav,setnav]=React.useState("note")
    const setnavfunc=(status)=>{
        setnav(status)
    }
    return (
    <SafeAreaView style={styles.container}>
    <StatusBar translucent backgroundColor={"transparent"}></StatusBar>
    <ScrollView horizontal={false} showsVerticalScrollIndicator={false}>
        <Calendarshow/>
    <TopNav  navfunc={setnavfunc}/>
    <Line/>
    {
        nav==='note'&&
    <View style={{display:"flex",alignItems:"center"}}>
    <Notecard/>
    <Notecard/>
    <Notecard/>
    </View>
    }
    {
        nav==='pasti'&&
        <Bottom1/>
    }
    {
        nav==="ATTIVITA’"&&
        <Bottom2/>
    }
    </ScrollView>
    </SafeAreaView>
  )
}
const styles=StyleSheet.create({
container:{
    flex:1,
    backgroundColor:colors.white
}
})