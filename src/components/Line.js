import { View, Text,TouchableOpacity,StyleSheet,ImageBackground,Image,ScrollView,FlatList,SafeAreaView, StatusBar } from 'react-native'
import * as React from 'react'
import colors from "../extra/colors"
import { RFPercentage } from 'react-native-responsive-fontsize'

export default function Line() {
  return (
    <View style={{width:"100%",height:RFPercentage(.1),backgroundColor:colors.grey2}} />
  )
}