import React, { useContext } from 'react';
import { View, Text,Dimensions,Image } from 'react-native';
import { InforContext } from '../../App';
import CustomButton from '../CustomButton';
const {width,height} = Dimensions.get('window')
const Signout: React.FC = () => {
    const context = useContext(InforContext)
    const { infor } = context
    const { email } = infor;
    const { password } = infor;
    const { isSignIn } = infor;
    console.log(email, password)
    const { setInfor } = context
    const handleButton = () => {
        setInfor({ ...infor, email: '', password: '', isSignIn: false })
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{height:height/4,backgroundColor:'#67ce8b'}}>
                <Image
                    style={{
                        width:120,
                        height:120,
                        borderRadius:60,
                        position:'absolute',
                        alignSelf:'center',
                        bottom:'-30%'
                    }}
                    source={{
                        uri: 'https://scontent-hkg4-1.xx.fbcdn.net/v/t1.6435-1/p160x160/164493893_1675588975966057_2562295239068205933_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=7206a8&_nc_ohc=EV0g0kjBGJQAX8GC6Wx&_nc_ht=scontent-hkg4-1.xx&tp=6&oh=e0da1d63871f44b12c1fc983d3e01d15&oe=60C7FE05'
                    }} 
                />
            </View>
            <View style={{flex:1,justifyContent:'center'}}>
                <CustomButton
                    colorCode="#0ff1ce"
                    label="Sign out"
                    onPress={() => handleButton()}
                />
            </View>

        </View>
    )
}

export default Signout