import { TabScreenProps } from "../../navigations/TabNavigation";

export default function HomeScreen({ navigation, route }: TabScreenProps<"HomeTab">) {
    navigation.navigate("HomeTab");
}