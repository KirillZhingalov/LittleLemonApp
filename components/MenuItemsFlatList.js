import React, { useEffect, useState } from 'react';
import {
  View, 
  Text, 
  FlatList, 
  StyleSheet, 
  ActivityIndicator, 
  SafeAreaView
} from 'react-native'


// Item component
const Item = ({ name, price }) => (
  <View style={menuStyles.innerContainer}>
    <Text style={menuStyles.itemText}>{name}</Text>
    <Text style={menuStyles.itemText}>{'$' + price}</Text>
  </View>
);

const renderItem = ({ item }) => (
  <Item name={item.title} price={item.price} />
);

  

const MenuItemsFlatList = () => {

  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  // Fetching data from API
  const getMenu = async () => {
    try {
      const response = await fetch(
        'https://raw.githubusercontent.com/Meta-Mobile-Developer-PC/Working-With-Data-API/main/littleLemonSimpleMenu.json'
      );
      const json = await response.json();

      setData(json.menu);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };
  
  // Calling getMenu as soon as the component is mounted
  useEffect(() => {
    getMenu();
  }, []);


  return (
    <SafeAreaView style={menuStyles.container}>
      <Text style={menuStyles.headerText}>Little Lemon</Text>
      {isLoading ? (
        <ActivityIndicator /> // If data is not loaded yet, show ActivityIndicator
      ) : (
        <FlatList             // If data is loaded, show FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={renderItem}
        />
      )}
    </SafeAreaView>
  );
}

// STYLE 
const menuStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    paddingHorizontal: 40,
    paddingVertical: 20,
    backgroundColor: '#495E57',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  itemText: {
    color: '#F4CE14',
    fontSize: 22,
  },
  headerText: {
    color: '#495E57',
    fontSize: 30,
    textAlign: 'center',
  },
});

// Add default export
export default MenuItemsFlatList;