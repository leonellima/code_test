import AsyncStorage from '@react-native-community/async-storage';

export const getData = async (key) => {
  try {
    const retrievedItem = await AsyncStorage.getItem(key)
    if(retrievedItem !== null) {
  		return retrievedItem;
    }
  } catch(error) {
    console.error('Error reading value: ' + error.message);
  }
}

export const storeItem = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value)
  } catch (error) {
    console.error('AsyncStorage error: ' + error.message);
  }
}

export const removeItem = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
  } catch (error) {
    console.error('AsyncStorage error: ' + error.message);
  }
  
}
