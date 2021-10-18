import React from 'react';
import {View, Text, Button} from 'react-native';
import Header from '../components/Header';

const Series = ({navigation}) => {
  return (
    <>
      <Header navigation={navigation} routeName="Series" />
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Text>Series Screen</Text>
        <Button
          title="Go to Home"
          onPress={() => navigation.navigate('Home')}
        />
      </View>
    </>
  );
};

export default Series;
