import React, { useEffect, useState } from 'react';
import {
  View, 
  Text, 
  FlatList, 
  StyleSheet, 
  ActivityIndicator, 
  SafeAreaView
} from 'react-native'

// DATA FOR VISUALIZATION
// const menuItemsToDisplay = [
//     { name: 'Hummus', price: '$5.00', id: '1A' },
//     { name: 'Moutabal', price: '$5.00', id: '2B' },
//     { name: 'Falafel', price: '$7.50', id: '3C' },
//     { name: 'Marinated Olives', price: '$5.00', id: '4D' },
//     { name: 'Kofta', price: '$5.00', id: '5E' },
//     { name: 'Eggplant Salad', price: '$8.50', id: '6F' },
//     { name: 'Lentil Burger', price: '$10.00', id: '7G' },
//     { name: 'Smoked Salmon', price: '$14.00', id: '8H' },
//     { name: 'Kofta Burger', price: '$11.00', id: '9I' },
//     { name: 'Turkish Kebab', price: '$15.50', id: '10J' },
//     { name: 'Fries', price: '$3.00', id: '11K' },
//     { name: 'Buttered Rice', price: '$3.00', id: '12L' },
//     { name: 'Bread Sticks', price: '$3.00', id: '13M' },
//     { name: 'Pita Pocket', price: '$3.00', id: '14N' },
//     { name: 'Lentil Soup', price: '$3.75', id: '15O' },
//     { name: 'Greek Salad', price: '$6.00', id: '16Q' },
//     { name: 'Rice Pilaf', price: '$4.00', id: '17R' },
//     { name: 'Baklava', price: '$3.00', id: '18S' },
//     { name: 'Tartufo', price: '$3.00', id: '19T' },
//     { name: 'Tiramisu', price: '$5.00', id: '20U' },
//     { name: 'Panna Cotta', price: '$5.00', id: '21V' },
// ];

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