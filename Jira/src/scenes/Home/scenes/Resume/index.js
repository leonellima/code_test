import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardTitle, CardContent } from 'react-native-cards';

import COLORS from '../../../../constants/Colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    fontSize: 50,
    fontWeight: 'bold'
  },
});

class ResumeScreen extends React.Component {

  render() {
  	const tasks_by_do = this.props.tasks.filter(task => task.status == "0").length;
  	const tasks_doing = this.props.tasks.filter(task => task.status == "1").length;
  	const tasks_completed = this.props.tasks.filter(task => task.status == "2").length;
    return (
    	<ScrollView >
    		<Card isDark="true" style={{ backgroundColor: COLORS.secondary }}>
    			<CardTitle subtitle="Tareas por hacer"/>
			    <CardContent text={tasks_by_do} />
        </Card>
        <Card isDark="true" style={{ backgroundColor: COLORS.secondary }}>
    			<CardTitle subtitle="Tareas en proceso"/>
			    <CardContent text={tasks_doing} />
        </Card>
        <Card isDark="true" style={{ backgroundColor: COLORS.secondary }}>
    			<CardTitle subtitle="Tareas completadas"/>
			    <CardContent text={tasks_completed} />
        </Card>
    	</ScrollView>
    );
  }
}


const mapStateToProps = (state) => {
	return { tasks: state.tasks };
}

export default connect(mapStateToProps)(ResumeScreen);
