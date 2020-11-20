import { StackNavigationProp } from '@react-navigation/stack'
import React, { Component } from 'react'
import Button from '../components/Button'
import Container from '../components/Container'
import ScreenContainer from '../components/ScreenContainer'
import { Colors } from '../AppConstants'
import { RootStackParamList } from '../Navigator'

interface Props {
  navigation: StackNavigationProp<RootStackParamList, 'Home'>;
}

interface State {
}

export class HomeScreen extends Component<Props, State> {
  render() {
    return (
      <ScreenContainer>
        <Container>
          <Button style={{ backgroundColor: Colors.primary }} textStyle={{ fontWeight: 'bold' }} title="Tests generales DGT" onPress={() => this.props.navigation.navigate('Tests')}></Button>
        </Container>
      </ScreenContainer>
    )
  }
}

export default HomeScreen
