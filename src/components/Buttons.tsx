import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import type { TextStyle, ViewStyle } from "react-native";
import { useTheme } from "@react-navigation/native";
import * as Animatable from 'react-native-animatable';

type ButtonProps = {
    text: string;
    onPress: () => void;
    style?: ViewStyle;
    styleText?: TextStyle
}

type CheckButtonProps = {
    isCheck: boolean;
    onPress?: () => void;
}

export const Button = ({ text, onPress, style={}, styleText={} }: ButtonProps) => {
    const { colors } = useTheme();

    return (
        <TouchableOpacity onPress={onPress} style={{ ...styles.container, backgroundColor: colors.primary, ...style }}>
            <Text style={{ ...styles.text, ...styleText }}>{text}</Text>
        </TouchableOpacity>
    )
}

export const CheckButton = ({ isCheck, onPress }: CheckButtonProps) => {
    const { colors } = useTheme();

    return (
        <Pressable onPress={onPress}>
            <Animatable.View animation={isCheck ? "tada" : undefined}  style={{ width: 24, height: 24, backgroundColor: isCheck ? colors.primary : "#FFFFFF26",
            marginRight: 12, borderRadius: 100, alignItems: "center", justifyContent: "center" 
        }}>
                {isCheck ? (
                    <View style={{ width: 8, height: 8, borderRadius: 50, backgroundColor: "#fff" }} />
                ) : null}
            </Animatable.View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 12,
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