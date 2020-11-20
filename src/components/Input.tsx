import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import { GeneralFontSize } from '../AppConstants';

interface Props {
  placeholder?: string;
  value?: string;
  onChangeText?: (text: string) => void;
}

const styles = StyleSheet.create({
  Input: {
    backgroundColor: '#ffffff',
    paddingVertical: 8,
    paddingHorizontal: 12,
    fontSize: GeneralFontSize,
  },
});

const Input = (props: Props) => {
  return (
    <TextInput onChangeText={props.onChangeText} value={props.value} style={{ ...styles.Input }} placeholder={props.placeholder}>

    </TextInput>
  );
};

export default Input;
