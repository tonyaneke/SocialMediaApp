/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import PropTypes from 'prop-types';
import styles from './style';

export default function ProfileTabTitle({title, isFocused}) {
  return (
    <Text
      style={[
        styles.title,
        {
          color: isFocused ? '#022150' : '#79869F',
          fontWeight: isFocused ? '600' : '400',
        },
      ]}>
      {title}
    </Text>
  );
}

ProfileTabTitle.propTypes = {
  isFocused: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
};
