import { TextInput, View, type ViewStyle } from "react-native";
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import { useTheme } from "@react-navigation/native";

type TextInputProps = {
    value: string;
    onChangeText: (e: string) => void;
    placeholder?: string;
    style?: ViewStyle;
}

export const SearchTextInput = ({ value, onChangeText, placeholder="", style }: TextInputProps) => {
    const { colors } = useTheme();
    return (
        <View style={{ 
            flexDirection: "row", 
            borderWidth: 0.2, borderColor: "#3C3C4340", borderRadius: 12, backgroundColor: "#FFFFFFE0",
            ...style}}>
            <AntDesignIcon name="search1" color="#ABABAB" size={20} style={{ marginLeft: 16, marginVertical: 12, marginRight: 12 }} />
            <TextInput 
                value={value}
                onChangeText={onChangeText}
                placeholder={placeholder}
                placeholderTextColor="#ABABAB"
                style={{ fontFamily: "Rubik-Regular", color: colors.text }}
            />
        </View>
    )
}