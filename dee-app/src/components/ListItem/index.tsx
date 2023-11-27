import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import GradientContent from '../GradientContent';
import styles from './styles';

interface ILIstItem {
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  onPress: () => void;
  index: number;
  visible?: boolean;
}

const ListItem = (props: ILIstItem) => {
  const {description, imageUrl, name, price, onPress, index} = props;
  return (
    <TouchableOpacity
      style={[styles.container]}
      activeOpacity={0.7}
      onPress={onPress}>
      <FastImage source={{uri: imageUrl}} style={styles.image} />
      <View style={styles.infoSection}>
        <View>
          <Text numberOfLines={1} style={styles.itemName}>
            #{index + 1} {name}
          </Text>
          <Text numberOfLines={2} style={styles.description}>
            {description}
          </Text>
        </View>
        <Text style={styles.price}>${price}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(ListItem);

export const ListItemSkeleton = () => (
  <View style={[styles.container, styles.skeletonMargin]}>
    <View style={styles.image}>
      <GradientContent plain />
    </View>
    <View style={styles.infoSection}>
      <View>
        <View style={styles.nameSkeleton}>
          <GradientContent plain />
        </View>
        <View style={styles.descriptionTop}>
          <GradientContent plain />
        </View>
        <View style={styles.descriptionBottom}>
          <GradientContent plain />
        </View>
      </View>
      <View style={styles.priceSkeleton}>
        <GradientContent plain />
      </View>
    </View>
  </View>
);
