/* eslint-disable react-native/no-inline-styles */
import {useRoute} from '@react-navigation/core';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const Header = ({navigation, routeName}) => {
  console.log(routeName);
  return (
    <>
      <View style={styles.container}>
        <View style={styles.leftComponent}>
          <Text style={styles.textColorMargin}>GOK Stream</Text>
        </View>
        <View>
          <View style={styles.rightComponent}>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Home');
              }}>
              <Text style={styles.textColorMargin}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Movies');
              }}>
              <Text style={styles.textColorMargin}>Movies</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Series');
              }}>
              <Text style={styles.textColorMargin}>Series</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.secondContainer}>
        <Text style={styles.textColorScreenMargin}>{routeName}</Text>
      </View>
    </>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#113CFC',
    paddingVertical: 15,
  },
  secondContainer: {
    backgroundColor: 'black',
    paddingVertical: 10,
  },
  leftComponent: {
    marginLeft: 15,
  },
  rightComponent: {
    flexDirection: 'row',
    marginRight: 15,
  },
  textColorMargin: {
    color: 'white',
    marginRight: 8,
  },
  textColorScreenMargin: {
    color: 'white',
    marginLeft: 15,
  },
});
