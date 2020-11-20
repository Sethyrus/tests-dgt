import React from 'react';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import { Colors } from '../AppConstants';
import Container from './Container';

interface Props {
  state: any
  descriptors: any
  navigation: any
}

const TabBar = (props: Props) => {
  const focusedOptions = props.descriptors[props.state.routes[props.state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <Container horizontal whiteBg fluid style={{ height: 66, alignItems: 'center', borderTopColor: Colors.Azul + '60', borderTopWidth: 2 }}>
      {props.state.routes.map((route, index) => {
        const { options } = props.descriptors[route.key];

        const TabIcon = options.tabBarIcon;

        const isFocused = props.state.index === index;

        const onPress = () => {
          const event =props. navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            props.navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          props.navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <Container fluid fullWidth key={index}>
            <TouchableNativeFeedback
              containerStyle={{ height: '100%', justifyContent: 'center' }}
              testID={options.tabBarTestID}
              onPress={onPress}
              onLongPress={onLongPress}
            >
              <TabIcon focused={isFocused} color={isFocused ? 'red' : '#00000070'}></TabIcon>
            </TouchableNativeFeedback>
          </Container>
        );
      })}
    </Container>
  );
};

export default TabBar;
