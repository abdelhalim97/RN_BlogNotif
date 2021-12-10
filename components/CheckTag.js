import React,{useState,useEffect} from 'react'
import { View, Text,StyleSheet } from 'react-native'
import { useDispatch,useSelector } from 'react-redux'
import { setTagsRedux } from '../slices/counterSlicesPosts'
export default function CheckTag(props) {
    const [CB, setCB] = useState(false)
    const [show, setShow] = useState(false)
    const [labelSelected, setLabelSelected] = useState()
    const [tags, setTags] = useState([])
    const dispatch = useDispatch()
// useEffect(() => {
//         // console.log(tags.includes(label))   tags.map(item=> !label.includes(tags))
                
// }, [CB,labelSelected])
// const changeTags=()=>{
//     !tags.includes(labelSelected)?
//                 setTags(tags=> [...tags,labelSelected]):setTags(tags=> [...tags,labelSelected]);
//                 dispatch(setTagsRedux(tags))
// }
// console.log(tags)

    const counterTag = useSelector(state=>state?.counterTag)
console.log(counterTag.value)
console.log(labelSelected)

    // const txI=[
    //     {
    //         id:1,
    //         title:"Front-end",
    //     },
    //     {
    //         id:2,
    //         title:"Back-end",
    //     },
    //     {
    //         id:3,
    //         title:"UI/UX",
    //     },
    //     {
    //         id:4,
    //         title:"Data Science",
    //     },
    // ]
    return (
            <View style={{ flexDirection:"row" }}>
                <CheckBox 
                    onClick={()=>{
                        setCB({isChecked:!CB.isChecked});
                        setShow(!show);
                        setLabelSelected(props.label);
                        changeTags();
                    }}
                    isChecked={CB.isChecked} 
                    checkBoxColor="#3A2298" style={{ marginTop:9 }}></CheckBox>
                    <Text style={{ fontSize:25 }}>{props.label}</Text>
                    {/* {console.log(props.label+" "+CB.isChecked+" "+props.id)} */}
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
