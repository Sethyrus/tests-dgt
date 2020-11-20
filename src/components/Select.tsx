import { Picker } from '@react-native-community/picker';
import React from 'react';
import { StyleSheet, TextStyle, View, ViewStyle } from 'react-native';
import { Colors } from '../AppConstants';

interface Props {
  containerStyle?: ViewStyle;
  style?: TextStyle;
  selectedValue?: string | number;
  items: Array<any>;
  itemsLabelKey: string;
  itemsValueKey: string;
  mode?: 'dialog' | 'dropdown';
  hasError?: boolean;
  onValueChange?: (itemValue: React.ReactText, itemIndex: number) => void;
}

const styles = StyleSheet.create({
  ContainerStyle: {
    borderWidth: 1,
    borderColor: '#ffffff',
  },
  WithError: {
    borderColor: Colors.Rojo + '40',
  },
  Picker: {
    backgroundColor: '#ffffff',
  },
});

const Select = (props: Props) => {
  return (
    <View style={{ ...styles.ContainerStyle, ...props.hasError ? styles.WithError : {}, ...props.containerStyle }}>
      <Picker
        style={{ ...styles.Picker, ...props.style }}
        selectedValue={props.selectedValue}
        onValueChange={props.onValueChange}
        mode={'dialog'}>
        {
          props.items.map((item, i) => {
            return (
              <Picker.Item key={i} label={item[props.itemsLabelKey]} value={item[props.itemsValueKey]}></Picker.Item>
            );
          })
        }
      </Picker>
    </View>
  );
};

export default Select;
