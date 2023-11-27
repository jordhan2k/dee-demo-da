import {StyleSheet} from 'react-native';
import {Colors} from '../../enums/colors';
import {Fonts} from '../../enums/styles';

export default StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingBottom: 16,
    flex: 1,
    width: '100%',
  },
  itemName: {
    fontFamily: Fonts.SEMI_BOLD,
    fontSize: 20,
    marginVertical: 16,
    color: Colors.NEUTRAL_900,
  },
  price: {
    fontFamily: Fonts.BOLD,
    fontSize: 24,
    color: Colors.PRIMARY_600,
    marginBottom: 16,
  },
  description: {
    fontFamily: Fonts.MEDIUM,
    fontSize: 18,
    color: Colors.NEUTRAL_900,
    marginBottom: 16,
    textDecorationLine: 'underline',
  },
  descriptionText: {
    fontFamily: Fonts.REGULAR,
    fontSize: 16,
    color: Colors.NEUTRAL_800,
    marginBottom: 16,
  },
  image: {
    width: '100%',
    aspectRatio: 1,
    borderRadius: 16,
  },
});
