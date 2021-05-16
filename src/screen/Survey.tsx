import React, { useState,useContext } from 'react';
import { View, Text, Button } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';
import { answerContext } from '../../App';

const data = [
    '1. Từ 1 - 30 tuổi',
    '2. Từ 31 - 40 tuổi',
    '3. Từ 41 - 50 tuổi',
    '4. Từ 51 - 60 tuổi',
    '5. Trên 60 tuổi',
]

const Survey: React.FC = () => {
    const navigation = useNavigation();
    const ansContext = useContext(answerContext)
    const [answers, setAnswers] = useState<Array<String>>([]);
    const handleCheckBox = (arrange: number) => {
        const isChecked = answers.find(item => item === data[arrange])
        if (!isChecked) {
            const array = [...answers,data[arrange]];
            setAnswers(array);
        } else {
            setAnswers(answers => answers.filter(item => item != data[arrange]));
        }
    }
    console.log('hello')
    return (
        <View style={{ flex: 1 }}>
            <Text style={{ textAlign: 'center' }}>Câu 1:</Text>
            <Text>Độ tuổi của quý khách:</Text>
            <View>
                {data.map((item:string, index:number) => {
                    const isChecked = answers.find(item => item === data[index]);
                    return (
                        <View key={index} style={{flexDirection:'row', alignItems:'center'}}>
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
                <Button title="Next" disabled={answers.length !== 0 ? false : true} color="green" onPress={() => navigation.navigate('Survey2', {
                    arrSurvey: answers,
                })} />
            </View>
        </View>
    )
}

export default Survey;