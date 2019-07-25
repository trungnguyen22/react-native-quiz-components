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
  constructor(props) {
    super(props);
    this.state = {
      selectedIndex: -1
    };
  }

  onItemPress = index => {
    const { emotionItems = EMOTION_ITEMS } = this.props;
    this.setState({ selectedIndex: index });
    this.props.onItemPress(emotionItems[index]);
  };

  renderEmotionRatingBar = emotionItems => {
    const { selectedIndex } = this.state;
    const items = Array.from({ length: 5 });
    return items.map((_, i) => (
      <EmotionItem
        key={i}
        index={i}
        selectedImage={emotionItems[i].imageOn}
        unselectedImage={emotionItems[i].imageOff}
        label={emotionItems[i].label}
        isSelected={i === selectedIndex}
        onPress={this.onItemPress}
      />
    ));
  };

  render() {
    const { containerStyle, emotionItems = EMOTION_ITEMS } = this.props;
    return (
      <View style={[styles.container, containerStyle]}>
        {this.renderEmotionRatingBar(emotionItems)}
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
