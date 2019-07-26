import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';
import RadioButton from './RadioButton';

export const TYPE = {
  CHECK_LIST: 'check_list',
  QUESTION: 'question'
};

class RadioButtonGroup extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    };
  }

  onRadioButtonPress = (index) => {
    this.setState({ isActive: true });
    this.props.onItemPress(index);
  };

  renderRadioButtons = (type, dataSource, selectedIndex) => {
    const { isActive } = this.state;
    return dataSource.map((item, index) => (
      <RadioButton
        key={index}
        index={index}
        label={item.label}
        type={type}
        isSelected={selectedIndex === index}
        isActive={isActive}
        onPress={this.onRadioButtonPress}
      />
    ));
  };

  render() {
    const { dataSource, selectedIndex, type = TYPE.CHECK_LIST, containerStyle } = this.props;
    return (
      <View style={{ padding: 10, ...containerStyle }}>
        {this.renderRadioButtons(type, dataSource, selectedIndex)}
      </View>
    );
  }
}

export default RadioButtonGroup;
