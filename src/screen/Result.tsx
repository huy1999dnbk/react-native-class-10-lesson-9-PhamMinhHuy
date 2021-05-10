import React from 'react';
import { View, Text } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
const Result: React.FC = () => {
    const navigation = useNavigation();
    const route = useRoute();
    const arr1 = route.params.arrSurvey3;
    const arr2 = route.params.arrSurvey2;
    return (
        <View style={{ flex: 1, backgroundColor: 'yellow' }}>
            <Text>Độ tuổi của quý khách:</Text>
            {arr1.map((item: string) => {
                return (
                    <View key={item.toString()}>
                        <Text style={{ color: 'black', fontSize: 16, padding: 10 }}>{item.toString()}</Text>
                    </View>
                )
            })}
            <Text>Quý khách biết Bảo Sơn Paradise qua phương tiện thông tin nào?</Text>
            {arr2.map((item1: string) => {
                return (
                    <View key={item1.toString()}>
                        <Text style={{ color: 'black', fontSize: 16, padding: 10 }}>{item1.toString()}</Text>
                    </View>
                )
            })}
        </View>
    )
}

export default Result;