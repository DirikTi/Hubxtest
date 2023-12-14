import { type TabScreenProps } from "../../navigations/TabNavigation";
import { Text, View } from "react-native";

export default function HomeScreen({ navigation, route }: TabScreenProps<"ScannerTab">) {
    return (
        <View>
            <Text>Scanner Screen</Text>
        </View>
    )
}