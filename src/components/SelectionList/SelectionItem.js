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
    backgroundColor: 'green'
  },
  defaultBorderColor: {
    borderColor: 'lightgray'
  },
  selectedBorderColor: {
    borderColor: 'green'
  },
  label: {
    fontSize: 14,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20
  },
  defaultLabelColor: {
    color: 'black'
  },
  selectedLabelColor: {
    color: 'white'
  }
});
