import {View, Text, Image} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles';
import UserProfileImage from '../UserProfileImage/UserProfileImage';
import globalStyles from '../../assets/styles/globalStyles';

function UserStory({firstName}) {
  return (
    <View style={styles.storyContainer}>
      <UserProfileImage />
      <Text style={styles.name}>{firstName}</Text>
    </View>
  );
}

UserStory.propTypes = {
  firstName: PropTypes.string.isRequired,
};

export default UserStory;
