import React from 'react';
import {View, Image, ScrollView} from 'react-native';
import styles from './style';

export default function ProfileTabPost() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={styles.profileTabPostContainer}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require('../../assets/Images/hus1.jpg')}
        />
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require('../../assets/Images/hus2.jpg')}
        />
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require('../../assets/Images/hus3.jpg')}
        />
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require('../../assets/Images/hus4.jpg')}
        />
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require('../../assets/Images/hus5.jpg')}
        />
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require('../../assets/Images/hus6.jpg')}
        />
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require('../../assets/Images/hus7.jpg')}
        />
        <Image
          style={styles.image}
          resizeMode="contain"
          source={require('../../assets/Images/hus8.jpg')}
        />
      </View>
    </ScrollView>
  );
}

// contentContainerStyle={{flex: 1}}
