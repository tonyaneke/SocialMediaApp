import {StyleSheet} from 'react-native';
import {scaleFontSize} from '../../assets/styles/scaling';

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Inter-black',
    fontWeight: '800',
    fontSize: scaleFontSize(28),
    lineHeight: scaleFontSize(29),
    color: 'black',
  },
});

export default styles;
