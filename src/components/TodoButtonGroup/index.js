import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';
import TodoButton from './TodoButton';

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

class TodoButtonGroup extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: undefined
    };
  }

  onItemPress = index => {
    const { dataSource } = this.state;
    const mappedDataSource = dataSource.map((item, itemIndex) => {
      const mappedItem = item;
      if (index === itemIndex) {
        mappedItem.isSelected = !mappedItem.isSelected;
      }
      return mappedItem;
    });
    this.setState({ dataSource: mappedDataSource });
    this.props.onItemPress(index);
  };

  onItemChangeText = (index, text) => {
    this.props.onItemChangeText(index, text);
  };

  renderTodoButtons = () => {
    const { dataSource } = this.state;
    return dataSource.map((item, index) => (
      <TodoButton
        key={index}
        index={index}
        label={item.label}
        isSelected={item.isSelected}
        isShownTextBox={item.isShownTextBox}
        onPress={this.onItemPress}
        onChangeText={this.onItemChangeText}
      />
    ));
  };

  render() {
    const { todoButtonItems = DUMMY_DATA, containerStyle } = this.props;
    if (this.state.dataSource === undefined) {
      this.state.dataSource = [
        ...todoButtonItems,
        { label: 'Other', isShownTextBox: true, isSelected: false }
      ];
    }
    return <View style={{ padding: 16, ...containerStyle }}>{this.renderTodoButtons()}</View>;
  }
}

export default TodoButtonGroup;
