import 'react-native-gesture-handler';
import React from 'react';
import Navigator from './Navigator';
import { Provider } from 'react-redux';
import reduxStore from './redux';

const App = () => {
  return (
    <Provider store={reduxStore}>
      <Navigator />
    </Provider>
  );
};

export default App;
