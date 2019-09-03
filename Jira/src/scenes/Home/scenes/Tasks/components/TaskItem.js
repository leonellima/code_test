import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, Picker, Platform } from 'react-native';
import PropTypes from 'prop-types';
import { View, CheckBox, Body } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';

import { removeTask, updateTask } from '../../../../../actions';
import styles from '../../../styles';

const propTypes = {
  task: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

class TaskItem extends Component {

  constructor(props){
    super(props);
    this.state = {selectedOption: props.task.status};
  }

  delete = async (task_id) => {
    // Petición para eliminar registro de tarea en servidor
    await this.props.onDelete(task_id.toString());
    // Accion para remover tarea de state
    this.props.removeTask(task_id);
  }

  update = async (task, itemValue) => {
    // Petición para actualizar registro de tarea en servidor
    task.status = itemValue;
    await this.props.onUpdate(task);
    // Accion para actualizar tarea en state
    this.props.updateTask(task);
    this.setState({ selectedOption: itemValue });
  }

  render() {
    const { task } = this.props;

    return (
      <View style={styles.row}>
        <View
          style={{
            flex: 1,
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            paddingRight: 10,
            paddingVertical: 5,
          }}
        >
          <Picker
            style={styles.picker}
            selectedValue={this.state.selectedOption}
            style={{height: 50, width: 100}}
            onValueChange={(itemValue, itemIndex) => 
              this.update(task, itemValue)
            }>
              <Picker.Item label="Por hacer" value="0" />
              <Picker.Item label="Haciendo" value="1" />
              <Picker.Item label="Hecho" value="2" />
          </Picker>
          <Body
            style={styles.body_add_task}>
            <Text
              style={{
                color: 'black',
                textDecorationLine: 'none'
              }}>
              {task.title}
            </Text>
          </Body>

          <TouchableOpacity
            onPress={() => this.delete(task.id)}
            style={{ paddingLeft: 25, paddingRight: 15 }}>
            <Ionicons
              name={Platform.OS === 'android' ? "md-trash": "ios-trash"}
              color="black"
              size={23}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

TaskItem.propTypes = propTypes;


const mapStateToProps = (state) => {
  return { tasks: state.tasks };
}

export default connect(
  mapStateToProps,
  { removeTask, updateTask }
)(TaskItem);

