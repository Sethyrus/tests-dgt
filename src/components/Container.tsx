import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';

interface Props {
  children?: React.ReactNode;
  style?: ViewStyle;
  // Sin padding
  fluid?: boolean;
  // Se disponen los elementos horizontalmente
  horizontal?: boolean;
  // Fondo blanco
  whiteBg?: boolean;
  // Se extiende a lo ancho todo lo posible
  fullWidth?: boolean;
}

const styles = StyleSheet.create({
  Container: {
    padding: 12,
  },
  Fluid: {
    padding: 0,
  },
  Horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  WhiteBG: {
    backgroundColor: '#ffffff',
  },
  FullWidth: {
    flex: 1,
  },
});

const Container = (props: Props) => {
  const getStyleConfiguration = () => {
    let newStyles = {
      ...styles.Container,
      ...(props.fluid ? styles.Fluid : {}),
      ...(props.horizontal ? styles.Horizontal : {}),
      ...(props.whiteBg ? styles.WhiteBG : {}),
      ...(props.fullWidth ? styles.FullWidth : {}),
      ...(props.style ? props.style : {}),
    };

    return newStyles;
  };

  return (
    <View style={getStyleConfiguration()}>
      {props.children}
    </View>
  );
};

export default Container;
