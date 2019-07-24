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
    this.props.onItemPress(dataSource, dataSource[index]);
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
    const { dataSource, type = TYPE.CHECK_LIST, containerStyle } = this.props;
    this.state.dataSource = dataSource;
    return <View style={{ padding: 10, ...containerStyle }}>{this.renderRadioButtons(type)}</View>;
  }
}

export default RadioButtonGroup;
