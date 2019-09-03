import React from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
import { Body } from 'native-base';

import { removeItem } from '../../../../utils/AsyncUtils';
import styles from '../../styles';

class SettingsScreen extends React.Component {

	userLogout = async () => {
    await removeItem('token');
    Alert.alert('Logout Success!');
    console.log(this.props);
    console.log(this.props.navigation);
    this.props.navigation.actions.getChildNavigation('Authentication');
  }

  render() {
    return (
      <View
          style={styles.row}>
          <TouchableOpacity
            onPress={() => this.userLogout()}
            style={{
              flex: 1,
              width: '100%',
              flexDirection: 'row',
            }}>
            <Body
              style={styles.body_add_task}>
              	<Text
	                style={{
	                  color: 'black',
	                  textDecorationLine: 'none'
	                }}>
                	Cerrar Sesión
              	</Text>
            </Body>
          </TouchableOpacity>
      </View>
    );
  }
}

export default SettingsScreen;