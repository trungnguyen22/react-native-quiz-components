import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';
import SelectionItem from './SelectionItem';

const DUMMY_DATA = [
  {
    label: 'Travelling',
    isSelected: false
  },
  {
    label: 'Hangout with your friends',
    isSelected: false
  },
  {
    label: 'Stay At Home and Do Nothing',
    isSelected: false
  },
  {
    label: 'Just listening Music',
    isSelected: false
  },
  {
    label: 'Reading Books',
    isSelected: false
  },
  {
    label: 'Playing Games',
    isSelected: false
  },
  {
    label: 'Coding Side Project',
    isSelected: false
  }
];

export default class SelectionList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: []
    };
  }

  onPress = index => {
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

  renderSelectionItems = () => {
    const { dataSource } = this.state;
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
    const { dataSource = DUMMY_DATA } = this.props;
    this.state.dataSource = dataSource;
    return (
      <View style={{ marginTop: 16, padding: 8, flexDirection: 'row', flexWrap: 'wrap' }}>
        {this.renderSelectionItems()}
      </View>
    );
  }
}
