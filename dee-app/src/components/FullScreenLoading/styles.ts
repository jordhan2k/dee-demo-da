import {Dimensions, StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    width: '100%',
    height: Dimensions.get('window').height,
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    position: 'absolute',
  },
});
