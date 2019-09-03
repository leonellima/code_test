import { StyleSheet } from 'react-native';
import COLORS from '../../constants/Colors';

export default StyleSheet.create({
  buttonText: {
    fontSize: 20,
    padding: 10,
    textAlign: 'center'
  },
  buttonWrapper: {
		backgroundColor: COLORS.primary,
		marginBottom: 10,
    width: 300
  },
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center'
  },
  form: {
    width: 300
  },
  image: {
    margin: 10
  },
  inputText: {
    marginBottom: 10,
    padding: 10
  },
  title: {
    fontSize: 40,
    margin: 10,
    textAlign: 'center'
  },
});
