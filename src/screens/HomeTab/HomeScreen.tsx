import { type TabScreenProps } from "../../navigations/TabNavigation";
import { Text, View } from "react-native";

export default function HomeScreen({ navigation, route }: TabScreenProps<"HomeTab">) {
    return (
        <View>
            <Text>Home Screen</Text>
        </View>
    )
}