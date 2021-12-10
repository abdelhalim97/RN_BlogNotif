import React, {useState} from 'react';
import {View, Platform,StyleSheet} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { FontAwesomeIconOpacity } from '.';
import { faClock,faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

export default function DatePickerCustom(props) {

  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || props.date;
      setShow(Platform.OS === 'ios');
      props.setDate(currentDate);
  };
  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };
  const showDatepicker = () => {
    showMode('date');
  };
  const showTimepicker = () => {
    showMode('time');
  };
  const data=[
    {
      id:1,
      fnc:showDatepicker,
      icon:faCalendarAlt,
    },
    {
      id:2,
      fnc:showTimepicker,
      icon:faClock,
    },
]
  return (
    <View style={{ marginTop:25 }}>
      <View style={{flexDirection:"row",justifyContent:"center"}}>
      {data.map((d)=>
        <FontAwesomeIconOpacity 
      key={d.id} fnc={d.fnc} style={styles.btt} s={32} c="#FFF" icon={d.icon}></FontAwesomeIconOpacity>
      )}
       </View>
      {show && (
        <DateTimePicker
        style={{width: 320, backgroundColor: "white"}}
          testID="dateTimePicker"
          value={props.date}
          mode={mode}
          is24Hour={true}
          display="default"
          onChange={onChange}
          minimumDate={new Date()}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  btt:{
      backgroundColor:"#41928D",padding:8,borderWidth:1,borderColor:"#41928D",borderRadius:25,
        marginHorizontal:7
      },
});