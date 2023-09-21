import {StyleSheet} from 'react-native';
import {horizontalScale, verticalScale} from '../../assets/styles/scaling';

const styles = StyleSheet.create({
  profileTabPostContainer: {
    //  flex: 1,
    paddingTop: verticalScale(10),
    backgroundColor: 'white',
    //  height: '100$',
  },
  imageContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
  image: {
    maxWidth: horizontalScale(170),
    maxHeight: verticalScale(200),
    marginVertical: verticalScale(10),
  },
});

export default styles;
