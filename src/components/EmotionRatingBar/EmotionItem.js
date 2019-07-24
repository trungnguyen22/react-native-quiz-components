import React, { PureComponent } from 'react';
import { Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { BouncingButton } from '../../BouncingButton/index';

export default class EmotionItem extends PureComponent {
  render() {
    const { index, selectedImage, unselectedImage, label, isSelected, onPress } = this.props;
    const imageSource = isSelected ? selectedImage : unselectedImage;
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => {
          onPress(index);
        }}
      >
        <Image source={imageSource} />
        <Text style={{ marginTop: 8, fontSize: 12 }}>{label}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between'
  }
});
