import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Image,
} from 'react-native';
import React from 'react';
import globalStyles from '../../assets/styles/globalStyles';
import styles from './styles';
import {ProfileTabNavigation} from '../../navigation/MainNavigation';

export default function Profile() {
  return (
    <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
      <StatusBar backgroundColor={'white'} barStyle={'dark-content'} />
      <ScrollView>
        <View style={styles.profileImageContainer}>
          <View style={styles.profileImageContent}>
            <Image
              style={styles.profileImage}
              source={require('../../assets/Images/hussy1.jpg')}
              resizeMode="contain"
            />
          </View>
        </View>
        <View style={styles.userNameContainer}>
          <Text style={styles.userName}>Husseiena Jafiya</Text>
        </View>
        <View style={styles.profileStatsContainer}>
          <View style={[styles.singleStatsContainer, styles.singleStatsBorder]}>
            <Text style={styles.singleStatsNumber}>45</Text>
            <Text style={styles.singleStatsText}>Following</Text>
          </View>
          <View style={[styles.singleStatsContainer, styles.singleStatsBorder]}>
            <Text style={styles.singleStatsNumber}>30M</Text>
            <Text style={styles.singleStatsText}>Followers</Text>
          </View>
          <View style={styles.singleStatsContainer}>
            <Text style={styles.singleStatsNumber}>100</Text>
            <Text style={styles.singleStatsText}>Posts</Text>
          </View>
        </View>
        <View style={styles.border}></View>
        <View style={{flex: 1, height: '100%'}}>
          <ProfileTabNavigation />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
