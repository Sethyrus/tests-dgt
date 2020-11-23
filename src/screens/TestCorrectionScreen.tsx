import { RouteProp } from '@react-navigation/native'
import { StackNavigationOptions, StackNavigationProp } from '@react-navigation/stack'
import React, { Component, Fragment, useRef } from 'react'
import { Dimensions, StatusBar, StyleSheet, Image as ImageRN, View, Alert, BackHandler } from 'react-native'
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
import { ScrollView, TouchableNativeFeedback } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux'

interface Props {
  navigation: StackNavigationProp<RootStackParamList, 'Test'>;
  route: RouteProp<RootStackParamList, 'Test'>;
  answers: Array<any>;
}

interface State {
  testIndex: number;
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

export class _TestCorrectionScreen extends Component<Props, State> {

  constructor(props) {
    super(props);

    this.state = {
      testIndex: 0,
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

  isCorrect = (i: number): boolean => {
    if (this.props.answers[i] === this.props.route.params.test.qs[i].correct) {
      return true;
    } else {
      return false;
    }
  }

  qsQuickList = (): JSX.Element => {
    let qsBlock: any = [];
    let parsedQs: any = [];

    this.props.route.params.test.qs.forEach((qs, i) => {
      qsBlock.push(qs);

      if ((i + 1) % 10 === 0) {
        parsedQs.push(qsBlock);
        qsBlock = [];
      }
    });

    let blockSide = Math.floor(((Dimensions.get('window').width - 4) / 10) - 4);

    return (
      <Container style={{ justifyContent: 'space-between', alignItems: 'center', padding: 2 }}>
        {
          parsedQs.map((qsB, i) => (
            <Container key={i} fluid horizontal style={{ width: '100%' }}>
              {
                qsB.map((qs, e) => (
                  <View key={e} style={{ margin: 2, width: blockSide, height: blockSide * 0.75 }}>
                    <TouchableNativeFeedback style={{ height: '100%', width: '100%', backgroundColor: this.isCorrect(i * 10 + e) ? Colors.Verde : Colors.Rojo }} onPress={() => this.setState({ testIndex: i * 10 + e })} />
                  </View>
                ))
              }
            </Container>
          ))
        }
      </Container>
    )
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
                <Text>
                  {this.qs.a}
                </Text>
              }
              {
                this.qs.b &&
                <Text>
                  {this.qs.b}
                </Text>
              }
              {
                this.qs.c &&
                <Text>
                  {this.qs.c}
                </Text>
              }
            </Container>
          </Container>
        </ScrollView>

        {
          this.qsQuickList()
        }
      </ScreenContainer>
    )
  }
}

const mapStateToProps = state => {
  return {
    answers: state.answers,
  };
};

const TestCorrectionScreen = connect(mapStateToProps)(_TestCorrectionScreen)

export default TestCorrectionScreen
