import {Picker} from '@react-native-picker/picker';
import React, {useEffect, useState} from 'react';
import {View, Text, SafeAreaView, FlatList, StyleSheet} from 'react-native';
import Header from '../components/Header';
import TileList from '../components/Tile';
import {get} from '../common/function';
import Footer from '../components/Footer';

const DataList = props => {
  const genreType = props.route.params.type;
  const genreName = props.route.name;
  const [error, setError] = useState('');
  const [tilesList, setTilesList] = useState([]);
  const [fiteredList, setFiteredList] = useState([]);
  const [sortOrder, setSortOrder] = useState('asc');
  const [isLoading, setIsLoading] = useState(false);
  const [year, setYear] = useState('');

  const length = 25;

  useEffect(() => {
    // setError('');
    setYear('');
    setTilesList([]);
    setFiteredList([]);
    setSortOrder('asc');
  }, [genreType]);

  useEffect(() => {
    const pullImageUrl = item => {
      if (
        item &&
        item.images &&
        item.images['Poster Art'] &&
        item.images['Poster Art'].url
      ) {
        return item.images['Poster Art'].url;
      }
      return '';
    };
    setIsLoading(true);
    get('https://mumer01.github.io/publicApis/BoxOffice.json')
      .then(data => {
        setIsLoading(false);
        const list = [];
        if (data && data.entries && Array.isArray(data.entries)) {
          data.entries.forEach((item, i) => {
            if (item?.programType === genreType) {
              list.push({
                img: pullImageUrl(item),
                title: item?.title,
                year: item?.releaseYear,
              });
            }
          });
        }
        setTilesList(list);
      })
      .catch(err => {
        console.error(err);
        setIsLoading(false);
        setError('Oops, something went wrong...');
      });
  }, [genreType]);

  useEffect(() => {
    setFiteredList(filter_sort(tilesList));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tilesList, sortOrder, year]);

  const filter_sort = list => {
    list = JSON.parse(JSON.stringify(list));
    return list
      .filter(item => !year || `${item.year}` === `${year}`)
      .splice(0, length);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={props.navigation} routeName={genreName} />
      <View>
        <Picker
          selectedValue={year}
          onValueChange={(itemValue, itemIndex) => setYear(itemValue)}>
          <Picker.Item label="All Year" value="" />
          <Picker.Item label="2014" value="2014" />
          <Picker.Item label="2015" value="2015" />
          <Picker.Item label="2016" value="2016" />
          <Picker.Item label="2017" value="2017" />
        </Picker>
      </View>
      {fiteredList && fiteredList.length && !error ? (
        <FlatList
          numColumns={2}
          contentContainerStyle={styles.flatListPadding}
          data={fiteredList}
          renderItem={TileList}
          keyExtractor={item => item.title}
        />
      ) : (
        <Text style={styles.text}>
          {error ? error : isLoading ? 'Loading...' : 'No DataList!'}
        </Text>
      )}
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    textAlign: 'center',
  },
  flatListPadding: {
    paddingBottom: 50,
  },
});

export default DataList;
