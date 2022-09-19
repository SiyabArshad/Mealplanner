import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView, ImageBackground, Platform, TextInput } from 'react-native'
import CalendarPicker from 'react-native-calendar-picker';
import { RFPercentage } from 'react-native-responsive-fontsize';
import colors from '../../extra/colors';
import fonts from '../../extra/fonts';
const Months=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
export default function Calendarshow() {
    const [selectedStartDate, setSelectedStartDate] = useState(null);
    const [selectedEndDate, setSelectedEndDate] = useState(null);

    const onDateChange = (date, type) => {
        //function to handle the date change
        if (type === 'END_DATE') {
            setSelectedEndDate(date);
        } else {
            setSelectedEndDate(null);
            setSelectedStartDate(date);
        }
    };
    console.log(new Date(selectedStartDate).getDate())
  return (
       <View style={styles.container}>
        {
            selectedStartDate===null?
            <Text style={{marginVertical:RFPercentage(.5)}}>
            Seleziona il periodo
            </Text>
            :
        <Text style={{marginVertical:RFPercentage(.5)}}>
        From {Months[new Date(selectedStartDate).getMonth()]} {new Date(selectedStartDate).getDate()} to 
        {Months[new Date(selectedEndDate).getMonth()]} {new Date(selectedEndDate).getDate()}
        </Text>
        }
                            <CalendarPicker
                                startFromMonday={true}
                                allowRangeSelection={true}
                                allowBackwardRangeSelect={true}
                                minDate={new Date(2018, 1, 1)}
                                maxDate={new Date(2050, 6, 3)}
                                showDayStragglers={true}
                                weekdays={
                                    [
                                        'Mon',
                                        'Tue',
                                        'Wed',
                                        'Thur',
                                        'Fri',
                                        'Sat',
                                        'Sun'
                                    ]}
                                months={[
                                    'January',
                                    'Febraury',
                                    'March',
                                    'April',
                                    'May',
                                    'June',
                                    'July',
                                    'August',
                                    'September',
                                    'October',
                                    'November',
                                    'December',
                                ]}
                                previousTitle="<"
                                nextTitle=">"
                                todayBackgroundColor={"#0000"}
                                selectedDayColor={colors.transgreen}
                                selectedDayTextColor={colors.black}
                                scaleFactor={375}
                                textStyle={{
                                    fontFamily:fonts.PoppinsMedium ,
                                    color: '#000000',
                                }}
                                onDateChange={onDateChange}
                            />
                        </View>
  )
}

const styles = StyleSheet.create({
    view: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: "center",
        backgroundColor: "#fff"
    },
    container: {
        flex: 1,
        paddingTop: 30,
        backgroundColor: '#ffffff',
        padding: 16,
    },
})