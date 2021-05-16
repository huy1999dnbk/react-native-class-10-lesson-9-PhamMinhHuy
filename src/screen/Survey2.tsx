import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { useNavigation, useRoute } from '@react-navigation/native';

const data = [
    '1. Internet',
    '2. Báo chí, tạp chí',
    '3. Gia đình, bạn bè',
    '4. Tivi',
    '5. WEBSITE: www.baosonparadise.vn',
]

const Survey2: React.FC = () => {
    const navigation = useNavigation();
    const route = useRoute();


    const [answers, setAnswers] = useState<Array<String>>([]);
    const handleCheckBox = (arrange: number) => {
        const isChecked = answers.find(item => item === data[arrange])
        if (!isChecked) {
            const array = [...answers, data[arrange]];
            setAnswers(array);
        } else {
            setAnswers(answers => answers.filter(item => item != data[arrange]));
        }
    }
    return (
        <View style={{ flex: 1 }}>
            <Text style={{ textAlign: 'center' }}>Câu 1:</Text>
            <Text>Độ tuổi của quý khách:</Text>
            <View>
                {data.map((item: string, index: number) => {
                    const isChecked = answers.find(item => item === data[index]);
                    return (
                        <View key={index} style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <CheckBox
                                disabled={false}
                                value={!!isChecked}
                                onValueChange={() => handleCheckBox(index)}
                            />
                            <Text>{item}</Text>
                        </View>
                    )
                })}
            </View>
            <View>
                <Button title="Prev" color="yellow" onPress={() => navigation.goBack()} />
                <Button title="Next" disabled={answers.length !== 0 ? false : true} color="green" onPress={() => navigation.navigate('Result', {
                    arrSurvey2: answers,
                    arrSurvey3: route.params.arrSurvey
                })} />
            </View>
        </View>
    )
}

export default Survey2;