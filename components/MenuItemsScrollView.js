// DATA FOR VISUALIZATION

// COMPONENTS
const MenuItemsScrollView = () => {
    return (
        <View style={{ flex: 0.75 }}>
            <ScrollView style={{
                padding: 40, 
                backgroundColor: green,
            }} 
            horizontal={false}
            >
                <Text style={{ fontSize: 40, flexWrap: 'wrap', color: 'white'}}>View Menu</Text>
                {/* <Text style={{ color: yellow, fontSize: 40}}>{menuItemsToDisplay[0]}</Text> */}
            </ScrollView>
        </View>
    )
};

// STYLE