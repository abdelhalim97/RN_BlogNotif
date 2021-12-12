import React,{useState,useEffect} from 'react'
import { View,StyleSheet,ScrollView, TouchableOpacity,Text } from 'react-native'
import { BackGround,BarReset } from '../general'
import { FontAwesomeIconOpacity,CustomTag,Posts} from "../components"
import { faUser,faSignOutAlt,faPlus,faBell } from '@fortawesome/free-solid-svg-icons'
import { useNavigation } from '@react-navigation/core';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { signOut } from '@firebase/auth'
import {auth} from "../firebase"
import { useDispatch } from 'react-redux'
import {setUserRedux} from "../slices/CounterSlices"
import { db } from '../firebase'
import {collection, onSnapshot} from "firebase/firestore"

export default function Accueil() {
    const [posts, setPosts] = useState([])
    const [customTag, setCustomTag] = useState("Front-End")
    const postsCollectionRef = collection(db,"posts")
    useEffect(() => {
        onSnapshot(postsCollectionRef,(snapshot)=>
        setPosts(snapshot.docs.map((doc)=>doc.data())))
    }, [])
    const dispatch = useDispatch()
    const navigation=useNavigation();
    const handleRedirectionProfil=()=>{
        navigation.navigate("Profil")
    }
    const logout=async ()=>{
        await signOut(auth)
        dispatch(setUserRedux(null))
        navigation.navigate("LogIn");
    }
    const handleCustomTag=param=>()=>{
        setCustomTag(param)
    }
    const DataTag=[
        {
            id:1,
            title:"Front-End",
            fnc:handleCustomTag("Front-End"),
            styleP:styles.scrollElements,
            styleActive:styles.styleActive,
            related:["HTML","CSS","Tailwind"],
        },
        {
            id:2,
            title:"Back-End",
            fnc:handleCustomTag("Back-End"),
            styleP:styles.scrollElements,
            styleActive:styles.styleActive,
            related:["PHP","NODE.js","Flusk"],
        },
        {
            id:3,
            title:"UI/UX",
            fnc:handleCustomTag("UI/UX"),
            styleP:styles.scrollElements,
            styleActive:styles.styleActive,
            related:["Illustrator","Adobe xd","Photoshop"],
        },
        {
            id:4,
            title:"Data Science",
            fnc:handleCustomTag("Data Science"),
            styleP:styles.scrollElements,
            styleActive:styles.styleActive,
            related:["Methodology","Data Analytics","python"],
        },
    ]
    return (
        <>
            <BackGround></BackGround>
            <View style={styles.container}>
                <BarReset></BarReset>
                <View style={styles.postsContainer}>
                    <View style={{ flexDirection:"row",width:"100%",justifyContent:"space-between" }}>
                        <FontAwesomeIconOpacity fnc={()=>{navigation.navigate("NotifPage")}} icon={faBell}
                        style={styles.footerIcon} c="#FFF" s={32}>
                        </FontAwesomeIconOpacity>
                        <Text>Liste des Postes</Text>
                        <FontAwesomeIconOpacity fnc={handleRedirectionProfil} icon={faUser}
                        style={styles.footerIcon} c="#FFF" s={32}>
                        </FontAwesomeIconOpacity>
                    </View>
                    <View style={{ flex:0.08,marginTop:20 }}>
                        <ScrollView  horizontal showsHorizontalScrollIndicator={false}>
                            {
                                DataTag.map((data)=>
                                <CustomTag key={data.id} title={data.title} fnc={data.fnc}
                                styleP={customTag===data.title?data.styleActive:data.styleP} >
                                </CustomTag>)
                            }
                        </ScrollView>
                    </View>
                    <View style={{ flex:1 }}>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {posts.map((post)=>
                            post.tags.includes(customTag)?<Posts key={post.uid} paragraph={post.body} email={post.email}
                            displayName={post.displayName} img={post.img}
                            title={post.title}></Posts>:<></>
                        )}
                    </ScrollView>
                    </View>
                    
                    <View style={{ flexDirection:"row",justifyContent:"space-between",paddingTop:5}}>
                        <TouchableOpacity style={styles.createPost}
                        onPress={() => navigation.navigate("CreatePost")} activeOpacity={0.65}>                             
                            <Text style={{ color:"#FFF",padding:5 }}>
                                <FontAwesomeIcon icon={faPlus} style={{color:"#FFF"}}/> Créer une Poste
                            </Text>
                        </TouchableOpacity>
                        <FontAwesomeIconOpacity s={32} fnc={()=>{logout()}} icon={faSignOutAlt}
                        style={styles.footerIcon} c="#FFF"></FontAwesomeIconOpacity>
                    </View>
                </View>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    postsContainer:{backgroundColor:"#FFF",paddingVertical:5,paddingHorizontal:30,flex:1},
    container: {flex:1,position:"absolute",width:"100%",height:"100%",},
    footerIcon:{
        backgroundColor:"#41928D",padding:8,borderWidth:1,borderColor:"#41928D",borderRadius:25,
        marginHorizontal:7,alignSelf:"flex-end"
    },
    createPost:{
        backgroundColor:"#41928D",borderWidth:1,borderColor:"#41928D",borderRadius:25,
        alignItems:"center",width:"40%",flex:1
    },
    scrollElements:{
        marginLeft:10,color:"#FFF",backgroundColor:"#41928D",paddingHorizontal:3
        ,borderRadius:15
    },
    styleActive:{
        marginLeft:10,color:"#41928D",backgroundColor:"#FFF",paddingHorizontal:3
        ,borderColor:"#41928D",borderWidth:1,borderRadius:15
    },
  });