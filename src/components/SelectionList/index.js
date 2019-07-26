import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';
import SelectionItem from './SelectionItem';

export default class SelectionList extends PureComponent {
  constructor(props) {
    super(props);
  }

  onPress = index => {
    this.props.onItemPress(index);
  };

  renderSelectionItems = (dataSource) => {
    return dataSource.map((item, index) => (
      <SelectionItem
        key={index}
        index={index}
        label={item.label}
        isSelected={item.isSelected}
        onPress={this.onPress}
      />
    ));
  };

  render() {
    const { dataSource } = this.props;
    return (
      <View style={{ marginTop: 16, padding: 8, flexDirection: 'row', flexWrap: 'wrap' }}>
        {this.renderSelectionItems(dataSource)}
      </View>
    );
  }
}
