import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';
import TodoButton from './TodoButton';

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
      const mappedItem = Object.assign({}, item);
      if (index === itemIndex) {
        mappedItem.isSelected = !mappedItem.isSelected;
      }
      return mappedItem;
    });
    this.setState({ dataSource: mappedDataSource });
    this.props.onItemPress(dataSource, dataSource[index]);
  };

  onItemChangeText = (index, text) => {
    const { dataSource } = this.state;
    const newDataSource = [...dataSource];
    newDataSource[index].value = text;
    this.setState({ dataSource: newDataSource });
  };

  renderTodoButtons = () => {
    const { dataSource } = this.state;
    return dataSource.map((item, index) => (
      <TodoButton
        key={index}
        index={index}
        label={item.label}
        textInputValue={item.value}
        isSelected={item.isSelected}
        isShownTextBox={item.isShownTextBox}
        onPress={this.onItemPress}
        onChangeText={this.onItemChangeText}
      />
    ));
  };

  render() {
    const { dataSource, containerStyle } = this.props;
    if (this.state.dataSource === undefined) {
      this.state.dataSource = [
        ...dataSource,
        { label: 'Other', isShownTextBox: true, isSelected: false, value: '' }
      ];
    }
    return <View style={{ padding: 16, ...containerStyle }}>{this.renderTodoButtons()}</View>;
  }
}

export default TodoButtonGroup;
