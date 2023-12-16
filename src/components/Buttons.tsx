import { StyleSheet, Text, TouchableOpacity } from "react-native";
import type { TextStyle, ViewStyle } from "react-native";
import { MAIN_COLOR } from "../utils/utils";

type ButtonProps = {
    text: string;
    onPress: () => void;
    style?: ViewStyle;
    styleText?: TextStyle
}

export const Button = ({ text, onPress, style={}, styleText={} }: ButtonProps) => {
    return (
        <TouchableOpacity onPress={onPress} style={{ ...styles.container, ...style }}>
            <Text style={{ ...styles.text, ...styleText }}>{text}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 12,
        backgroundColor: MAIN_COLOR,
        paddingTop: 18,
        paddingRight: 16,
        paddingBottom: 18,
        paddingLeft: 16,
        width: '100%',
        alignItems: "center"
    },
    text: {
        color: "#FFF",
        fontSize: 15,
        fontWeight: "700",
        fontFamily: "SFProText-Regular"
    }
})