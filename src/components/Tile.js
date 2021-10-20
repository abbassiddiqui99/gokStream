import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const TileList = ({item}) => {
  return (
    <View style={styles.tilesContainer}>
      <Image
        source={require('../assets/img/bettercallsaul.jpeg')}
        style={styles.image}
      />
      <Text style={styles.title}>
        {item.title.length > 20
          ? item.title.substring(0, 20) + '...'
          : item.title}
      </Text>
      <Text style={styles.year}>{item.year}</Text>
    </View>
  );
};

export default TileList;

const styles = StyleSheet.create({
  tilesContainer: {
    width: windowWidth / 2,
    height: 250,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: windowWidth / 2 - 40,
    borderRadius: 10,
    height: 200,
  },
  title: {
    alignSelf: 'flex-start',
    marginLeft: 22,
    marginTop: 2,
  },
  year: {
    alignSelf: 'flex-end',
    marginRight: 20,
    fontSize: 12,
    fontStyle: 'italic',
  },
});
