import {StyleSheet} from 'react-native';
import {Colors} from '../../enums/colors';
import {Fonts} from '../../enums/styles';

export default StyleSheet.create({
  container: {
    padding: 12,
    flexDirection: 'row',
    width: '100%',
    borderWidth: 1,
    borderColor: Colors.NEUTRAL_300,
    marginBottom: 12,
    borderRadius: 16,
  },
  itemName: {
    fontFamily: Fonts.MEDIUM,
    fontSize: 18,
    color: Colors.NEUTRAL_900,
    marginBottom: 4,
  },
  description: {
    fontFamily: Fonts.REGULAR,
    fontSize: 14,
    color: Colors.NEUTRAL_500,
  },
  price: {
    fontFamily: Fonts.BOLD,
    fontSize: 16,
    color: Colors.PRIMARY_600,
  },
  image: {
    height: 100,
    width: 100,
    resizeMode: StyleSheet.absoluteFillObject,
    borderRadius: 10,
    backgroundColor: Colors.NEUTRAL_200,
  },
  infoSection: {
    flex: 1,
    paddingLeft: 12,
    justifyContent: 'space-between',
  },
  nameSkeleton: {
    height: 16,
    width: '50%',
    marginBottom: 4,
  },
  descriptionTop: {
    height: 16,
    width: '100%',
    marginBottom: 4,
  },
  descriptionBottom: {
    height: 16,
    width: '100%',
  },
  priceSkeleton: {
    height: 16,
    width: '30%',
  },
  skeletonMargin: {
    marginBottom: 12,
  },
});
