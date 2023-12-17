import { Dimensions, Image, ImageBackground, StyleSheet, Text, View } from "react-native"
import type { QuestionResponseType, CategoriesResponseType } from "../types/response";
import { useTheme } from "@react-navigation/native";
import LinearGradient from "react-native-linear-gradient";

export const QuestionItem = ({ id, title, subtitle, image_uri, uri, order }: QuestionResponseType) => {
    const { height, width } = Dimensions.get("screen");
    
    return (
        <View style={{ height: 164, borderWidth: 1, borderColor: "#FFFFFF1A", borderRadius: 12, width: width * 0.64,
        marginRight: 10 }}>
            <Image source={{ uri: image_uri }} style={{ width: width * 0.64, borderRadius: 12, height: 164 }} />
            <View style={{ position: "absolute", bottom: 0,
                paddingTop: 11, paddingBottom: 13, paddingLeft: 14, paddingRight: 26, 
                borderRadius: 12, flexDirection: "row"
            }}>
                <Text style={{ fontFamily: "Rubik-Regular", ...styles.questionText }}>{title} <Text style={{ fontFamily: "Rubik-SemiBold", ...styles.questionText }}>{subtitle}</Text></Text>
                
            </View>
        </View>
    )
}

export const CategoryItem = ({ 
    id,
    name,
    createdAt,
    updatedAt,
    publishedAt,
    title,
    rank,
    image
}: CategoriesResponseType) => {
    const { height, width } = Dimensions.get("screen");
    const { colors } = useTheme();
    const url = image.url;
    const maxWidth = width / 2 - 30
    // 59
    return (
        <View
        style={{ width: maxWidth, height: 152, marginRight: 11, marginBottom: 16,
            borderRadius: 12, borderWidth: 0.5, borderColor: "#29BB892E"
        }}>
            <Image source={{ uri: url }} style={{ width: maxWidth, height: 152 }} />
            <Text numberOfLines={4} ellipsizeMode="tail" 
            style={{ color: colors.text, fontFamily: "Rubik-SemiBold", top: 16, left: 16, position: "absolute",
            fontSize: 16, lineHeight: 21, letterSpacing: -0.32, width: maxWidth * 0.55 }}>{title}</Text>
        
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