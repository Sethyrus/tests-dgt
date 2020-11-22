import React from 'react';
import { View, Text, GestureResponderEvent, ViewStyle } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Container from './Container';
import { TouchableWithoutFeedback } from 'react-native';
import { RectButton } from 'react-native-gesture-handler';
import { Colors } from '../AppConstants';

interface Props {
  onPress?: (event: GestureResponderEvent) => void
  style?: ViewStyle
  checked?: boolean
  title?: string
  selectedStyle?: ViewStyle
}

// Checkbox personalizado con mejor rendimiento que el nativo
const CustomCheckbox = (props: Props) => {
  return (
    <View style={{ backgroundColor: props.checked ? Colors.Verde + '88' : 'transparent', marginBottom: 4, ...props.checked ? props.selectedStyle : null }}>
      <TouchableWithoutFeedback onPress={props.onPress} style={{ width: '100%' }}>
        <RectButton style={{ flexGrow: 1 }}>
          <Container horizontal style={{ justifyContent: 'flex-start', alignItems: 'center', paddingVertical: 8, ...props.style }}>
            {/* <View style={{
            height: 16,
            width: 16,
            marginRight: 12,
            borderRadius: 8,
            backgroundColor: props.checked ? Colors.Verde : '#eeeeee'
          }}>

          </View> */}
            <Text>{props.title}</Text>
          </Container>
        </RectButton>
      </TouchableWithoutFeedback>
    </View>
  );
};

// Checkbox personalizado con mejor rendimiento que el nativo
// const CustomCheckbox = (props: Props) => {
//   return (
//     <TouchableWithoutFeedback onPress={props.onPress} style={{ width: '100%' }}>
//       <RectButton style={{ backgroundColor: '#ffffff', flexGrow: 1, marginBottom: 2 }}>
//         <Container horizontal style={{ justifyContent: 'flex-start', paddingVertical: 8, ...props.style }}>
//           <View style={{
//             marginRight: 12,
//           }}>
//             <Icon
//               name='check'
//               size={20}
//               color={props.checked ? '#000000' : '#eeeeee'}
//             />
//           </View>
//           <Text>{props.title}</Text>
//         </Container>
//       </RectButton>
//     </TouchableWithoutFeedback>
//   );
// };

export default CustomCheckbox;
