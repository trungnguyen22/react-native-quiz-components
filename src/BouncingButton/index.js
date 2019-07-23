import React, { PureComponent } from 'react';
import { TouchableOpacity, Animated, Easing } from 'react-native';

export class BouncingButton extends PureComponent {
  constructor(props) {
    super(props);
    this.scaleValue = new Animated.Value(0);
  }

  render() {
    const { style, onPress } = this.props;

    const viewScale = this.scaleValue.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [1, 1.1, 1.2]
    });
    let transformStyle = { transform: [{ scale: viewScale }] };

    return (
      <TouchableOpacity
        activeOpacity={1}
        style={{ ...transformStyle, ...style }}
        onPress={onPress}
        onPressIn={() => {
          Animated.timing(this.scaleValue, {
            toValue: 1,
            duration: 250,
            easing: Easing.linear,
            useNativeDriver: true
          }).start();
        }}
        onPressOut={() => {
          Animated.timing(this.scaleValue, {
            toValue: 0,
            duration: 100,
            easing: Easing.linear,
            useNativeDriver: true
          }).start();
        }}
      >
        {this.props.children}
      </TouchableOpacity>
    );
  }
}

export default BouncingButton;
