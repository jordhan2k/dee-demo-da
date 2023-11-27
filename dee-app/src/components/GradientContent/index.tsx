import React from 'react';
import {StyleSheet, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {Colors, GRAD_RANGE_259} from '../../enums/colors';

interface IPropType {
  plain?: boolean;
  colors?: any;
}

const GradientContent = (props: IPropType) => {
  const {colors = GRAD_RANGE_259, plain = false} = props;
  if (plain) {
    return (
      <View style={[styles.coverView, {backgroundColor: Colors.NEUTRAL_100}]} />
    );
  }
  return (
    <LinearGradient
      start={{x: 0, y: 0}}
      end={{x: 1, y: 0}}
      colors={colors}
      style={styles.coverView}
    />
  );
};

export default React.memo(GradientContent);

const styles = StyleSheet.create({
  coverView: {
    width: '100%',
    flex: 1,
  },
});
