import { RouteProp } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { Component } from 'react'
import { Dimensions, StatusBar, StyleSheet } from 'react-native'
import Swiper from 'react-native-swiper'
import { HeaderHeight } from '../AppConstants'
import Container from '../components/Container'
import ScreenContainer from '../components/ScreenContainer'
import Text from '../components/Text'
import { RootStackParamList } from '../Navigator'
import Image from 'react-native-image-modal';

interface Props {
  navigation: StackNavigationProp<RootStackParamList, 'Test'>;
  route: RouteProp<RootStackParamList, 'Test'>;
}

interface State {
  testIndex: number;
  answers: Array<string>;
}

const styles = StyleSheet.create({
  Slide: {
    height: '50%'
  }
})

export class TestScreen extends Component<Props, State> {

  constructor(props) {
    super(props);

    this.state = {
      testIndex: 0,
      answers: [],
    }
  }

  render() {
    return (
      <ScreenContainer>
        <Container fullWidth style={{ paddingHorizontal: 0, height: Dimensions.get('screen').height - HeaderHeight - (StatusBar.currentHeight ? StatusBar.currentHeight : 0) }}>
          <Text h2 center mb10>{this.props.route.params.test.name}</Text>
          <Swiper bounces={true} index={this.state.testIndex} onIndexChanged={i => this.setState({ testIndex: i })} showsButtons={true} scrollEnabled={false} loop={false} containerStyle={styles.Slide}>
            {
              this.props.route.params.test.qs.map((qs, i) => (
                <Container key={i}>
                  {
                    qs.image &&
                    <Image
                      resizeMode="contain"
                      imageBackgroundColor="#000000"
                      style={{
                        width: 250,
                        height: 250,
                      }}
                      source={{
                        uri: qs.image,
                      }}
                    />
                  }
                </Container>
              ))
            }
          </Swiper>
        </Container>
      </ScreenContainer>
    )
  }
}

export default TestScreen
