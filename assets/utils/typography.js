import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

export default function typography() {
  const oldTextRender = Text.render;
  Text.render = (...args) => {
    const origin = oldTextRender.call(this, ...args);
    return React.cloneElement(origin, {
      style: [styles.defaultText, origin.props.style],
    });
  };
}

const styles = StyleSheet.create({
  defaultText: {
    fontFamily: 'RobotoCondensed-Regular',
  },
});
