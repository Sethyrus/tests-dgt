import { StackNavigationProp } from '@react-navigation/stack'
import React, { Component } from 'react'
import Button from '../components/Button'
import Container from '../components/Container'
import ScreenContainer from '../components/ScreenContainer'
import { Colors, FontSizes } from '../AppConstants'
import { RootStackParamList } from '../Navigator'
import { connect } from 'react-redux'
import { getAnswers } from '../redux/actions/answersActions'

interface Props {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
  getAnswers: Function
}

interface State {
}

export class _HomeScreen extends Component<Props, State> {

  componentDidMount() {
    this.props.getAnswers()
  }

  render() {
    return (
      <ScreenContainer>
        <Container>
          <Button containerStyle={{
            borderBottomColor: "rgb(216, 216, 216)",
            elevation: 6,
            shadowColor: "#000000",
            backgroundColor: '#F7F7F7',
            borderRadius: 100,
            overflow: 'hidden',
          }} style={{
            backgroundColor: Colors.Verde + '10',
            borderRadius: 100,
            borderWidth: 2,
            borderColor: Colors.Verde,
          }} textStyle={{ color: '#000000', fontWeight: 'bold', fontSize: FontSizes.md }} title="Tests generales DGT" onPress={() => this.props.navigation.navigate('Tests')}></Button>
        </Container>
      </ScreenContainer>
    )
  }
}

const HomeScreen = connect(null, { getAnswers })(_HomeScreen)

export default HomeScreen
