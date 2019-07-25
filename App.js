import React, { Fragment, Component } from 'react';
import { View, Button, SafeAreaView, StatusBar, ScrollView, Platform } from 'react-native';
import StepProgressBar from './src/components/StepProgressBar';
import EmotionRatingBar from './src/components/EmotionRatingBar';
import SelectionList from './src/components/SelectionList';
import RadioButtonGroup, { TYPE } from './src/components/RadioButtonGroup';
import TodoButtonGroup from './src/components/TodoButtonGroup';
import {
  DUMMY_DATA_CHECK_LIST,
  DUMMY_DATA_SELECTION_LIST,
  DUMMY_DATA_REVIEW_RATING
} from './src/constants/Constants';
import SurveyTextInput, { INPUT_TYPE } from './src/components/SurveyTextInput/index';
import ReviewRatingItem from './src/components/ReviewRatingBar/ReviewRatingItem';
import ReviewRatingContainer from './src/components/ReviewRatingBar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  onEmotionItemPress = item => {
    console.log('EmotionItem: ', item);
  };

  renderButtons = () => (
    <View style={{ padding: 16 }}>
      <View
        style={{
          marginTop: 8,
          backgroundColor: Platform.OS === 'ios' ? 'lightgray' : 'transparent'
        }}
      >
        <Button title={'Next'} onPress={this.onNextPress} />
      </View>
      <View
        style={{
          marginTop: 8,
          backgroundColor: Platform.OS === 'ios' ? 'lightgray' : 'transparent'
        }}
      >
        <Button title={'Back'} onPress={this.onBackPress} />
      </View>
    </View>
  );

  render() {
    const { step } = this.state;
    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView style={{ flex: 1, backgroundColor: 'rgb(245, 245, 245)' }}>
          <ScrollView style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
              <ReviewRatingContainer
                dataSource={DUMMY_DATA_REVIEW_RATING}
                onItemPress={(dataSource, item, value) => {
                  console.log('ReviewRatingBar: ', dataSource);
                  console.log('ReviewRatingBar: ', item);
                  console.log('ReviewRatingBar: ', value);
                }}
              />

              <StepProgressBar steps={4} isAtStep={step} isShownIndicator />
              {this.renderButtons()}
              <EmotionRatingBar
                containerStyle={{ marginTop: 16 }}
                onItemPress={this.onEmotionItemPress}
              />
              <SelectionList
                dataSource={DUMMY_DATA_SELECTION_LIST}
                onItemPress={(dataSource, index) => {
                  console.log('SelectionList: ', dataSource);
                  console.log('SelectionList: ', index);
                }}
              />
              <RadioButtonGroup
                dataSource={DUMMY_DATA_CHECK_LIST}
                type={TYPE.CHECK_LIST}
                onItemPress={(dataSource, selectedItem) => {
                  console.log('RadioButtonGroup: ', dataSource);
                  console.log('RadioButtonGroup: ', selectedItem);
                }}
              />
              <RadioButtonGroup
                dataSource={DUMMY_DATA_CHECK_LIST}
                type={TYPE.QUESTION}
                onItemPress={(dataSource, selectedItem) => {
                  console.log('RadioButtonGroup: ', dataSource);
                  console.log('RadioButtonGroup: ', selectedItem);
                }}
              />
              <TodoButtonGroup
                dataSource={DUMMY_DATA_CHECK_LIST}
                onItemPress={(dataSource, selectedItem) => {
                  console.log('TodoButtonGroup: ', dataSource);
                  console.log('TodoButtonGroup: ', selectedItem);
                }}
              />
              <SurveyTextInput
                inputType={INPUT_TYPE.TEXT}
                containerStyle={{ margin: 12 }}
                onChangeText={text => {
                  console.log('SurveyTextInput: ', text);
                }}
              />
              <SurveyTextInput
                inputType={INPUT_TYPE.NUMBER}
                containerStyle={{ margin: 12 }}
                onChangeText={text => {
                  console.log('SurveyTextInput: ', text);
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
