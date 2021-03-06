import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Footer from '../components/Footer';
import Header from '../components/Header';

const windowWidth = Dimensions.get('window').width;

const Home = ({navigation}) => {
  return (
    <View style={styles.mainContainer}>
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
              source={require('../assets/img/movie.png')}
              style={styles.image}
              resizeMode="contain"
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
              source={require('../assets/img/movie.png')}
              style={styles.image}
              resizeMode="contain"
            />
            <Text style={styles.title}>Series</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
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
