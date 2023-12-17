import AsyncStorage from "@react-native-async-storage/async-storage";

export const API_URL = "https://dummy-api-jtg6bessta-ey.a.run.app/";


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