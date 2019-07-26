import React, { PureComponent } from 'react';
import { View, StyleSheet } from 'react-native';
import EmotionItem from './EmotionItem';

const EMOTION_ITEMS = [
  {
    imageOn: require('./img/ic_very_bad_on.png'),
    imageOff: require('./img/ic_very_bad_off.png'),
    label: 'Very bad',
    value: 1
  },
  {
    imageOn: require('./img/ic_bad_on.png'),
    imageOff: require('./img/ic_bad_off.png'),
    label: 'Bad',
    value: 2
  },
  {
    imageOn: require('./img/ic_ok_on.png'),
    imageOff: require('./img/ic_ok_off.png'),
    label: 'Okay',
    value: 3
  },
  {
    imageOn: require('./img/ic_good_on.png'),
    imageOff: require('./img/ic_good_off.png'),
    label: 'Good',
    value: 4
  },
  {
    imageOn: require('./img/ic_very_good_on.png'),
    imageOff: require('./img/ic_very_good_off.png'),
    label: 'Very Good',
    value: 5
  }
];

class EmotionRatingBar extends PureComponent {
  onItemPress = (index) => {
    this.props.onItemPress(index);
  };

  renderEmotionRatingBar = (emotionItems, selectedIndex) => {
    return emotionItems.map((item, index) => (
      <EmotionItem
        key={index}
        index={index}
        selectedImage={item.imageOn}
        unselectedImage={item.imageOff}
        label={item.label}
        isSelected={selectedIndex}
        onPress={this.onItemPress}
      />
    ));
  };

  render() {
    const { containerStyle, emotionItems = EMOTION_ITEMS, selectedIndex } = this.props;
    return (
      <View style={[styles.container, containerStyle]}>
        {this.renderEmotionRatingBar(emotionItems, selectedIndex)}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 66
  }
});

export default EmotionRatingBar;
