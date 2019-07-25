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
      dataSource: [],
      isActive: false
    };
  }

  onRadioButtonPress = index => {
    const { dataSource } = this.state;
    const mappedDataSource = dataSource.map((item, itemIndex) => {
      const mappedItem = item;
      mappedItem.isSelected = false;
      if (index === itemIndex) {
        mappedItem.isSelected = !mappedItem.isSelected;
      }
      return mappedItem;
    });
    this.setState({ dataSource: mappedDataSource, isActive: true });
    this.props.onItemPress(dataSource, dataSource[index]);
  };

  renderRadioButtons = type => {
    const { dataSource, isActive } = this.state;
    return dataSource.map((item, index) => (
      <RadioButton
        key={index}
        index={index}
        label={item.label}
        type={type}
        isSelected={item.isSelected}
        isActive={isActive}
        onPress={this.onRadioButtonPress}
      />
    ));
  };

  render() {
    const { dataSource, type = TYPE.CHECK_LIST, containerStyle } = this.props;
    this.state.dataSource = dataSource;
    return <View style={{ padding: 10, ...containerStyle }}>{this.renderRadioButtons(type)}</View>;
  }
}

export default RadioButtonGroup;
