import React from 'react';
import {View, Text, Image, Pressable, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faComment,
  faHeart,
  faBookmark,
} from '@fortawesome/free-regular-svg-icons';
import {faEllipsisH} from '@fortawesome/free-solid-svg-icons';

import styles from './styles';
import UserProfileImage from '../UserProfileImage/UserProfileImage';
import globalStyles from '../../assets/styles/globalStyles';

function UserPosts({
  firstName,
  location,
  lastName,
  likes,
  comments,
  bookmarks,
}) {
  return (
    <View style={styles.userPostContainer}>
      <View style={styles.userInformationContainer}>
        <View style={styles.userInformation}>
          <UserProfileImage />
          <View style={styles.userPostInformation}>
            <Text style={styles.name}>
              {firstName} {lastName}
            </Text>
            {location && <Text style={styles.location}>{location}</Text>}
          </View>
        </View>
        <Pressable>
          <FontAwesomeIcon icon={faEllipsisH} color={'#79869F'} size={22} />
        </Pressable>
      </View>
      <View style={styles.post}>
        <Image
          resizeMode="cover"
          source={require('../../assets/Images/default_post.png')}
        />
      </View>
      <View style={styles.userPostStats}>
        <Pressable style={styles.userPostStatsBtn}>
          <FontAwesomeIcon icon={faHeart} style={styles.userPostStatsIcon} />
          <Text style={styles.userPostStatsText}>{likes}</Text>
        </Pressable>
        <Pressable style={styles.userPostStatsBtn}>
          <FontAwesomeIcon icon={faComment} style={styles.userPostStatsIcon} />
          <Text style={styles.userPostStatsText}>{comments}</Text>
        </Pressable>
        <Pressable style={styles.userPostStatsBtn}>
          <FontAwesomeIcon icon={faBookmark} style={styles.userPostStatsIcon} />
          <Text style={styles.userPostStatsText}>{bookmarks}</Text>
        </Pressable>
      </View>
    </View>
  );
}

UserPosts.propType = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  bookmarks: PropTypes.number.isRequired,
  location: PropTypes.string.isRequired,
};

export default UserPosts;
