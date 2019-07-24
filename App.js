import React, { Fragment, Component } from 'react';
import { View, Button, SafeAreaView, StatusBar, ScrollView, StyleSheet } from 'react-native';
import StepProgressBar from './src/components/StepProgressBar';
import EmotionRatingBar from './src/components/EmotionRatingBar';
import SelectionList from './src/components/SelectionList';
import RadioButtonGroup from './src/components/RadioButtonGroup';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      step: 1
    };
  }

  componentDidMount() {}

  onNextPress = () => {
    const { step } = this.state;
    const newStep = step + 1;
    this.setState({ step: newStep });
  };

  onBackPress = () => {
    const { step } = this.state;
    const newStep = step - 1;
    this.setState({ step: newStep });
  };

  onEmotionItemPress = item => {};

  render() {
    const { step } = this.state;
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{ flex: 1, backgroundColor: 'rgb(245, 245, 245)' }}>
          <ScrollView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
              <StepProgressBar steps={4} isAtStep={step} isShownIndicator />
              <Button title={'Next'} onPress={this.onNextPress} />
              <Button title={'Back'} onPress={this.onBackPress} />
              <EmotionRatingBar
                containerStyle={{ marginTop: 16 }}
                onItemPress={this.onEmotionItemPress}
              />
              <SelectionList
                onItemPress={index => {
                  console.log(index);
                }}
              />
              <RadioButtonGroup
                onItemPress={index => {
                  console.log(index);
                }}
              />
            </View>
          </ScrollView>
        </SafeAreaView>
      </Fragment>
    );
  }
}

export default App;
