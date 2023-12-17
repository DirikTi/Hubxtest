import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getIntroShown() {
    try {
        const result = await AsyncStorage.getItem('introShown');
        return result != null;
    } catch (error) {
        return false;
    }
}

export async function setIntroShow() {
    await AsyncStorage.setItem("introShown", "shown");
}