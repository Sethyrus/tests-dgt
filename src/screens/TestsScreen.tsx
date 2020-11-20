import { StackNavigationProp } from '@react-navigation/stack'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Button from '../components/Button'
import Container from '../components/Container'
import ScreenContainer from '../components/ScreenContainer'
import { RootStackParamList } from '../Navigator'

interface Props {
  navigation: StackNavigationProp<RootStackParamList, 'Tests'>;
  tests: Array<any>;
}

interface State {

}

class _TestsScreen extends Component<Props, State> {
  render() {
    return (
      <ScreenContainer>
        <Container>
          {
            this.props.tests.map((t, i) => (
              <Button containerStyle={{ marginBottom: 8 }} key={i} title={t.name} onPress={() => this.props.navigation.navigate('Test', { test: t })}></Button>
            ))
          }
        </Container>
      </ScreenContainer>
    )
  }
}

const mapStateToProps = state => {
  return {
    tests: state.tests,
  };
};

const TestsScreen = connect(mapStateToProps)(_TestsScreen)

export default TestsScreen
