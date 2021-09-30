import AsyncStorage from '@react-native-async-storage/async-storage'

const storeObject = async (key, object)=>{

    try {

        object = JSON.stringify(object)
        
        await AsyncStorage.setItem(key, object)

    } catch (error) {
        throw error
    }

}

const getObject = async (key)=>{

    try {

        let retrvdItem = await AsyncStorage.getItem(key)

        retrvdItem = JSON.parse(retrvdItem)
        
        if(retrvdItem !== null){

            return retrvdItem

        }else{
            return null
        }
        
    } catch (error) {
        throw error
    }

}

export default {
    storeObject,
    getObject
}