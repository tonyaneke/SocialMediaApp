/* eslint-disable react/no-unstable-nested-components */
import React, {useState, useEffect} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  Text,
  Pressable,
  FlatList,
  Dimensions,
  Platform,
  Switch,
  StatusBar,
} from 'react-native';
import Title from '../../components/Title/Title.jsx';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faEnvelope} from '@fortawesome/free-regular-svg-icons';
import UserStory from '../../components/UserStory/UserStory.jsx';
import UserPosts from '../../components/UserPosts/UserPosts.jsx';
import {NavigationContainer} from '@react-navigation/native';

import styles from './styles.js';
import globalStyles from './../../assets/styles/globalStyles';
import Routes from '../../navigation/Routes.js';

const data = [
  {
    firstName: 'Tony',
    id: 1,
  },
  {
    firstName: 'Angel',
    id: 2,
  },
  {
    firstName: 'White',
    id: 3,
  },
  {
    firstName: 'Olivier',
    id: 4,
  },
  {
    firstName: 'Nata',
    id: 5,
  },
  {
    firstName: 'Favour',
    id: 6,
  },
  {
    firstName: 'Hussy',
    id: 7,
  },
  {
    firstName: 'Paul',
    id: 8,
  },
  {
    firstName: 'Chioma',
    id: 9,
  },
];
const posts = [
  {
    firstName: 'Alison',
    lastName: 'Becker',
    location: 'Leeds, England',
    likes: 1201,
    comments: 24,
    bookmarks: 55,
    id: 1,
  },
  {
    firstName: 'Husseina',
    lastName: 'Jafiya',
    location: 'Manchester, England',
    likes: 121,
    comments: 24,
    bookmarks: 550,
    id: 2,
  },
  {
    firstName: 'Paul',
    lastName: 'Blade',
    location: 'Ikeja, Lagos',
    likes: 142,
    comments: 234,
    bookmarks: 342,
    id: 3,
  },
  {
    firstName: 'Chioma',
    lastName: 'Bliss',
    location: 'Manchester, England',
    likes: 1532,
    comments: 54,
    bookmarks: 989,
    id: 4,
  },
  {
    firstName: 'Tony',
    lastName: 'Aneke',
    location: 'New York, England',
    likes: 21,
    comments: 204,
    bookmarks: 5150,
    id: 5,
  },
  {
    firstName: 'Collins',
    lastName: 'Obinna',
    location: 'FCT, Nigeria',
    likes: 133,
    comments: 2442,
    bookmarks: 4244,
    id: 6,
  },
];

export default function Home({navigation}) {
  const pageSize = 4;
  const pageSizePost = 2;
  // const storyData = data.slice(0, pageSize);

  const [pageNumber, setPageNumber] = useState(1);
  const [postPageNumber, setPostPageNumber] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingPost, setIsLoadingPost] = useState(false);
  const [renderedData, setRenderedData] = useState(data.slice(0, pageSize));
  const [renderedDataPost, setRenderedDataPost] = useState(
    posts.slice(0, pageSizePost),
  );
  // const [isOn, setIsOn] = useState(false);

  const [screenData, setScreenData] = useState(Dimensions.get('screen'));
  useEffect(() => {
    Dimensions.addEventListener('change', result => {
      console.log('changed screen data:', result.screen);
      setScreenData(result.screen);
    });
  }, []);

  // All Items in our stories
  const handlePagination = (data, pageNumber, pageSize, posts = false) => {
    let startIndex = (pageNumber - 1) * pageSize;
    if (startIndex >= data.length) {
      return [];
    }

    if (!posts) {
      setPageNumber(pageNumber);
    } else {
      setPostPageNumber(pageNumber);
    }
    return data.slice(startIndex, startIndex + pageSize);
  };

  return (
    <SafeAreaView style={globalStyles.backgroundWhite}>
      <StatusBar backgroundColor={'black'} barStyle={'light-content'} />
      <FlatList
        ListHeaderComponent={
          <>
            <View style={styles.header}>
              <Title title="Let's Explore" />
              {/* <Switch
                 value={isOn}
                 onValueChange={value => {
                   setIsOn(value);
                 }}
                 style={[
                   Platform.OS === 'android' && {
                     transform: [{scaleX: 1.2}],
                     scaleY: 1.2,
                   },
                 ]}
                 trackColor={
                   Platform.OS === 'android' && {false: 'grey', true: 'black'}
                 }
               /> */}
              <Pressable style={styles.messageIcon}>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  color={'#CACDDE'}
                  size={23}
                />
                <View style={styles.messageNumberContainer}>
                  <Text
                    style={[
                      styles.messageNumber,
                      {fontSize: screenData.height / 120},
                    ]}>
                    2
                  </Text>
                </View>
              </Pressable>
            </View>

            <View style={styles.userStoryContainer}>
              <FlatList
                onMomentumScrollBegin={() => setIsLoadingPost(false)}
                onEndReachedThreshold={0.5}
                keyExtractor={item => item.id.toString()}
                onEndReached={() => {
                  if (!isLoading) {
                    setIsLoading(true);
                    setRenderedData(prev => [
                      ...prev,
                      ...handlePagination(data, pageNumber + 1, pageSize),
                    ]);
                    setIsLoading(false);
                  }
                }}
                data={renderedData}
                renderItem={({item}) => (
                  <UserStory firstName={item.firstName} />
                )}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          </>
        }
        onMomentumScrollBegin={() => setIsLoadingPost(false)}
        onEndReachedThreshold={0.5}
        keyExtractor={item => item.id.toString() + 'post'}
        onEndReached={() => {
          if (!isLoadingPost) {
            setIsLoadingPost(true);
            setRenderedDataPost(prev => [
              ...prev,
              ...handlePagination(
                posts,
                postPageNumber + 1,
                pageSizePost,
                true,
              ),
            ]);
            setIsLoadingPost(false);
          }
        }}
        showsVerticalScrollIndicator={false}
        data={renderedDataPost}
        renderItem={({item}) => (
          <View style={styles.userPostContainer}>
            <UserPosts
              firstName={item.firstName}
              lastName={item.lastName}
              comments={item.comments}
              likes={item.likes}
              bookmarks={item.bookmarks}
              location={item.location}
            />
          </View>
        )}
      />
    </SafeAreaView>
  );
}
