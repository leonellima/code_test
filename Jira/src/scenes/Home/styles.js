import { StyleSheet } from 'react-native';
import COLORS from '../../constants/Colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingVertical: 8,
  },

  row: {
    top: 15,
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
  },

  row_add_task: {
  	flex: 1,
  	width: '100%',
  	flexDirection: 'row',
  	alignItems: 'center',
  	paddingRight: 10,
  	paddingBottom: 5,
  	paddingTop: 5
  },

  picker: {
  	flex: 1,
    width: '100%',
    flexDirection: 'row'
  },

  body_add_task: {
  	flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingLeft: 25,
  }
});