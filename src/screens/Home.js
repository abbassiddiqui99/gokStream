import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../components/Header';

const windowWidth = Dimensions.get('window').width;

const Home = ({navigation}) => {
  return (
    <>
      <Header navigation={navigation} routeName="Home" />
      <View style={styles.container}>
        <View style={styles.tilesContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate({
                name: 'Movies',
                params: {type: 'movie'},
              });
            }}>
            <Image
              source={require('../assets/img/bettercallsaul.jpeg')}
              style={styles.image}
            />
            <Text style={styles.title}>Movies</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.tilesContainer}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate({
                name: 'Series',
                params: {type: 'series'},
              });
            }}>
            <Image
              source={require('../assets/img/bettercallsaul.jpeg')}
              style={styles.image}
            />
            <Text style={styles.title}>Series</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
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
    marginTop: 2,
  },
});

export default Home;
