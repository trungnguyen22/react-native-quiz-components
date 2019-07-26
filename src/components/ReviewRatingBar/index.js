import React, { PureComponent } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import ReviewRatingItem from './ReviewRatingItem';

export class ReviewRatingContainer extends PureComponent {
  onItemPress = (item, index, value) => {
    this.props.onItemPress(index, value);
  };

  renderHeaderTitle = dataSource => {
    const { ratingScaleTitles } = dataSource;
    return ratingScaleTitles.map((title, index) => (
      <View key={index} style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={styles.headerTitle}>{title}</Text>
      </View>
    ));
  };

  renderReviewRatingItems = dataSource => {
    const { data } = dataSource;
    return data.map((item, index) => {
      const backgroundColor =
        index % 2 !== 0 ? { backgroundColor: 'rgb(245, 245, 245)' } : { backgroundColor: 'white' };
      return (
        <ReviewRatingItem
          key={index}
          label={item.label}
          description={item.description}
          containerStyle={{ ...backgroundColor, padding: 12, paddingTop: 20, paddingBottom: 20 }}
          values={item.values}
          onItemPress={value => {
            this.onItemPress(item, index, value);
          }}
        />
      );
    });
  };

  render() {
    const { dataSource } = this.props;
    return (
      <View style={styles.container}>
        <View style={styles.headerContainer}>{this.renderHeaderTitle(dataSource)}</View>
        {this.renderReviewRatingItems(dataSource)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  headerTitle: {
    fontSize: 13,
    color: 'rgb(65, 117, 5)',
    fontFamily: 'HelveticaNeue-Bold'
  },
  headerContainer: {
    flexDirection: 'row',
    backgroundColor: 'rgb(241, 255, 239)',
    padding: 12,
    paddingLeft: 12,
    paddingRight: 12
  }
});

export default ReviewRatingContainer;
