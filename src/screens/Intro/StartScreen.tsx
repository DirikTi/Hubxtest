import { ImageBackground, Text, View, SafeAreaView, Dimensions, StyleSheet, Image } from "react-native";
import { Button } from "../../components/Buttons";
import type { RootStackScreenProps } from "../../../App";
import { CommonActions, useTheme } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { getIntroShown } from "../../utils/utils";
import { ScreenProgress } from "../../components/Progress";

export default function StartScreen({ navigation, route }: RootStackScreenProps<"Start">) {
    const { width, height } = Dimensions.get("screen");
    const { colors } = useTheme();

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const checkIntroStatus = async () => {
            const introShown = await getIntroShown();
            
            if(introShown) {
                navigation.dispatch(
                    CommonActions.reset({
                        index: 0,
                        routes: [
                            { name: "Tab" }
                        ]
                    })
                );
            } else {
                setLoading(false);
            }
        };

        checkIntroStatus();
    }, []);

    function handle() {
        navigation.navigate("Intro");
    }

    if(loading) {
        return <ScreenProgress />
    }

    return (
        <ImageBackground source={require("../../assets/images/start_screen.png")} style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1, justifyContent: "space-between" }} >
                
                <View style={{ marginLeft: 24, marginTop: 12, marginBottom: 24, maxWidth: width * 0.8 }}>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ ...styles.title, color: colors.text, fontWeight: "400" }}>Welcome To </Text>
                        <Text style={{ ...styles.title, color: colors.text, fontFamily: "Rubik-Medium" }}>PlantApp</Text>
                    </View>
                    <Text style={{ fontSize: 16, color: colors.text + "B2", lineHeight: 22, marginTop: 7 }}>Identify more than 3000+ plants and 88% accuracy.</Text>
                </View>

                <Image style={{ width: width * 0.75, height: height * 0.6, alignSelf: "center" }}
                    source={require("../../assets/images/start_screen_image.png")}
                />

                <View style={{ alignSelf: "center", width: width - 48, marginBottom: 10 }}>
                    <Button text="Get Started" onPress={handle} style={{ marginBottom: 15 }} />
                    <Text style={styles.subText}>
                        By tapping next, you are agreeing to PlantID
                    </Text>
                    <View style={{ flexDirection: "row", justifyContent: "center", marginTop: 3 }}>
                        <Text style={{ ...styles.subText, textDecorationLine: "underline" }}>
                            Terms of Use
                        </Text>
                        <Text style={styles.subText}>{" & "}</Text>
                        <Text style={{ ...styles.subText, textDecorationLine: "underline" }}>
                            Privacy Policy.
                        </Text>
                    </View>
                    
                </View>
            </SafeAreaView>

        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        fontFamily: "Rubik-Regular",
        lineHeight: 33.18
    },
    subText: {
        fontWeight: "400",
        fontFamily: "Rubik-Regular",
        color: "#597165B2",
        lineHeight: 15,
        fontSize: 11,
        textAlign: "center"
    }
})