import {StyleSheet} from 'react-native';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const styles = StyleSheet.create({
  profileImageContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  profileImageContent: {
    marginTop: verticalScale(32),
    borderWidth: 1,
    borderColor: '#0150EC',
    padding: horizontalScale(2),
    borderRadius: horizontalScale(60),
  },
  profileImage: {
    width: horizontalScale(120),
    height: verticalScale(120),
    borderRadius: horizontalScale(60),
  },
  userNameContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(20),
  },
  userName: {
    color: '#022150',
    fontFamily: 'Inter',
    fontSize: scaleFontSize(20),
    fontWeight: '700',
    lineHeight: scaleFontSize(24),
  },
  profileStatsContainer: {
    marginHorizontal: horizontalScale(24),
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: verticalScale(16),
  },
  singleStatsContainer: {
    alignItems: 'center',
    paddingVertical: verticalScale(10),
    paddingHorizontal: horizontalScale(18),
  },
  singleStatsBorder: {
    borderRightWidth: 1,
    borderColor: '#E9EFF1',
  },
  singleStatsNumber: {
    fontFamily: 'Inter',
    fontWeight: '700',
    fontSize: scaleFontSize(20),
    lineHeight: scaleFontSize(24),
    color: '#022150',
  },
  singleStatsText: {
    marginTop: verticalScale(6),
    fontFamily: 'Inter',
    fontWeight: '400',
    fontSize: scaleFontSize(16),
    lineHeight: scaleFontSize(19),
    color: '#79869F',
  },
  border: {
    borderTopWidth: 1,
    borderColor: '#EFF2F6',
    marginVertical: verticalScale(16),
    marginHorizontal: verticalScale(28),
  },
});

export default styles;
