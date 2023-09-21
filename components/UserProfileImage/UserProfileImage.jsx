import React from 'react';
import {View, Image} from 'react-native';

import styles from './styles';

function UserProfileImage() {
  return (
    <View style={styles.userImageContainer}>
      {/* <Image source={require('../../assets/Images/defaultImg.png')} /> */}
      <Image source={require('../../assets/Images/defaultImg.png')} />
    </View>
  );
}
export default UserProfileImage;
