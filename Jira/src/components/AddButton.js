import React from 'react';
import PropTypes from 'prop-types';
import { Platform } from 'react-native';
import { Fab } from 'native-base';
import COLORS from '../constants/Colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

const propTypes = {
  onPress: PropTypes.func.isRequired,
};

const AddButton = ({ onPress }) => (

  <Fab
    direction="up"
    containerStyle={{}}
    style={{ backgroundColor: COLORS.primary }}
    position="bottomRight"
    onPress={onPress}>
      <Ionicons name={Platform.OS === 'android' ? "md-add": "ios-add"} />
  </Fab>
);

AddButton.propTypes = propTypes;

export default AddButton;
