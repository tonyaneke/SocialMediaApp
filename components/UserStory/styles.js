import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const styles = StyleSheet.create({
  storyContainer: {
    marginRight: horizontalScale(18),
  },
  name: {
    textAlign: 'center',
    color: 'black',
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: scaleFontSize(14),
    lineHeight: scaleFontSize(17),
    marginTop: verticalScale(8),
  },
});

export default styles;
