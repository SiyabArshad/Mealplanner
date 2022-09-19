import { View, Text,TouchableOpacity,StyleSheet,ImageBackground,Image,ScrollView,FlatList,SafeAreaView, StatusBar } from 'react-native'
import * as React from 'react'
import colors from "../../extra/colors"
import fonts from "../../extra/fonts"
import { RFPercentage } from 'react-native-responsive-fontsize'
import Icon1 from "react-native-vector-icons/AntDesign"
import Icon2 from "react-native-vector-icons/Feather"
import Iionic from "react-native-vector-icons/Ionicons"
import EIcon from "react-native-vector-icons/Entypo"
export default function Topbar({navigation}) {
  
  return (
    <View style={styles.cont1}>
      <Text style={styles.cont1text}>Diaro</Text>
      <View style={styles.cont2}>
        <TouchableOpacity style={styles.cont2btn}>
          <Iionic name='cart-outline' size={24} color={colors.black} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("history")} style={styles.cont2btn}>
          <Icon1 name='calendar' size={24} color={colors.black} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.cont2btn}>
          <EIcon name='dots-three-vertical' size={20} color={colors.black} />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles=StyleSheet.create({
    cont1:{
      display:"flex",
      flexDirection:"row",
      justifyContent:"space-between",
      paddingHorizontal:RFPercentage(2),
      paddingVertical:RFPercentage(.5),
      backgroundColor:colors.white
    },
    cont1text:{
      fontFamily:fonts.PoppinsSemiBold,
      fontSize:RFPercentage(2.5)
    },
    cont2:{
      display:"flex",
      flexDirection:"row",
      alignItems:"center"
    },
    cont2btn:{
      marginRight:RFPercentage(1.5)
    }
})