import React from 'react';
import { Spinner } from 'native-base';
import { View } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Provider } from 'react-redux';

import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import COLORS from '../constants/Colors';
import Authentication from '../scenes/Authentication';
import Home from '../scenes/Home';
import Reducers from '../reducers';
import { getData } from '../utils/AsyncUtils';

// Navegador base para manejar las transiciones
// Rutas ----> Authentication
//       ----> Home
const TabNavigator = createStackNavigator(
  {
    Authentication: Authentication,
    Home: Home
  },
  {
    headerMode: 'none',
    header: null
  },
);
const AppContainer = createAppContainer(TabNavigator);

// Para mantener el estado de la aplicación centralizado
let store = createStore(Reducers, applyMiddleware(thunk))

class App extends React.Component {

  constructor() {
    super();
    this.state = { hasToken: false, isReady: false };
  }

  async componentDidMount() {
    const token = await getData('token');
    this.setState({ hasToken: token !== null, isReady: true });
  }

  render() {
    if (!this.state.isReady) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Spinner color={COLORS.primary} />
        </View>
      );
    } else {
      return(
        <Provider store={store}>
          <AppContainer />
        </Provider>
      )
    }
  }
}

export default App;
