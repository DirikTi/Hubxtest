import { type TabScreenProps } from "../../navigations/TabNavigation";
import { Text, View } from "react-native";

export default function DiagnoseScreen({ navigation, route }: TabScreenProps<"DiagnoseTab">) {
    return (
        <View>
            <Text>Diagnose Screen</Text>
        </View>
    )
}