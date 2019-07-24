import React, { PureComponent } from 'react';
import { Text, StyleSheet } from 'react-native';
import { BouncingButton } from '../../BouncingButton/index';

export default class SelectionItem extends PureComponent {
  render() {
    const { index, label, isSelected, onPress } = this.props;
    const borderColor = isSelected ? styles.selectedBorderColor : styles.defaultBorderColor;
    const bgColor = isSelected ? styles.selectedBGColor : styles.defaultBGColor;
    const labelColor = isSelected ? styles.selectedLabelColor : styles.defaultLabelColor;

    return (
      <BouncingButton
        activeOpacity={1}
        style={{ ...styles.container, ...borderColor, ...bgColor }}
        onPress={() => {
          onPress(index);
        }}
      >
        <Text style={[styles.label, labelColor]}>{label}</Text>
      </BouncingButton>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 44 / 2,
    borderWidth: 1,
    margin: 8
  },
  defaultBGColor: {
    backgroundColor: 'white'
  },
  selectedBGColor: {
    backgroundColor: 'rgb(57, 184, 24)'
  },
  defaultBorderColor: {
    borderColor: 'lightgray'
  },
  selectedBorderColor: {
    borderColor: 'rgb(57, 184, 24)'
  },
  label: {
    fontSize: 14,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20
  },
  defaultLabelColor: {
    color: 'rgb(36, 37, 61)'
  },
  selectedLabelColor: {
    color: 'white'
  }
});
