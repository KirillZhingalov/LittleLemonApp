import * as React from 'react';
import { Text, View, StyleSheet, Alert } from 'react-native';
import { Switch } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useRef, useEffect } from 'react';

/**
 * A custom useEffect hook that only triggers on updates, not on initial mount
 * @param {Function} effect
 * @param {Array<any>} dependencies
 */
function useUpdateEffect(effect, dependencies = []) {
  const isInitialMount = useRef(true);

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
    } else {
      return effect();
    }
  }, dependencies);
}


const SettingsScreen = () => {

    const [preferences, setPreferences] = React.useState({
        pushNotifications: false,
        emailMarketing: false,
        latestNews: false
    });

    React.useEffect(() => {
        // Populating preferences from storage using AsyncStorage.multiGet
        (async () => {
            try {
                const values = await AsyncStorage.multiGet(Object.keys(preferences));
                const initialState = values.reduce((acc, curr) => {
                    // Every item in the values array is itself an array with a string key and a stringified value, i.e ['pushNotifications', 'false']
                    acc[curr[0]] = JSON.parse(curr[1]);
                    return acc;
                }, {});
                setPreferences(initialState);
            } catch (e) {
                Alert.alert(`An error occurred: ${e.message}`);
            }
        })();
    }, []);

    // This effect only runs when the preferences state updates, excluding initial mount
    useUpdateEffect(() => {
        (async () => {
            // Every time there is an update on the preference state, we persist it on storage
            // The exercise requierement is to use multiSet API
            const keyValues = Object.entries(preferences).map((entry) => {
                return [entry[0], String(entry[1])];
            });
            try {
                await AsyncStorage.multiSet(keyValues);
            } catch (e) {
                Alert.alert(`An error occurred: ${e.message}`);
            }
        })();
    }, [preferences]);
    
    return (
        <View style={styles.container}>
            <Text style={styles.header}>Account Preferences</Text>
            <View style={styles.row}>
                <Text>Push Notifications</Text>
                <Switch value={preferences.pushNotifications} onValueChange={() => setPreferences('pushNotifications')} />
            </View>
            <View style={styles.row}>
                <Text>Marketing emails</Text>
                <Switch value={preferences.emailMarketing} onValueChange={() => setPreferences('emailMarketing')} />
            </View>
            <View style={styles.row}>
                <Text>Latest news</Text>
                <Switch value={preferences.latestNews} onValueChange={() => setPreferences('latestNews')} />
            </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
    //   paddingTop: Constants.statusBarHeight,
      backgroundColor: '#ecf0f1',
      padding: 16,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 16,
    },
    header: {
      margin: 24,
      fontSize: 18,
      fontWeight: 'bold',
      textAlign: 'center',
    },
});


export default SettingsScreen;