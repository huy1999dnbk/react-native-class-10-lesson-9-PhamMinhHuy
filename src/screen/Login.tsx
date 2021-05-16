import React,{useContext,useState} from "react";
import { View,Text,Dimensions,Image,TouchableOpacity, } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomInput from "../CustomInput";
import CustomButton from "../CustomButton";
import { InforContext } from "../../App";
const {width,height} = Dimensions.get('window');
const Login: React.FC = () => {
    const context = useContext(InforContext);
    const {infor} = context;
    const {email} = infor;
    const {password} = infor;
    const {isSignIn} = infor;
    const {setInfor} = context;
    const [userInput,setUserInput] = useState('')
    const [passInput,setPassInput] = useState('')
    
    const handleButton = () => {
        if(userInput !== '' && passInput !== ''){
            setInfor({...infor,email: userInput, password:passInput,isSignIn:true})
        }
    }

    return(
        <SafeAreaView style={{flex:1}}>
            <View style={{width:'100%', height:height/5,alignItems:'center', justifyContent:'center'}}>
               <Text style={{color:'black',fontSize:24,fontWeight:'bold'}}>Sign In</Text>
            </View>
            <View style={{marginHorizontal:10}}>
                <CustomInput 
                    label="Email ID"
                    placeholder="Enter your email"
                    secureText={false}
                    value={userInput}
                    onChangeInput={(userInput) => setUserInput(userInput)}
                />
                <CustomInput 
                    label="Password"
                    placeholder="Enter your password"
                    secureText={true}
                    value={passInput}
                    onChangeInput={(passInput) => setPassInput(passInput)}

                />
                <CustomButton 
                    label="Sign In"
                    colorCode="#FFA500"
                    onPress={() => handleButton()}
                />
                <Text style={{margin:15, textAlign:'center'}}>Or Sign in with</Text>
                <View style={{width:'100%',height:100,flexDirection:'row'}}>
                    
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Login;