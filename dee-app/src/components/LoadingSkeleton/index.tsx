/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useRef} from 'react';
import {Animated, Dimensions, View} from 'react-native';
import {GRAD_RANGE_MASK} from '../../enums/colors';
import GradientContent from '../GradientContent';
import styles from './styles';

interface IPropType {
  show?: boolean;
  children: any;
}
const deviceWidth = Dimensions.get('window').width;

const LoadingSkeleton = (props: IPropType) => {
  const {children} = props;
  const width = deviceWidth;
  const translateX = useRef(new Animated.Value(-width));

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(translateX.current, {
          toValue: width,
          useNativeDriver: true,
          duration: 700,
        }),
      ]),
    ).start();
  }, [translateX]);
  return (
    <View style={styles.container}>
      {children}
      <Animated.View
        style={[
          styles.animatedView,
          {
            transform: [{translateX: translateX.current}],
          },
        ]}>
        <GradientContent colors={GRAD_RANGE_MASK} />
      </Animated.View>
    </View>
  );
};

export default LoadingSkeleton;
