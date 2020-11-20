import { DrawerActions } from '@react-navigation/native';
import { StackHeaderProps } from '@react-navigation/stack';
import React from 'react'
import { View, StyleSheet } from 'react-native';
import { TouchableNativeFeedback } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { Colors, HeaderHeight } from '../AppConstants';
import Container from './Container';
import Text from './Text';

const styles = StyleSheet.create({
  OuterContainer: {
    width: '100%',
    backgroundColor: Colors.Verde,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    height: HeaderHeight,
    borderBottomColor: "rgb(216, 216, 216)",
    elevation: 6,
    shadowColor: "#000000",
  },
  TextContainer: {
    flex: 1,
    alignItems: 'center',
  },
  ButtonContainer: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  LeftButton: {
    height: 42,
    width: 42,
    borderRadius: 21,
    position: 'absolute',
    top: 7,
    left: 12,
  },
  RightButton: {
    height: 42,
    width: 42,
    borderRadius: 21,
    position: 'absolute',
    top: 7,
    right: 12,
  }
})

const Header = (props: StackHeaderProps) => (
  <View style={styles.OuterContainer}>
    {
      props.navigation.canGoBack() &&
      <Container fluid style={styles.LeftButton}>
        <TouchableNativeFeedback containerStyle={styles.ButtonContainer} onPress={() => props.navigation.goBack()}>
          <Icon
            name='arrow-left'
            color='#ffffff'
            size={26}
          />
        </TouchableNativeFeedback>
      </Container>
    }

    <View style={styles.TextContainer}>
      {
        props.scene.descriptor.options.title &&
        <Text h3 bold style={{ color: '#ffffff' }}>{props.scene.descriptor.options.title}</Text>
      }
    </View>

    <Container fluid style={styles.RightButton}>
      <TouchableNativeFeedback containerStyle={styles.ButtonContainer} onPress={() => props.navigation.dispatch(DrawerActions.openDrawer())}>
        <Icon
          name='menu'
          color='#ffffff'
          size={26}
        />
      </TouchableNativeFeedback>
    </Container>
  </View>
)

export default Header;