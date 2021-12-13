import React,{useState,useEffect} from 'react'
import { View,StyleSheet,ScrollView, TouchableOpacity,Text } from 'react-native'
import { BackGround,BarReset } from '../general'
import { FontAwesomeIconOpacity} from "../components"
import { faUser,faSignOutAlt,faPlus,faBlog } from '@fortawesome/free-solid-svg-icons'
import { useNavigation } from '@react-navigation/core';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { signOut } from '@firebase/auth'
import {auth} from "../firebase"
import { useDispatch } from 'react-redux'
import {setUserRedux} from "../slices/CounterSlices"
import { db } from '../firebase'
import {collection, onSnapshot} from "firebase/firestore"
import {Posts} from "../components"
export default function NotifPage() {
    const [posts, setPosts] = useState([])
    const postsCollectionRef = collection(db,"tasks")
    useEffect(() => {
        onSnapshot(postsCollectionRef,(snapshot)=>(
            setPosts(snapshot.docs.map((doc)=>doc.data()))
        ))
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
    return (
        <>
            <BackGround></BackGround>
            <View style={styles.container}>
                <BarReset></BarReset>
                <View style={styles.postsContainer}>
                <View style={{ flexDirection:"row",width:"100%",justifyContent:"space-between" }}>
                    <FontAwesomeIconOpacity fnc={()=>{navigation.navigate("Accueil")}} icon={faBlog}
                    style={styles.footerIcon} c="#FFF" s={32}>
                    </FontAwesomeIconOpacity>
                    <Text>Liste des Alertes</Text>
                    <FontAwesomeIconOpacity fnc={handleRedirectionProfil} icon={faUser}
                    style={styles.footerIcon} c="#FFF" s={32}>
                    </FontAwesomeIconOpacity>
                </View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                        {posts.map((post)=>
                            <Posts key={post.uid} paragraph={post.body} email={post.email}
                            displayName={post.displayName} 
                            img={post.img}
                            endDate={post.endDateS}
                            title={post.title}></Posts>
                        )}
                    </ScrollView>
                    <View style={{ flexDirection:"row",justifyContent:"space-between",paddingTop:5}}>
                        <TouchableOpacity style={styles.createPost}
                        onPress={() => navigation.navigate("CreateAlerte")} activeOpacity={0.65}>                             
                            <Text style={{ color:"#FFF",padding:5 }}>
                                <FontAwesomeIcon icon={faPlus} style={{color:"#FFF"}}/> Créer une Alerte
                            </Text>
                        </TouchableOpacity>
                        <FontAwesomeIconOpacity s={32} fnc={()=>{logout()}} icon={faSignOutAlt}
                        style={styles.footerIcon}
                        c="#FFF"></FontAwesomeIconOpacity>
                    </View>
                </View>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    postsContainer:{backgroundColor:"#FFF",paddingVertical:5
    ,paddingHorizontal:30,flex:1},
    container: {flex:1,position:"absolute",width:"100%",height:"100%",},
    footerIcon:{
        backgroundColor:"#41928D",padding:8,borderWidth:1,borderColor:"#41928D",borderRadius:25,
        marginHorizontal:7,alignSelf:"flex-end"
    },
    createPost:{
        backgroundColor:"#41928D",borderWidth:1,borderColor:"#41928D",borderRadius:25,
        alignItems:"center",width:"40%",flex:1
    }
  });