import React from 'react';
import {View, Text, Button} from 'react-native';
import Header from '../components/Header';

const Movies = ({navigation}) => {
  return (
    <>
      <Header navigation={navigation} routeName="Movies" />
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Movies Screen</Text>
        <Button
          title="Go to Series"
          onPress={() => navigation.navigate('Series')}
        />
      </View>
    </>
  );
};

export default Movies;
