import { View, Text,TouchableOpacity,StyleSheet,ImageBackground,Image,ScrollView,FlatList,SafeAreaView, StatusBar,Dimensions } from 'react-native'
import * as React from 'react'
import colors from "../extra/colors"
import fonts from "../extra/fonts"
import { RFPercentage } from 'react-native-responsive-fontsize'
import Icon1 from "react-native-vector-icons/AntDesign"
import Icon2 from "react-native-vector-icons/Feather"
import Line from './Line'
import { BarChart } from "react-native-chart-kit";
export default function Chart() {
    return (
<View style={styleSheet.MainContainer}>
 <BarChart
   data={{
     labels: ['1', '2', '3', '4', '5','6','7'],
     datasets: [{ data: [400,800,870,500,1000] }],
   }}
   width={Dimensions.get('window').width - 10}
   height={230}
   chartConfig={{
     backgroundColor: colors.white,
     backgroundGradientFrom: colors.white,
     backgroundGradientTo: colors.white,
     decimalPlaces: 0,
    barPercentage:0.5,
    barRadius:RFPercentage(2),
    fillShadowGradient: colors.green,
    fillShadowGradientOpacity: 1,
     labelColor: (opacity = 1) => `rgba(0, 0, 0, 1)`,
     color: (opacity = 255) => colors.green,
   }}
 />

</View>
        )
}
  const styleSheet = StyleSheet.create({
   
    MainContainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom:RFPercentage(4)
    }
   
  });