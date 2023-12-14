import { type TabScreenProps } from "../../navigations/TabNavigation";
import { Text, View } from "react-native";

export default function ProfielScreen({ navigation, route }: TabScreenProps<"ProfileTab">) {
    return (
        <View>
            <Text>Profile Screen</Text>
        </View>
    )
}