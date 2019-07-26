import React, { PureComponent } from 'react';
import { View } from 'react-native';
import TodoButton from './TodoButton';

class TodoButtonGroup extends PureComponent {
  constructor(props) {
    super(props);
  }

  onItemPress = index => {
    this.props.onItemPress(index);
  };

  onItemChangeText = (index, text) => {
    this.props.onItemTextChange(index, text);
  };

  renderTodoButtons = (dataSource) => {
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
    return <View style={{ padding: 16, ...containerStyle }}>{this.renderTodoButtons(dataSource)}</View>;
  }
}

export default TodoButtonGroup;
