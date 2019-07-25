import React, { PureComponent } from 'react';
import { Text, View } from 'react-native';
import SelectionItem from './SelectionItem';

export default class SelectionList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: []
    };
  }

  onPress = index => {
    const { dataSource } = this.state;
    const newDataSource = [...dataSource];
    newDataSource[index].isSelected = !newDataSource[index].isSelected;
    this.setState({ dataSource: newDataSource });
    this.props.onItemPress(dataSource, dataSource[index]);
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
    const { dataSource } = this.props;
    this.state.dataSource = dataSource;
    return (
      <View style={{ marginTop: 16, padding: 8, flexDirection: 'row', flexWrap: 'wrap' }}>
        {this.renderSelectionItems()}
      </View>
    );
  }
}
