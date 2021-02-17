import { AsyncStorage } from "react-native";

{AsyncStorage}

const deviceStorage = {
    async saveItem(key, value){
        try{
            await AsyncStorage.setItem(key,value);
        }
        catch(error){
            alert('AsynceStorage Error: '+ error.message);
        }
    }
};

export default deviceStorage;