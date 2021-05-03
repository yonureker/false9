import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, TextInput, Pressable} from 'react-native';
import {scale, ScaledSheet} from 'react-native-size-matters';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import algoliasearch from 'algoliasearch';
import {FlatList} from 'react-native-gesture-handler';

const client = algoliasearch('AIN8R1SQGX', 'b9402ffc9ea88be4d4475861fc5d5dc9');
const index = client.initIndex('false9_leagues');

const SearchLeague = () => {
  const [searchText, setSearchText] = useState('');
  const [results, setResults] = useState([]);
  const [initializing, setInitializing] = useState(false);

  const search = async (text) => {
    setInitializing(true);
    const response = await index.search(text, {
      attributesToRetrieve: ['leagueName', 'teamCount', 'private'],
      hitsPerPage: 50,
    });

    setInitializing(false);
    setResults(response.hits);
  };

  return (
    <View style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.formItem}>
          <MaterialCommunityIcons
            name="pencil-box"
            size={scale(25)}
            color="black"
            style={styles.itemIcon}
          />
          <TextInput
            placeholder="League Name"
            style={styles.itemText}
            onChangeText={(text) => setSearchText(text)}
          />
        </View>
        <View style={{alignSelf: 'stretch'}}>
          <Pressable style={styles.button} onPress={() => search(searchText)}>
            <Text style={styles.buttonText}>
              {initializing ? 'Searching...' : 'Search'}
            </Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.listContainer}>
        <FlatList
          data={results}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index}
          renderItem={({item}) => (
            <Pressable style={styles.listItem}>
              <View style={styles.flexTwo}>
                <Text style={[styles.alignStart, styles.itemText]}>
                  {item.leagueName}
                </Text>
              </View>
              <View style={styles.flexOne}>
                <Text style={[styles.alignEnd, styles.itemText]}>
                  {item.teamCount} Teams
                </Text>
              </View>
              <View style={styles.flexOne}>
                {item.private && (
                  <MaterialCommunityIcons
                    name="lock"
                    size={scale(15)}
                    color="black"
                  />
                )}
              </View>
            </Pressable>
          )}
        />
      </View>
    </View>
  );
};

export default SearchLeague;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '10@s',
    paddingHorizontal: '20@s',
  },
  formContainer: {
    alignItems: 'center',
    marginTop: '10@s',
    alignSelf: 'stretch',
  },
  listContainer: {
    marginTop: '10@s',
    alignSelf: 'stretch',
  },
  formItem: {
    backgroundColor: 'white',
    alignSelf: 'stretch',
    // width: '300@s',
    flexDirection: 'row',
    paddingHorizontal: '10@s',
    paddingVertical: '15@s',
    marginTop: '10@s',
    borderRadius: 10,
    alignItems: 'center',
  },
  itemText: {
    fontSize: '14@s',
    fontFamily: 'LexendDeca-Regular',
    flex: 1,
  },
  itemIcon: {
    paddingHorizontal: '10@s',
  },
  button: {
    backgroundColor: '#1098AE',
    borderRadius: '5@s',
    marginTop: '20@s',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: '16@s',
    fontFamily: 'LexendDeca-Regular',
    padding: '10@s',
    color: 'white',
  },
  listItem: {
    flexDirection: 'row',
    paddingVertical: '10@s',
    backgroundColor: 'white',
    paddingLeft: '10@s',
    // height: '50@s',
    marginTop: '5@s',
    borderRadius: 10,
  },
  itemText: {
    fontFamily: 'LexendDeca-Regular',
    fontSize: '12@s',
    paddingHorizontal: '5@s',
    // paddingLeft: '10@s',
  },
  flexTwo: {
    flex: 2.5,
    justifyContent: 'center',
  },
  flexOne: {
    flex: 1,
    justifyContent: 'center',
  },
  alignStart: {
    alignSelf: 'flex-start',
  },
  alignEnd: {
    alignSelf: 'flex-end',
  },
});
