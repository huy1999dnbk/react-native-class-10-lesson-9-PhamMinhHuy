import React,{useContext} from "react";
import { View,Text,StyleSheet } from "react-native";
import { InforContext } from "../../App";

const Detail: React.FC = () => {
    const context = useContext(InforContext)
    const {infor} = context
    const {email} = infor
    const {password} = infor
    return (
        <View style={{flex:1,backgroundColor:'white',justifyContent:'center',alignItems:'center'}}>
            <Text style={{...styles.textStyle,fontSize:24}}>EMAIL</Text>
            <Text style={{...styles.textStyle,fontSize:16}}>{email}</Text>
            <Text style={{...styles.textStyle,fontSize:24}}>PASSWORD</Text>
            <Text style={{...styles.textStyle,fontSize:16}}>{password}</Text>
        </View>       
    )
}

const styles = StyleSheet.create({
    textStyle:{
        color:'black',
        fontWeight:'bold',
        margin:15
    }
})

export default Detail;