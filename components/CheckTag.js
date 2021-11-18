import React,{useState} from 'react'
import { View, Text,StyleSheet } from 'react-native'
import CheckBox from 'react-native-check-box'

export default function CheckTag(props) {
    const [CB, setCB] = useState(false)
    const [show, setShow] = useState(false)
    const txI=[
        {
            id:1,
            title:"Front-end",
        },
        {
            id:2,
            title:"Back-end",
        },
        {
            id:3,
            title:"UI/UX",
        },
        {
            id:4,
            title:"Data Science",
        },
    ]
    return (
            <View style={{ flexDirection:"row" }}>
                <CheckBox 
                    onClick={()=>{setCB({isChecked:!CB.isChecked});setShow(!show)}}
                    isChecked={CB.isChecked} 
                    checkBoxColor="#3A2298" style={{ marginTop:9 }}></CheckBox>
                    <Text style={{ fontSize:25 }}>{props.label}</Text>
            </View>
        //         {/* {txI.map((data)=>show && props.id===data.id &&
        //             <View key={data.id} style={{ flexDirection:"row" }}>
        //                 <CheckBox 
        //                 onClick={()=>{setShowRelated({isChecked:!showRelated.isChecked})}}
        //                 isChecked={showRelated.isChecked} 
        //                 checkBoxColor="#3A2298" style={{ marginTop:9 }} ></CheckBox>
        //                 <Text>
        //                 </Text>
        //             </View>
        // )} */}
    )
}
