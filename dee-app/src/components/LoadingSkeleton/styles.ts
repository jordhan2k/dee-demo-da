import {Dimensions, StyleSheet} from 'react-native';
const deviceWidth = Dimensions.get('window').width;
export default StyleSheet.create({
  container: {
    width: '100%',
    flex: 1,
    position: 'relative',
  },
  animatedView: {
    top: 0,
    left: 0,
    height: '100%',
    width: deviceWidth / 2,
    position: 'absolute',
  },
});
