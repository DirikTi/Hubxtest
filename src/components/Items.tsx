import { Dimensions, Image, ImageBackground, StyleSheet, Text, View } from "react-native"
import type { QuestionResponseType } from "../types/response";

export const QuestionItems = ({ id, title, subtitle, image_url, uri, order }: QuestionResponseType) => {
    const { height, width } = Dimensions.get("screen");

    return (
        <View style={{ height: 164, borderWidth: 1, borderColor: "#FFFFFF1A", borderRadius: 12, width: width * 0.64 }}>
            <Image source={{ uri: image_url }} style={{ width: width * 0.64, borderRadius: 12, height: 164 }} />
            <View style={{ position: "absolute", bottom: 0,
                paddingTop: 11, paddingBottom: 13, paddingLeft: 14, paddingRight: 26, 
                backgroundColor: "#00000033", borderWidth: 1, borderColor: "#FFFFFF1A", flexDirection: "row"
            }}>
                <Text style={{ fontFamily: "Rubik-Regular", ...styles.questionText }}>{title}</Text>
                <Text style={{ fontFamily: "Rubik-SemiBold", ...styles.questionText }}>{subtitle}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    questionText: {
        color: "#fff",
        fontSize: 15,
        letterSpacing: -0.24,
        lineHeight: 20
    }
})