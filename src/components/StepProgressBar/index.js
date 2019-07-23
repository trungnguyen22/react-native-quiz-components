import React, { PureComponent } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class StepProgressBar extends PureComponent {
  renderSteps = (steps, isAtStep, stepStyle) => {
    const listSteps = Array.from({ length: steps });
    return listSteps.map((_, i) => {
      const borderLeft = i === 0 ? styles.borderLeft : {};
      const borderRight = i === listSteps.length - 1 ? styles.borderRight : {};
      const backgroundColor = i < isAtStep ? styles.activeStepBgColor : {};
      return (
        <View
          key={i}
          style={[styles.defaultStep, borderLeft, borderRight, backgroundColor, stepStyle]}
        />
      );
    });
  };

  renderIndicator = (steps, isAtStep) => (
    <View style={styles.indicator}>
      <Text>
        {`${isAtStep}`}
        <Text style={{ color: 'lightgray' }}>{` /${steps}`}</Text>
      </Text>
    </View>
  );

  render() {
    const { steps, isAtStep, isShownIndicator, containerStyle, stepStyle } = this.props;
    return (
      <View style={[styles.container, containerStyle]}>
        <View style={styles.steps}>{this.renderSteps(steps, isAtStep, stepStyle)}</View>
        {isShownIndicator ? this.renderIndicator(steps, isAtStep) : null}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 16
  },
  indicator: {
    alignItems: 'flex-end',
    marginTop: 8
  },
  steps: {
    flexDirection: 'row'
  },
  activeStepBgColor: {
    backgroundColor: 'rgb(0, 130, 224)'
  },
  borderLeft: {
    borderTopLeftRadius: 2,
    borderBottomLeftRadius: 2
  },
  borderRight: {
    borderTopRightRadius: 2,
    borderBottomRightRadius: 2
  },
  defaultStep: {
    flex: 1,
    marginRight: 2,
    height: 4,
    backgroundColor: 'lightgray'
  }
});

export default StepProgressBar;
