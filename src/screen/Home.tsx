import React from 'react';
import { View, Text, Dimensions, SafeAreaView, TouchableOpacity, } from 'react-native';
const { width, height } = Dimensions.get('window');
import { useNavigation } from '@react-navigation/native';
const Home: React.FC = () => {
    const navigation = useNavigation();
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f8ff' }}>
            <View style={{ width: height / 2, height: height / 2, backgroundColor: '#4b0082', justifyContent: 'center', alignItems: 'center', borderRadius: height / 4 }}>
                <Text style={{ color: 'yellow', fontSize: 24 }}>Welcome to survey</Text>
                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate('Survey');
                    }} style={{ backgroundColor: 'green', padding: 10, borderRadius: 10, marginTop: 15 }}>
                    <Text style={{ fontSize: 16 }}>Click me to start</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}
export default Home;