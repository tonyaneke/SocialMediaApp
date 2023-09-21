import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const styles = StyleSheet.create({
  name: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(19),
    color: 'black',
  },
  location: {
    fontFamily: 'Inter',
    fontWeight: '600',
    fontSize: scaleFontSize(12),
    lineHeight: scaleFontSize(15),
    color: '#79869F',
    paddingTop: verticalScale(5),
  },
  userInformation: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userPostInformation: {
    marginLeft: horizontalScale(10),
  },
  userInformationContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  userPostContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#EFF2F6',
  },
  post: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: verticalScale(16),
  },
  userPostStats: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingBottom: verticalScale(30),
    paddingHorizontal: horizontalScale(10),
  },
  userPostStatsBtn: {
    marginRight: horizontalScale(27),
    flexDirection: 'row',
  },
  userPostStatsIcon: {
    marginRight: horizontalScale(3),
    color: '#79869F',
  },
  userPostStatsText: {
    marginRight: horizontalScale(3),
    color: '#79869F',
  },
});

export default styles;
