import React from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

interface Props {
  children?: React.ReactNode;
  style?: ViewStyle;
  contentContainerStyle?: ViewStyle;
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: '#F7F7F7',
    // backgroundColor: '#aaaaaa', //debug
    minHeight: '100%',
  },
});

const ScreenContainer = (props: Props) => {
  return (
    <ScrollView style={{ ...styles.Container, ...(props.style ? props.style : {}) }} contentContainerStyle={props.contentContainerStyle ? props.contentContainerStyle : {}}>
      {props.children}
    </ScrollView>
  );
};

export default ScreenContainer;