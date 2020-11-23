import { StackNavigationProp } from '@react-navigation/stack'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Colors } from '../AppConstants'
import Button from '../components/Button'
import Container from '../components/Container'
import ScreenContainer from '../components/ScreenContainer'
import { RootStackParamList } from '../Navigator'

interface Props {
  navigation: StackNavigationProp<RootStackParamList, 'Tests'>;
  tests: Array<any>;
  answers: Array<any>;
}

interface State {

}

class _TestsScreen extends Component<Props, State> {

  testComplete = (id): boolean => {
    let complete = false;

    if (this.props.answers.find(ans => ans.id === id)) {
      complete = true;
    }

    return complete
  }

  render() {
    return (
      <ScreenContainer>
        <Container>
          {
            this.props.tests.map((t, i) => (
              <Button containerStyle={{ marginBottom: 8, backgroundColor: this.testComplete(t.id) ? Colors.gray : Colors.Verde }} key={i} title={t.name} onPress={() => this.props.navigation.navigate(this.testComplete(t.id) ? 'TestCorrection' : 'Test', { test: t })}></Button>
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
    answers: state.answers,
  };
};

const TestsScreen = connect(mapStateToProps)(_TestsScreen)

export default TestsScreen
