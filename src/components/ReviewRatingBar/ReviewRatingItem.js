import React, { PureComponent } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity } from 'react-native';

const selectedImage = require('./img/ic_radio_button_on.png');
const unSelectedImage = require('./img/ic_radio_button_off.png');

class ReviewRatingItem extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      buttons: [
        {
          isSelected: false,
          value: 1
        },
        {
          isSelected: false,
          value: 2
        },
        {
          isSelected: false,
          value: 3
        },
        {
          isSelected: false,
          value: 4
        },
        {
          isSelected: false,
          value: 5
        }
      ]
    };
  }

  onItemPress = (item, index) => {
    const { buttons } = this.state;
    const mappedButtons = buttons.map((item, itemIndex) => {
      const mappedItem = item;
      mappedItem.isSelected = false;
      if (index === itemIndex) {
        mappedItem.isSelected = !mappedItem.isSelected;
      }
      return mappedItem;
    });
    this.setState({ buttons: mappedButtons });
    this.props.onItemPress(item.value, index);
  };

  renderRadioButtons = () => {
    const { buttons } = this.state;
    return buttons.map((item, index) => {
      const imageSource = item.isSelected ? selectedImage : unSelectedImage;
      return (
        <TouchableOpacity
          key={index}
          style={{ flex: 1, alignItems: 'center' }}
          onPress={() => {
            this.onItemPress(item, index);
          }}
        >
          <Image source={imageSource} />
        </TouchableOpacity>
      );
    });
  };

  render() {
    const { label, description, values, containerStyle } = this.props;
    return (
      <View style={{ ...styles.container, ...containerStyle }}>
        <Text style={styles.label}>
          {label}
          <Text style={styles.description}>{`   -${description}`}</Text>
        </Text>
        <View style={{ flexDirection: 'row', marginTop: 20 }}>{this.renderRadioButtons()}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
  label: {
    fontSize: 16,
    fontFamily: 'HelveticaNeue-Medium',
    color: 'rgb(36, 37, 61)',
    marginLeft: 8
  },
  description: {
    fontSize: 12,
    fontFamily: 'HelveticaNeue-Medium',
    color: 'rgba(36, 37, 61, 0.6)'
  }
});

export default ReviewRatingItem;
