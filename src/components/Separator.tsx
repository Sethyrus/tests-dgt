import React from 'react';
import { StyleSheet, View, ViewStyle } from 'react-native';

interface Props {
  style?: ViewStyle;
  // Sin margen vertical
  fluid?: boolean;
  // Se extiende todo el ancho posible
  fullWidth?: boolean;
  // Fondo azul
  blue?: boolean;
  // Solo añade un espaciado, sin línea horizontal
  onlySpacer?: boolean;
}

const styles = StyleSheet.create({
  Fluid: {
    marginVertical: 0,
  },
  FullWidth: {
    marginHorizontal: '0%',
    width: '100%',
  },
  Blue: {
    backgroundColor: '#6AD4FF60',
  },
  OnlySpacer: {
    backgroundColor: 'transparent',
    marginVertical: 0,
    height: 10,
  },
});

const Separator = (props: Props) => {
  return (
    <View style={{
      height: 2,
      flex: 1,
      marginVertical: 12,
      marginHorizontal: '7.5%',
      width: '85%',
      backgroundColor: '#000000',
      ...(props.fluid ? styles.Fluid : {}),
      ...(props.fullWidth ? styles.FullWidth : {}),
      ...(props.blue ? styles.Blue : {}),
      ...(props.onlySpacer ? styles.OnlySpacer : {}),
      ...(props.style ? props.style : {}),
    }}></View>
  );
};

export default Separator;
