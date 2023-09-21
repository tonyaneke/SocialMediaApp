import React from 'react';
import {Text} from 'react-native';
import PropTypes from 'prop-types';

import styles from './style';
import globalStyles from './../../assets/styles/globalStyles';

function Title(props) {
  return (
    <Text style={[styles.title, globalStyles.textColor]}>{props.title}</Text>
  );
}

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
