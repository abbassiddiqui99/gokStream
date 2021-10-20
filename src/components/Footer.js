import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Footer = () => {
  return (
    <View style={styles.secondContainer}>
      <Text style={styles.textColorScreenMargin}>
        Copyright © 2020 Geeks of Kolachi. All Rights Reserved.
      </Text>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  secondContainer: {
    backgroundColor: 'black',
    paddingVertical: 10,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  },
  textColorScreenMargin: {
    color: 'white',
    marginLeft: 15,
  },
});
