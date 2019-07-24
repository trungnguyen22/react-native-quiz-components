import React, { PureComponent } from 'react';
import { Text, View, TextInput, StyleSheet } from 'react-native';

export const INPUT_TYPE = {
  TEXT: 'TEXT',
  NUMBER: 'NUMBER'
};

class SurveyTextInput extends PureComponent {
  TYPE = {
    TEXT: {
      keyboardType: 'default',
      size: { height: 107, minHeight: 107 },
      placeholder: 'Nhập nội dung',
      textAlign: {},
      multiline: true
    },
    NUMBER: {
      keyboardType: 'number-pad',
      size: { height: 44, minHeight: 44, maxWidth: 146 },
      textAlign: { textAlign: 'center' },
      multiline: false
    }
  };

  render() {
    const { inputType, containerStyle } = this.props;

    const { keyboardType, size, placeholder, textAlign, multiline, onChangeText } = this.TYPE[
      inputType
    ];

    return (
      <View style={{ ...containerStyle }}>
        <TextInput
          style={{ ...styles.textInput, ...size, ...textAlign }}
          keyboardType={keyboardType}
          placeholder={placeholder}
          multiline={multiline}
          onChangeText={onChangeText}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    backgroundColor: 'white',
    borderWidth: 1,
    padding: 8,
    borderRadius: 6,
    borderColor: 'rgb(48, 143, 233)',
    fontSize: 14,
    textAlignVertical: 'top'
  }
});

export default SurveyTextInput;
