import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import Header from '../components/Header';

const Home = ({navigation}) => {
  return (
    <>
      <Header navigation={navigation} routeName="Home" />
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Movies"
          onPress={() => navigation.navigate('Movies')}
        />
      </View>
    </>
  );
};

export default Home;
