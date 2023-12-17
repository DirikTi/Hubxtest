import { ImageBackground, Text, View, Dimensions, Image, StyleSheet, StatusBar } from "react-native";
import { Button } from "../../components/Buttons";
import { useTheme } from "@react-navigation/native";
import Swiper from 'react-native-swiper'
import { useRef } from "react";
import { type RootStackScreenProps } from "../../../App";
import * as Animatable from 'react-native-animatable';
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function IntroScreen({ navigation }: RootStackScreenProps<"Intro">) {
    const { width, height } = Dimensions.get("screen");
    const { colors } = useTheme();
    const swiperRef = useRef(null);
    const insets = useSafeAreaInsets();

    const SlideOneScreen = () => (
        <ImageBackground source={require("../../assets/images/intro_screen.png")} style={{ flex: 1, paddingTop: insets.top }}>
            <View style={{ marginVertical: 12, marginLeft: 24 }}>
                <View style={{ flexDirection: "row" }}>
                    <Text style={{ ...styles.title, color: colors.text, fontFamily: "Rubik-Regular" }}>Take a photo to</Text>
                    <View>
                        <Text style={{ ...styles.title, color: colors.text, fontFamily: "Rubik-Bold" }}> identify </Text>
                        <Image source={require("../../assets/images/brush.png")} style={{ width: 120 }} />
                    </View>
                </View>
                <Text style={{ ...styles.title, color: colors.text, fontFamily: "Rubik-Regular" }}>the plant!</Text>
            </View>

            <Image style={{ width: width * 0.75, height: height * 0.85, alignSelf: "center" }}
            source={require("../../assets/images/intro_content.png")} />
        </ImageBackground>
    )

    const SlideTwoScreen = () => (
        <ImageBackground source={require("../../assets/images/intro_screen.png")} style={{ flex: 1, paddingTop: insets.top }}>
            <View style={{ marginVertical: 12, marginLeft: 24, flexDirection: "row" }}>
                <Text style={{ ...styles.title, color: colors.text, fontFamily: "Rubik-Regular" }}>Get plant</Text>
                <View>
                    <Text style={{ ...styles.title, color: colors.text, fontFamily: "Rubik-Bold" }}> care guides </Text>
                    <Image source={require("../../assets/images/brush.png")} style={{ alignSelf: "center" }} />
                </View>
            </View>

            <Image style={{ width: width, height: 600, alignSelf: "center" }}
            source={require("../../assets/images/intro_content_1.png")} />
        </ImageBackground>
    )

    return (
        <View style={{ flex: 1, backgroundColor: "#fff" }} >
            <StatusBar translucent={false} />
            <Swiper style={{  }} loop={false} ref={swiperRef}
            renderPagination={(index, total, swiper) => (
                <View style={{ alignItems: "center" }}>
                    <Button text="Continue" onPress={() => {
                        if(index == 1) {
                            
                            return null;
                        }
                        swiper.scrollBy(index + 1, true)
                    }} style={{ width: width - 48 }} />

                    <View style={{ flexDirection: "row", alignItems :"center", marginTop: 32.5, marginBottom: 12.5 + insets.bottom }}>
                        <Animatable.View animation={index == 0 ? "tada" : undefined} 
                            style={index == 0 ? styles.activeDot : styles.passiveDot } />
                        <Animatable.View animation={index == 1 ? "tada" : undefined} 
                            style={index == 1 ? styles.activeDot : styles.passiveDot } />
                        <Animatable.View
                            style={styles.passiveDot } />
                    </View>
                </View>
            )}>
                <SlideOneScreen />
                <SlideTwoScreen />
                <View style={{ backgroundColor: "transparent" }}>
                    <Text>And simple</Text>
                </View>
            </Swiper>
            
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 28,
        lineHeight: 33.18,
        letterSpacing: -1
    },
    passiveDot: {
        width: 6,
        height: 6,
        backgroundColor: "#13231B40",
        borderRadius: 50,
        marginHorizontal: 4 // equal to 8 => 4 + 4
    },
    activeDot: {
        width: 10,
        height: 10,
        backgroundColor: "#13231B",
        borderRadius: 50,
        marginHorizontal: 4
    }
})