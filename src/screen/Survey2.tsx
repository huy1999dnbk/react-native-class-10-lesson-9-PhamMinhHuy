import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { useNavigation,useRoute } from '@react-navigation/native';



const Survey2: React.FC = () => {
    const navigation = useNavigation();
    const route = useRoute();

    const data = [
        '1. Internet',
        '2. Báo chí, tạp chí',
        '3. Gia đình, bạn bè',
        '4. Tivi',
        '5. WEBSITE: www.baosonparadise.vn',
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
            <Text>Quý khách biết Bảo Sơn Paradise qua phương tiện thông tin nào?</Text>
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
                <Button title="Next" disabled={resArr.length !== 0 ? false : true} color="green" onPress={() => {
                    navigation.navigate('Result', {
                        arrSurvey2: resArr,
                        arrSurvey3: route.params.arrSurvey
                    })
                }
                }/>
            </View>
        </View>
    )
}

export default Survey2;