import React from 'react';
import { View, Text, GestureResponderEvent, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Container from './Container';
import { TouchableWithoutFeedback } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';

interface Props {
  onPress?: (event: GestureResponderEvent) => void
  style?: ViewStyle
  checked?: boolean
  title?: string
}

// Checkbox personalizado con mejor rendimiento que el nativo
const CustomCheckbox = (props: Props) => {
  return (
    <TouchableWithoutFeedback onPress={props.onPress} style={{ width: '100%' }}>
      <RectButton style={{ backgroundColor: '#ffffff', flexGrow: 1, marginBottom: 2 }}>
        <Container horizontal style={{ justifyContent: 'flex-start', paddingVertical: 8, ...props.style }}>
          <View style={{
            marginRight: 12,
          }}>
            <Icon
              name='check'
              size={20}
              color={props.checked ? '#000000' : '#eeeeee'}
            />
          </View>
          <Text>{props.title}</Text>
        </Container>
      </RectButton>
    </TouchableWithoutFeedback>
  );
};

export default CustomCheckbox;
