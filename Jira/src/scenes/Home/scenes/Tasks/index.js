import React from 'react';
import { Spinner } from 'native-base';
import { Alert, Image, Text, TouchableOpacity, View, ScrollView, StyleSheet, FlatList, StatusBar, Platform } from 'react-native';
import { connect } from 'react-redux';

import { getData } from '../../../../utils/AsyncUtils';
import { TaskData } from '../../../../api';
import { addNewTask } from '../../../../actions';
import COLORS from '../../../../constants/Colors';
import AddButton from '../../../../components/AddButton';
import TaskItem from './components/TaskItem';
import AddTask from './components/AddTask';
import styles from '../../styles';


class ResumeScreen extends React.Component {

	constructor(props){
		super(props);
		this.state = {addingTask: false, api: null, isReady: false};
	}

	async componentDidMount() {
		const token = await getData('token');
		const api = new TaskData(token);
    // Almacenar api en el state para
    // poder conectarlo a cada item
		this.setState({ api: api });
    this.setState({ isReady: true });
  }

  onAdd = async (task) => {
    // Petición para enviar registro de nueva tarea a servidor
  	this.setState({ addingTask: false });
    const newTask = await this.state.api.addTask(task);
    // Acción para agregar nueva tarea a lista
    this.props.addNewTask(newTask);
  }

  render() {

  	if (!this.state.isReady) {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Spinner color={COLORS.primary} />
        </View>
      );
    }

    return (
      <View style={{ flex: 1}}>
        <ScrollView>
          <FlatList
			      style={{ width: '100%'}}
			      data={this.props.tasks}
			      keyExtractor={item => item.id.toString()}
			      renderItem={({ item }) => (
			        <TaskItem 
                task={item} 
                onUpdate={this.state.api.updateTask}
                onDelete={this.state.api.destroyTask} />
			      )}/>
			    {this.state.addingTask ? (
            <View style={styles.row}>
              <AddTask
                onAdd={(task) => this.onAdd(task)}
                onCancelDelete={() => this.setState({ addingTask: false })}
                onBlur={() => this.setState({ addingTask: false })}
              />
            </View>
          ) : null}
        </ScrollView>
        <AddButton onPress={() => this.setState({ addingTask: true })} />
      </View>
    );
  }
}


const mapStateToProps = (state) => {
	return { tasks: state.tasks };
}

export default connect(
  mapStateToProps,
  { addNewTask }
)(ResumeScreen);
