import React, {Component} from 'react';
import {Alert, Text, TextInput, TouchableOpacity, View} from 'react-native';
import {Actions} from 'react-native-router-flux';

import { storeItem } from '../../utils/AsyncUtils';
import { UserData } from '../../api';
import styles from './styles';

class Authentication extends Component {

  constructor() {
    super();
    this.state = { username: null, password: null };
    this.api = new UserData();
  }

  async userLogin() {
    if (!this.state.username || !this.state.password) return;

    const response = await this.api.getToken(
      this.state.username, this.state.password
    );

    await storeItem('token', response.token);
    this.props.navigation.navigate('Home');
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}> Jira </Text>

        <View style={styles.form}>
          <TextInput
            editable={true}
            onChangeText={(username) => this.setState({username})}
            placeholder='Username'
            ref='username'
            returnKeyType='next'
            style={styles.inputText}
            value={this.state.username}
          />

          <TextInput
            editable={true}
            onChangeText={(password) => this.setState({password})}
            placeholder='Password'
            ref='password'
            returnKeyType='next'
            secureTextEntry={true}
            style={styles.inputText}
            value={this.state.password}
          />

          <TouchableOpacity style={styles.buttonWrapper} onPress={this.userLogin.bind(this)}>
            <Text style={styles.buttonText}> Log In </Text>
          </TouchableOpacity>

        </View>
      </View>
    );
  }
}

export default Authentication;
