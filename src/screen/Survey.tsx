import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { useNavigation } from '@react-navigation/native';



const Survey: React.FC = () => {
    const navigation = useNavigation();
    const data = [
        '1. Từ 1 - 30 tuổi',
        '2. Từ 31 - 40 tuổi',
        '3. Từ 41 - 50 tuổi',
        '4. Từ 51 - 60 tuổi',
        '5. Trên 60 tuổi',
    ]
    const [resArr, setResArr] = useState<Array<String>>([]);
    const [toggleCheckBox1, setToggleCheckBox1] = useState(false)
    const [toggleCheckBox2, setToggleCheckBox2] = useState(false)
    const [toggleCheckBox3, setToggleCheckBox3] = useState(false)
    const [toggleCheckBox4, setToggleCheckBox4] = useState(false)
    const [toggleCheckBox5, setToggleCheckBox5] = useState(false)
    const handleCheckBox = (checkInfo: boolean, arrange: number) => {
        if (checkInfo) {
            resArr.push(data[arrange])
            setResArr(resArr);
        } else {
            setResArr(resArr => resArr.filter(item => item != data[arrange]));
        }
    }
    return (
        <View style={{ flex: 1 }}>
            <Text style={{ textAlign: 'center' }}>Câu 1:</Text>
            <Text>Độ tuổi của quý khách:</Text>
            <View>
                <CheckBox
                    disabled={false}
                    value={toggleCheckBox1}
                    onValueChange={(newValue) => {
                        handleCheckBox(newValue, 0)
                        setToggleCheckBox1(newValue)
                    }}
                />
                <Text>{data[0]}</Text>
                <CheckBox
                    disabled={false}
                    value={toggleCheckBox2}
                    onValueChange={(newValue) => {
                        handleCheckBox(newValue, 1)
                        setToggleCheckBox2(newValue)
                    }}
                />
                <Text>{data[1]}</Text>
                <CheckBox
                    disabled={false}
                    value={toggleCheckBox3}
                    onValueChange={(newValue) => {
                        handleCheckBox(newValue, 2)
                        setToggleCheckBox3(newValue)
                    }}
                />
                <Text>{data[2]}</Text>
                <CheckBox
                    disabled={false}
                    value={toggleCheckBox4}
                    onValueChange={(newValue) => {
                        handleCheckBox(newValue, 3)
                        setToggleCheckBox4(newValue)
                    }}
                />
                <Text>{data[3]}</Text>
                <CheckBox
                    disabled={false}
                    value={toggleCheckBox5}
                    onValueChange={(newValue) => {
                        handleCheckBox(newValue, 4)
                        setToggleCheckBox5(newValue)
                    }}
                />
                <Text>{data[4]}</Text>
            </View>
            <View>
                <Button title="Prev" color="yellow" onPress={() => navigation.goBack()} />
                <Button title="Next" disabled={resArr.length !== 0 ? false : true} color="green" onPress={() => navigation.navigate('Survey2', {
                    arrSurvey: resArr,
                })} />
            </View>
        </View>
    )
}

export default Survey;