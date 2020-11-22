import { RouteProp } from '@react-navigation/native'
import { StackNavigationOptions, StackNavigationProp } from '@react-navigation/stack'
import React, { Component, Fragment, useRef } from 'react'
import { Dimensions, StatusBar, StyleSheet, Image as ImageRN, View, Alert } from 'react-native'
import Swiper from 'react-native-swiper'
import { Colors, FontSizes, HeaderHeight } from '../AppConstants'
import Container from '../components/Container'
import ScreenContainer from '../components/ScreenContainer'
import Text from '../components/Text'
import { RootStackParamList } from '../Navigator'
import Image from 'react-native-image-modal';
import Separator from '../components/Separator'
import CustomCheckbox from '../components/CustomCheckbox'
import Button from '../components/Button'
import { ScrollView } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, 'Test'>;
  route: RouteProp<RootStackParamList, 'Test'>;
}

interface State {
  testIndex: number;
  answers: Array<string>;
}

const styles = StyleSheet.create({
  ContentContainerStyle: {
    height: Dimensions.get('screen').height - HeaderHeight - (StatusBar.currentHeight ? StatusBar.currentHeight : 0),
  },
  Slider: {
    flex: 0
  },
  ButtonContainerStyle: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: Colors.Verde,
    margin: 12,
    overflow: 'hidden',
  },
  DisabledButtonStyle: {
    backgroundColor: Colors.gray,
  },
  ButtonStyle: {
    padding: 0,
    width: 48,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ButtonTextStyle: {
    fontSize: FontSizes.md,
  },
})

export class TestScreen extends Component<Props, State> {

  constructor(props) {
    super(props);

    this.state = {
      testIndex: 0,
      answers: [],
    }
  }

  get qs() {
    return this.props.route.params.test.qs[this.state.testIndex];
  }

  componentDidMount = () => {
    const options: Partial<StackNavigationOptions> = {};

    if (this.props.route.params.test.name) {
      options.title = this.props.route.params.test.name
    }

    this.props.navigation.setOptions(options)
  }

  checkOption(i, v) {
    let answers = [...this.state.answers];
    answers[i] = v;
    this.setState({ answers })
  }

  testReady = () => {
    if (this.state.answers.length === this.props.route.params.test.qs.length) {
      return true;
    } else {
      return false;
    }
  }

  correct = () => {
    if (!this.testReady()) {
      Alert.alert('Error', 'No has respondido todas las preguntas',
        [
          { text: 'Aceptar' },
        ], { cancelable: true }
      );
    }


  }

  render() {
    return (
      <ScreenContainer contentContainerStyle={styles.ContentContainerStyle}>
        <ScrollView>
          <Container style={{ paddingBottom: 16 }}>
            <Text h2 center>Pregunta {this.state.testIndex + 1} de {this.props.route.params.test.qs.length}</Text>
          </Container>

          {
            this.qs.image &&
            <Container fluid style={{ paddingBottom: 16 }}>
              <Image
                resizeMode="contain"
                imageBackgroundColor="transparent"
                style={{
                  width: Dimensions.get('screen').width,
                  height: 250,
                }}
                source={{
                  uri: this.qs.image,
                }}
              />
            </Container>
          }

          <Container style={{ padding: 16, paddingTop: 0 }}>
            <Text mb10 center bold>
              {this.qs.title}
            </Text>

            <Container fluid>
              {
                this.qs.a &&
                <CustomCheckbox selectedStyle={{ backgroundColor: Colors.Naranja + '88' }} title={this.qs.a} onPress={() => this.checkOption(this.state.testIndex, 'a')} checked={this.state.answers[this.state.testIndex] === 'a'} />
              }
              {
                this.qs.b &&
                <CustomCheckbox selectedStyle={{ backgroundColor: Colors.Naranja + '88' }} title={this.qs.b} onPress={() => this.checkOption(this.state.testIndex, 'b')} checked={this.state.answers[this.state.testIndex] === 'b'} />
              }
              {
                this.qs.c &&
                <CustomCheckbox selectedStyle={{ backgroundColor: Colors.Naranja + '88' }} title={this.qs.c} onPress={() => this.checkOption(this.state.testIndex, 'c')} checked={this.state.answers[this.state.testIndex] === 'c'} />
              }
            </Container>
          </Container>
        </ScrollView>

        {/* TODO: Al corregir, sustituir este bloque por el acceso rápido a las preguntas */}
        <Container fluid horizontal style={{ justifyContent: 'space-between', alignItems: 'center' }}>
          <Button containerStyle={{ ...styles.ButtonContainerStyle, ...this.state.testIndex === 0 ? styles.DisabledButtonStyle : null }} style={styles.ButtonStyle} icon={
            <Icon
              name='chevron-left'
              color='#ffffff'
              size={26}
              style={{
                height: 48,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            />
          } onPress={() => this.state.testIndex === 0 ? null : this.setState({ testIndex: this.state.testIndex - 1 })} />

          <View>
            <Button containerStyle={{ backgroundColor: Colors.Verde, ...this.testReady() ? null : styles.DisabledButtonStyle }} style={{ paddingHorizontal: 16, paddingVertical: 8 }} title='Corregir' onPress={() => this.correct()} />
          </View>

          <Button containerStyle={{ ...styles.ButtonContainerStyle, ...this.state.testIndex === this.props.route.params.test.qs.length ? styles.DisabledButtonStyle : null }} style={styles.ButtonStyle} icon={
            <Icon
              name='chevron-right'
              color='#ffffff'
              size={26}
              style={{
                height: 48,
                justifyContent: 'center',
                alignItems: 'center'
              }}
            />
          } onPress={() => this.state.testIndex === this.props.route.params.test.qs.length ? null : this.setState({ testIndex: this.state.testIndex + 1 })} />
        </Container>
      </ScreenContainer>
    )
  }
}

export default TestScreen
