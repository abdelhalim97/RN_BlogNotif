import React,{useState} from 'react'
import { View,StyleSheet,ScrollView, TouchableOpacity,Text } from 'react-native'
import { BackGround,BarReset } from '../general'
import {CustomTag,FontAwesomeIconOpacity} from "../components/"
import {Posts} from "../pages/"
import { faBlog,faUser,faSignOutAlt,faPlus } from '@fortawesome/free-solid-svg-icons'
import { useNavigation } from '@react-navigation/core';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { signOut } from '@firebase/auth'
import {auth} from "../firebase"

export default function Accueil() {
    const navigation=useNavigation();
    const [customTag, setCustomTag] = useState(1)
    const handleRedirectionProfil=()=>{
        navigation.navigate("Profil")
    }
    const handleRedirectionLogIn=()=>{
        navigation.navigate("LogIn");
    }
    const logout=async ()=>{
        await signOut(auth)
    }
    const handleCustomTag=param=>()=>{
        setCustomTag(param)
    }
    const handleError=param=>()=>{
        console.log(param)
    }
    const tx=[
        {
            id:1,
            title:"Front-end",
            fnc:handleCustomTag(1),
            styleP:styles.scrollElements,
            styleActive:styles.styleActive,
            related:["HTML","CSS","Tailwind"],
        },
        {
            id:2,
            title:"Back-end",
            fnc:handleCustomTag(2),
            styleP:styles.scrollElements,
            styleActive:styles.styleActive,
            related:["PHP","NODE.js","Flusk"],
        },
        {
            id:3,
            title:"UI/UX",
            fnc:handleCustomTag(3),
            styleP:styles.scrollElements,
            styleActive:styles.styleActive,
            related:["Illustrator","Adobe xd","Photoshop"],
        },
        {
            id:4,
            title:"Data Science",
            fnc:handleCustomTag(4),
            styleP:styles.scrollElements,
            styleActive:styles.styleActive,
            related:["Methodology","Data Analytics","python"],
        },
    ]
    const reactImg = {uri: 'https://reactnative.dev/img/tiny_logo.png'}

    return (
        <>
            <BackGround></BackGround>
            <View style={styles.container}>
                <BarReset></BarReset>
                <View style={styles.header}>
                    <FontAwesomeIconOpacity c="purple" icon={faBlog} s={32}></FontAwesomeIconOpacity>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {
                            tx.map((data)=>
                            <CustomTag key={data.id} title={data.title} 
                            fnc={data.fnc}
                            styleP={customTag===data.id?data.styleActive:data.styleP} >
                            </CustomTag>)
                        }
                    </ScrollView>
                </View>
                {/* <View style={{backgroundColor:"#FFF",paddingTop:5,paddingBottom:5,opacity:0.9 }}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {
                        tx.map((data)=>
                        customTag===data.id &&
                        data.related.map((rl)=>
                        <CustomTag key={data.id} title={rl} fnc={handleError("f")}
                        styleP={data.styleP}></CustomTag>))
                    }
                </ScrollView>
                </View> */}
                <View style={styles.postsContainer}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        <Posts img={reactImg} fullName="John Doe" title="Title"
                        paragraph="lorem ipsum "></Posts>
                    </ScrollView>
                    <View style={{ flexDirection:"row",justifyContent:"space-between",paddingTop:5}}>
                        <FontAwesomeIconOpacity fnc={handleRedirectionProfil} icon={faUser}
                        style={styles.footerIcon} c="#5c1573" s={32}>
                        </FontAwesomeIconOpacity>
                        <TouchableOpacity style={styles.createPost}
                        onPress={() => navigation.navigate("CreatePost")} activeOpacity={0.65}>                             
                            <Text style={{ color:"#E2D5CC",padding:5 }}>
                                <FontAwesomeIcon icon={faPlus} style={{color:"#E2D5CC"}}/> Create Post
                            </Text>
                        </TouchableOpacity>
                        <FontAwesomeIconOpacity s={32} fnc={handleRedirectionLogIn,logout} icon={faSignOutAlt}
                        style={styles.footerIcon}
                        c="#5c1573"></FontAwesomeIconOpacity>
                    </View>
                </View>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    header:{
        flexDirection:"row",backgroundColor:"#FFF",paddingHorizontal:10,
        paddingVertical:5,elevation:20,
    },
    scrollElements:{
        marginLeft:10,color:"#5c1573",backgroundColor:"#E2D5CC",paddingHorizontal:3
        ,borderWidth:1,borderColor:"#5c1573",borderRadius:15
    },
    styleActive:{
        marginLeft:10,color:"#E2D5CC",backgroundColor:"#5c1573",paddingHorizontal:3
        ,borderWidth:1,borderColor:"#E2D5CC",borderRadius:15
    },
    postsContainer:{backgroundColor:"#FFF",paddingVertical:5,marginTop:20
    ,paddingHorizontal:15,flex:1},
    container: {flex:1,position:"absolute",width:"100%",height:"100%",},
    footerIcon:{
        backgroundColor:"#E2D5CC",padding:8,borderWidth:1,borderColor:"#E2D5CC",borderRadius:25,
        marginHorizontal:7
    },
    createPost:{
        backgroundColor:"#5c1573",borderWidth:1,borderColor:"#5c1573",borderRadius:25,
        alignItems:"center",width:"40%",flex:1
    }
  });