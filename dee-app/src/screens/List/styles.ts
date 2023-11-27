import {Platform, StyleSheet} from 'react-native';
import {Colors} from '../../enums/colors';
import {Fonts} from '../../enums/styles';

export default StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  skeletonContainer: {
    padding: 16,
    paddingTop: 0,
    flex: 1,
    width: '100%',
  },
  listContainer: {
    paddingHorizontal: 16,
  },
  separator: {
    height: 12,
  },
  inputContainer: {
    flexDirection: 'row',
    marginHorizontal: 16,
    marginBottom: 16,
    paddingHorizontal: 16,
    paddingVertical: Platform.OS === 'ios' ? 16 : 0,
    borderWidth: 1,
    borderColor: Colors.NEUTRAL_300,
    borderRadius: 12,
    alignItems: 'center',
  },
  input: {
    fontFamily: Fonts.REGULAR,
    fontSize: 14,
    flex: 1,
    color: Colors.NEUTRAL_800,
  },
});
