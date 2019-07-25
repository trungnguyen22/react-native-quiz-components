import React, { PureComponent } from 'react';
import { Text, View, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { TYPE } from './index';
import { BouncingButton } from '../../BouncingButton/index';

const selectedRadioButtonImage = require('./img/ic_tick_on.png');
const unSelectedRadioButtonImage = require('./img/ic_tick_off.png');

class RadioButton extends PureComponent {
  render() {
    const {
      index,
      label,
      type = TYPE.CHECK_LIST,
      isSelected = false,
      isActive,
      onPress
    } = this.props;
    const imageSource = isSelected ? selectedRadioButtonImage : unSelectedRadioButtonImage;
    const containerBorderRadius =
      type === TYPE.CHECK_LIST ? { borderRadius: 44 / 2 } : { borderRadius: 8 };
    const containerOpacity = isSelected || !isActive ? { opacity: 1 } : { opacity: 0.6 };
    return (
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => {
          onPress(index);
        }}
      >
        <View style={{ ...styles.container, ...containerBorderRadius, ...containerOpacity }}>
          <Image source={imageSource} />
          <Text style={{ ...styles.text }}>{label}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'rgb(188, 188, 188)',
    backgroundColor: 'rgb(255, 255, 255)'
  },
  text: {
    paddingRight: 10,
    marginLeft: 12,
    color: 'rgb(36, 37, 61)'
  }
});

export default RadioButton;
