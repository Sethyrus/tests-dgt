import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { Component, Fragment, useRef } from 'react'
import { Dimensions, StatusBar, StyleSheet, Image as ImageRN, View } from 'react-native'
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

  swiperRef: any = React.createRef();

  constructor(props) {
    super(props);

    this.state = {
      testIndex: 0,
      answers: [],
    }
  }

  checkOption(i, v) {
    let answers = [...this.state.answers];
    answers[i] = v;
    this.setState({ answers })
  }

  render() {
    return (
      <ScreenContainer contentContainerStyle={styles.ContentContainerStyle}>
        <ScrollView>
          <Container>
            <Text h2 center>{this.props.route.params.test.name}</Text>
          </Container>

          <Swiper ref={this.swiperRef} index={this.state.testIndex} onIndexChanged={i => this.setState({ testIndex: i })} showsButtons={false} showsPagination={false} scrollEnabled={false} loop={false} containerStyle={styles.Slider}>
            {
              this.props.route.params.test.qs.map((qs, i) => (
                <Fragment key={i}>
                  {
                    qs.image &&
                    <Container style={{ paddingHorizontal: 0 }}>
                      <Image
                        resizeMode="contain"
                        imageBackgroundColor="transparent"
                        style={{
                          width: Dimensions.get('screen').width,
                          height: 250,
                        }}
                        source={{
                          uri: qs.image,
                        }}
                      />
                    </Container>
                  }

                  <Container>
                    <Text mb10>
                      {qs.title}
                    </Text>

                    <Container fluid>
                      {
                        qs.a &&
                        <CustomCheckbox title={qs.a} onPress={() => this.checkOption(i, 'a')} checked={this.state.answers[i] === 'a'} />
                      }
                      {
                        qs.b &&
                        <CustomCheckbox title={qs.b} onPress={() => this.checkOption(i, 'b')} checked={this.state.answers[i] === 'b'} />
                      }
                      {
                        qs.c &&
                        <CustomCheckbox title={qs.c} onPress={() => this.checkOption(i, 'c')} checked={this.state.answers[i] === 'c'} />
                      }
                    </Container>
                  </Container>
                </Fragment>
              ))
            }
          </Swiper>
        </ScrollView>

        <Container fluid horizontal style={{ justifyContent: 'space-between' }}>
          {
            this.state.testIndex !== 0 &&
            <Button containerStyle={styles.ButtonContainerStyle} style={styles.ButtonStyle} icon={
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
            } onPress={() => this.swiperRef.current.scrollBy(-1, true)} />
          }

          <View>{/* Spacer */}</View>

          {
            this.state.testIndex < this.props.route.params.test.qs.length &&
            <Button containerStyle={styles.ButtonContainerStyle} style={styles.ButtonStyle} icon={
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
            } onPress={() => this.swiperRef.current.scrollBy(1, true)} />
          }
        </Container>
      </ScreenContainer>
    )
  }
}

export default TestScreen
