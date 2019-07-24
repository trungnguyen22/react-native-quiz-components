import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';
import RadioButton from './RadioButton';

const DUMMY_DATA = [
  {
    label: 'You are Super Man',
    isSelected: false,
    value: 0
  },
  {
    label: "I'm Badman",
    isSelected: false,
    value: 1
  },
  {
    label: 'Lorem ipsum forthenis',
    isSelected: false,
    value: 2
  },
  {
    label: 'You are Super Man You are Super Man You are Super Man You are Super Man You ',
    isSelected: false,
    value: 3
  }
];

export const TYPE = {
  CHECK_LIST: 'check_list',
  QUESTION: 'question'
};

class RadioButtonGroup extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: []
    };
  }

  onRadioButtonPress = index => {
    const { dataSource } = this.state;
    const mappedDataSource = dataSource.map((item, itemIndex) => {
      const mappedItem = item;
      if (index === itemIndex) {
        mappedItem.isSelected = !mappedItem.isSelected;
        return mappedItem;
      }
      mappedItem.isSelected = false;
      return mappedItem;
    });
    this.setState({ dataSource: mappedDataSource });
    this.props.onItemPress(index);
  };

  renderRadioButtons = type => {
    const { dataSource } = this.state;
    return dataSource.map((item, index) => (
      <RadioButton
        key={index}
        index={index}
        label={item.label}
        type={type}
        isSelected={item.isSelected}
        onPress={this.onRadioButtonPress}
      />
    ));
  };

  render() {
    const { dataSource = DUMMY_DATA, type = TYPE.CHECK_LIST, containerStyle } = this.props;
    this.state.dataSource = dataSource;
    return <View style={{ padding: 10, ...containerStyle }}>{this.renderRadioButtons(type)}</View>;
  }
}

export default RadioButtonGroup;
