import React, { Component } from 'react';
import { Spinner } from 'native-base';
import { Alert, Image, Text, TouchableOpacity, View, ScrollView, StyleSheet, FlatList, StatusBar, Platform } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';

import Header from '../../components/Header';
import COLORS from '../../constants/Colors';
import { getTasksFromAPI } from '../../actions';
import { getData, removeItem } from '../../utils/AsyncUtils';
import { TaskData } from '../../api';
import TabNavigator from './navigation/TabNavigator';
import styles from './styles';

class Home extends Component {

  state = { isReady: false };

  async componentDidMount(){
    // --- Obtener lista de tareas  
    const token = await getData('token');
    const api = new TaskData(token);
    // Accion para solicitar lista a servidor
		this.props.getTasksFromAPI(api);
    this.setState({ isReady: true });
	}

  userLogout = async () => {
    await removeItem('token');
    Alert.alert('Logout Success!');
    this.props.navigation.actions.getChildNavigation('Authentication');
  }

  renderStatusBar = () => {
    const isAndroid = Platform.OS === 'android';
    return isAndroid ? (
      <StatusBar backgroundColor={COLORS.primary} barStyle="light-content" />
    ) : (
      <StatusBar backgroundColor={COLORS.primary} barStyle="dark-content" />
    );
  } 

  render() {
    if (!this.state.isReady) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          {this.renderStatusBar()}
          <Spinner color={COLORS.primary} />
        </View>
      );
    }

    return (
      <View style={{ flex: 1 }}>
        <Header />
        {this.renderStatusBar()}
        <TabNavigator />
      </View>
    );

  }
}

// Registro dinamico de state en las props
const mapStateToProps = (state) => {
	return { tasks: state.tasks };
}

export default connect(
	mapStateToProps,
	{ getTasksFromAPI }
)(Home);
