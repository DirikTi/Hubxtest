import { type TabScreenProps } from "../../navigations/TabNavigation";
import { Text, View } from "react-native";

export default function GardenScreen({ navigation, route }: TabScreenProps<"GardenTab">) {
    return (
        <View>
            <Text>Garden Screen</Text>
        </View>
    )
}