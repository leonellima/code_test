import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TextInput, TouchableOpacity, Picker, Platform} from 'react-native';
import { View, Body, CheckBox } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../../../styles';

const propTypes = {
  task: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    status: PropTypes.string,
  }),
  onAdd: PropTypes.func.isRequired,
  onCancelDelete: PropTypes.func.isRequired,
  onBlur: PropTypes.func.isRequired,
};

const defaultProps = {
  task: {
    title: '',
    description: "",
    status: "0",
  },
};

class AddTask extends Component {
  constructor(props) {
    super(props);
    const { title, description, status } = this.props.task;
    this.state = {
      title,
      description,
      status,
    };
  }

  onSubmit = () => {
    if (this.state.title.length > 0){
      this.props.onAdd(this.state);
    } 
    return null;
  };

  setStateUtil = (property, value = undefined) => {
    this.setState({
      [property]: value,
    });
  };

  render() {
    const { title, status } = this.state;
    const { onBlur } = this.props;
    return (
      <View style={styles.row_add_task}>
        <Picker
          style={styles.picker}
          selectedValue={this.state.status}
          onValueChange={(itemValue, itemIndex) => 
            this.setState({'status': itemValue})
          }>
            <Picker.Item label="Por hacer" value="0" />
            <Picker.Item label="Haciendo" value="1" />
            <Picker.Item label="Hecho" value="2" />
        </Picker>
        <Body style={styles.body_add_task}>
          <TextInput
            style={{ width: '90%' }}
            placeholder="Qué quiere hacer?"
            autoFocus
            underLineColorAndroid="transparent"
            underlineColor="transparent"
            onChangeText={changedTitle => this.setState({'title': changedTitle})}
            value={title}
            autoCorrect={false}
            autoCapitalize="none"
          />
        </Body>
        <TouchableOpacity
          onPress={() => this.onSubmit()}
          style={{ paddingLeft: 25, paddingRight: 15 }}
        >
          <Ionicons
            name={Platform.OS === 'android' ? "md-checkmark": "ios-checkmark"}
            color={`${title.length > 0 ? 'black' : 'grey'}`}
            size={23}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.onCancelDelete()}
          style={{ paddingLeft: 25, paddingRight: 15 }}
        >
          <Ionicons
            name={Platform.OS === 'android' ? "md-close": "ios-close"}
            color={`${title.length > 0 ? 'black' : 'grey'}`}
            size={23}
          />
        </TouchableOpacity>
      </View>
    );
  }
}

AddTask.propTypes = propTypes;
AddTask.defaultProps = defaultProps;

export default AddTask
