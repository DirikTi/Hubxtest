import { ActivityIndicator, View } from "react-native"
import { useTheme } from "@react-navigation/native"

export const ScreenProgress = () => {
    const { colors } = useTheme();
    return (
        <View style={{ alignItems: "center", justifyContent: "center", backgroundColor: "#fff", flex: 1 }}>
            <ActivityIndicator color={colors.primary} />
        </View>
    )
}