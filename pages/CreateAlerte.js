import React, { useState } from 'react'
import { View, Text,StyleSheet } from 'react-native'
import { LabelInput,DatePickerCustom } from '../components';
import { BackGround, BarReset } from '../general'
import ExpoNotif from "../general/ExpoNotif"

export default function CreateAlerte() {
    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [date, setDate] = useState(new Date());
    const label=[
        {
            id:1,
            label:"Titre d'alerte",
            pass:false,
            value:title,
        },
        {
            id:2,
            label:"Description (option)",
            pass:false,
            value:body,
        },
    ]
    return (
        <>
            <BackGround></BackGround>
            <View style={styles.container}>
                <BarReset></BarReset>
                <View style={{ paddingHorizontal:"25%",backgroundColor:"#FFF" }}>
                    <View style={styles.header}>
                        <Text style={{ color:"#585859",textAlign:"center" }}>Créer une nouvelle alerte</Text>
                    </View>
                </View>
                <View style={styles.view}>
                    {
                        label.map((data)=>
                        <LabelInput key={data.id} icon={data.icon} 
                        label={data.label}  pass={data.pass} value={data.value} 
                        onChangeText={text=>data.id===1?setTitle(text):setBody(text)} id={data.id}
                        ></LabelInput>)
                    }<View style={{ marginBottom:25 }}>
                    <DatePickerCustom setDate={setDate} date={date}></DatePickerCustom>
                    <Text style={{ textAlign:"center",fontSize:17,marginTop:10 }}>
                        Remarque : la notification n'apparaîtra que si l'application est fermée ou s'exécute en arrière-plan 
                    </Text>
                    <ExpoNotif title={title} body={body} date={date}></ExpoNotif>
                    </View>
                </View>
            </View>            
        </>
    )
}
const styles = StyleSheet.create({
    container: {flex:1,position:"absolute",width:"100%",height:"100%",},
    header:{backgroundColor:"#FFF",borderBottomWidth:1,borderColor:"#5c1573"},
    view:{backgroundColor:"#FFF",paddingHorizontal:30,paddingTop:"40%"},
    btn:{backgroundColor:"#FFF"}
  });