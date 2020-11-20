import React from 'react';
import { StyleSheet, TextStyle, Text as _Text } from 'react-native';
import { FontSizes } from '../AppConstants';

interface Props {
  children?: React.ReactNode;
  style?: TextStyle;
  bold?: boolean;
  center?: boolean;
  oneLine?: boolean;
  small?: boolean;
  h3?: boolean;
  h2?: boolean;
  h1?: boolean;
  mb10?: boolean;
  mb20?: boolean;
  mb30?: boolean;
  mb40?: boolean;
  mb50?: boolean;
}

const styles = StyleSheet.create({
  Text: {
    fontSize: FontSizes.std,
  },
  Bold: {
    fontWeight: 'bold',
  },
  Center: {
    textAlign: 'center',
  },
  Small: {
    fontSize: FontSizes.sm,
  },
  H3: {
    fontSize: FontSizes.md,
  },
  H2: {
    fontSize: FontSizes.bg,
  },
  H1: {
    fontSize: FontSizes.xbg,
  },
  MB10: {
    marginBottom: 10,
  },
  MB20: {
    marginBottom: 20,
  },
  MB30: {
    marginBottom: 30,
  },
  MB40: {
    marginBottom: 40,
  },
  MB50: {
    marginBottom: 50,
  },
});

const Text = (props: Props) => {
  const getStyleConfiguration = () => {
    let newStyles = {
      ...styles.Text,
      ...(props.bold ? styles.Bold : {}),
      ...(props.center ? styles.Center : {}),
      ...(props.small ? styles.Small : {}),
      ...(props.h3 ? styles.H3 : {}),
      ...(props.h2 ? styles.H2 : {}),
      ...(props.h1 ? styles.H1 : {}),
      ...(props.mb10 ? styles.MB10 : {}),
      ...(props.mb20 ? styles.MB20 : {}),
      ...(props.mb30 ? styles.MB30 : {}),
      ...(props.mb40 ? styles.MB40 : {}),
      ...(props.mb50 ? styles.MB50 : {}),
      ...(props.style ? props.style : {}),
    };

    return newStyles;
  };

  return (
    <_Text numberOfLines={props.oneLine ? 1 : undefined} style={getStyleConfiguration()}>
      {props.children}
    </_Text>
  );
};

export default Text;
