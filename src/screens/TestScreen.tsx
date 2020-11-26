import { RouteProp } from '@react-navigation/native'
import { StackNavigationOptions, StackNavigationProp } from '@react-navigation/stack'
import React, { Component } from 'react'
import { Dimensions, StatusBar, StyleSheet, View, Alert, BackHandler } from 'react-native'
import { Colors, FontSizes, HeaderHeight } from '../AppConstants'
import Container from '../components/Container'
import ScreenContainer from '../components/ScreenContainer'
import Text from '../components/Text'
import { RootStackParamList } from '../Navigator'
import Image from 'react-native-image-modal';
import CustomCheckbox from '../components/CustomCheckbox'
import Button from '../components/Button'
import { ScrollView } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux'
import { addAnswer } from '../redux/actions/answersActions';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, 'Test'>;
  route: RouteProp<RootStackParamList, 'Test'>;
  addAnswer: Function;
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

export class _TestScreen extends Component<Props, State> {

  public backHandler: any = null;

  constructor(props) {
    super(props);

    this.state = {
      // corrected: true,
      testIndex: 0,
      answers: [
        'a',
        'a',
        'a',
        'a',
        'a',
        'a',
        'a',
        'a',
        'a',
        'a',
        'a',
        'a',
        'a',
        'a',
        'a',
        'a',
        'a',
        'a',
        'a',
        'a',
        'a',
        'a',
        'a',
        'a',
        'a',
        'a',
        'a',
        'a',
        'a',
        'a',
      ],
    }
  }

  get qs() {
    return this.props.route.params.test.qs[this.state.testIndex];
  }

  componentDidMount = () => {
    const options: Partial<StackNavigationOptions> | any = {};

    if (this.props.route.params.test.name) {
      options.title = this.props.route.params.test.name
    }

    options.params = {
      goBack: this.goBack.bind(this),
    }

    this.props.navigation.setOptions(options)

    this.backHandler = BackHandler.addEventListener('hardwareBackPress', () => this.goBack());
  }

  componentWillUnmount = () => {
    this.backHandler.remove();
  }

  goBack = () => {
    Alert.alert('Confirmar', '¿Quieres salir? Se perderá el progreso del test',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        { text: 'Aceptar', onPress: this.props.navigation.goBack },
      ]);

    // Necesario para evitar el cierre de la app
    return true;
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

      return;
    }

    let answer = {
      id: this.props.route.params.test.id,
      date: Date.now(),
      answers: this.state.answers,
    }

    this.props.addAnswer(answer, () => {
      console.log('The callback');
      this.props.navigation.replace('TestCorrection', {
        test: this.props.route.params.test
      })
    })
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
            <Button containerStyle={{ backgroundColor: Colors.Verde, ...this.testReady() ? null : styles.DisabledButtonStyle }} style={{ paddingHorizontal: 20, paddingVertical: 8 }} title='Corregir' onPress={() => this.correct()} />
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

const TestScreen = connect(null, { addAnswer })(_TestScreen)

export default TestScreen
