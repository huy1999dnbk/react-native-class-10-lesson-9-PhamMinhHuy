import React from 'react';
import {View, Text, TextInput} from 'react-native';
import { onChange } from 'react-native-reanimated';
import {orangeColor} from '../App';

type CustomInputProps = {
  label: string;
  placeholder: string;
  onChangeInput: (data: any) => void;
  value: string;
  secureText?: boolean
};

const CustomInput: React.FC<CustomInputProps> = ({
  label,
  placeholder,
  value,
  onChangeInput,
  secureText,
}) => {
  return (
    <View style={{marginVertical: 5,marginBottom:10}}>
      <Text style={{color: orangeColor, fontWeight: 'bold',marginBottom:10}}>{label}</Text>
      <TextInput
        value={value}
        placeholder={placeholder}
        onChangeText={(value) => onChangeInput(value)}
        secureTextEntry={secureText}
        style={{
          borderWidth: 1,
          borderColor: 'black',
          padding: 10,
          borderRadius: 5,
        }}
      />
    </View>
  );
};

export default CustomInput;
