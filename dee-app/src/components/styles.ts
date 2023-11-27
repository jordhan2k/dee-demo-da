import {StyleSheet} from 'react-native';
import {Colors} from '../enums/colors';
import {Fonts} from '../enums/styles';

export const commonStyles = StyleSheet.create({
  flexView: {
    flex: 1,
  },
  heading: {
    fontFamily: Fonts.SEMI_BOLD,
    fontSize: 20,
    padding: 16,
    color: Colors.NEUTRAL_800,
  },
  coverView: {
    flex: 1,
    width: '100%',
  },
  fullWidth: {
    width: '100%',
  },
  errorImage: {
    width: 160,
    height: 160,
    marginBottom: 16,
  },
  errorHeading: {
    fontFamily: Fonts.MEDIUM,
    fontSize: 18,
    color: Colors.NEUTRAL_800,
  },
  centerContent: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconRegular: {
    width: 24,
    height: 24,
  },
  appBar: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
