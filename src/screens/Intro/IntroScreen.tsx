import { ImageBackground, Text, View, SafeAreaView, Dimensions, Image } from "react-native";
import { Button } from "../../components/Buttons";

export default function IntroScreen() {
    const { width, height } = Dimensions.get("screen");

    function handle() {

    }

    return (
        <ImageBackground source={require("../../assets/images/intro_screen.png")} style={{ flex: 1 }}>
            <SafeAreaView style={{ flex: 1 }} >
                <View style={{ marginLeft: 24, marginTop: 12, maxWidth: width * 0.8 }}>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ ...styles.title, fontWeight: "400" }}>Welcome To </Text>
                        <Text style={{ ...styles.title, fontWeight: "700" }}>PlantApp</Text>
                    </View>
                    <Text style={{ fontSize: 16, color: TEXT_COLOR + "B2", lineHeight: 22, marginTop: 7 }}>Identify more than 3000+ plants and 88% accuracy.</Text>
                </View>

                <Image style={{ width: width * 0.75, height: height * 0.6, alignSelf: "center" }}
                    source={require("../../assets/images/start_screen_image.png")}
                />

                <View style={{ alignSelf: "center", width: width - 48, marginBottom: 10 }}>
                    <Button text="Get Started" onPress={handle} style={{ marginBottom: 15 }} />
                    
                    
                </View>
            </SafeAreaView>
        </ImageBackground>
    )
}