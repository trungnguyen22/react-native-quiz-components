import React, { PureComponent } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, StyleSheet } from 'react-native';
import { BouncingButton } from '../../BouncingButton/index';

const selectedRadioButtonImage = require('./img/ic_to_do_list_on.png');
const unSelectedRadioButtonImage = require('./img/ic_to_do_list_off.png');

export class TodoButton extends PureComponent {
  render() {
    const { index, label, isSelected, isShownTextBox, onPress, onChangeText } = this.props;
    const imageSource = isSelected ? selectedRadioButtonImage : unSelectedRadioButtonImage;
    const textStyle = isSelected ? { fontWeight: 'bold' } : {};
    return (
      <BouncingButton
        activeOpacity={0.2}
        onPress={() => {
          onPress(index);
        }}
      >
        <View style={{ ...styles.container }}>
          <View style={{ ...styles.itemContainer }}>
            <Image source={imageSource} />
            <Text style={{ ...styles.text, ...textStyle }}>{label}</Text>
          </View>
          {isShownTextBox && isSelected ? (
            <TextInput
              style={{
                marginLeft: 24 + 12,
                marginTop: 8,
                padding: 8,
                borderWidth: 1,
                borderRadius: 6,
                borderColor: 'rgb(48, 143, 233)',
                minHeight: 71
              }}
              placeholder={'Nhập nội dung'}
              multiline
              onChangeText={text => {
                onChangeText(index, text);
              }}
            />
          ) : null}
        </View>
      </BouncingButton>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  itemContainer: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    fontSize: 14,
    paddingRight: 10,
    marginLeft: 12,
    color: 'rgb(36, 37, 61)'
  }
});

export default TodoButton;
