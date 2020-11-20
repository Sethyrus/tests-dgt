import React from 'react';
import { GestureResponderEvent, StyleSheet, TextStyle, View, ViewStyle } from 'react-native';
import { Colors } from '../AppConstants';
import Text from './Text';
import { TouchableWithoutFeedback } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

interface Props {
  title?: string;
  icon?: JSX.Element;
  containerStyle?: ViewStyle;
  style?: ViewStyle;
  textStyle?: TextStyle;
  onPress: (event: GestureResponderEvent) => void;
}

const styles = StyleSheet.create({
  Container: {
    width: '100%',
    justifyContent: 'center',
    backgroundColor: Colors.Rojo,
  },
  Button: {
    padding: 12,
  },
  Text: {
    color: '#ffffff',
  }
});

const Button = (props: Props) => {
  return (
    <View style={{ ...styles.Container, ...props.containerStyle }}>
      <TouchableWithoutFeedback onPress={props.onPress}>
        <RectButton>
          <View style={{ ...styles.Button, ...props.style }}>
            <Text center style={{ ...styles.Text, ...props.textStyle }}>{props.title}</Text>
            {props.icon}
          </View>
        </RectButton>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Button;
