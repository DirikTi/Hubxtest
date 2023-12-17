import { Dimensions, FlatList, ImageBackground, Pressable, ScrollView, StatusBar, StyleSheet, Text, View } from "react-native";
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import { ScannerIcon } from "../components/Icons";
import LinearGradient from "react-native-linear-gradient";
import { useTheme } from "@react-navigation/native";
import { CheckButton } from "../components/Buttons";
import { useState } from "react";

export default function PaywallScreen() {
    const { width } = Dimensions.get("screen");
    const { colors } = useTheme();

    const [isMonthly, setIsMotnhly] = useState(false);

    const sliderDatas = [
        { title: "Unlimeted", text: "Plant Identify", Icon: (<ScannerIcon size={18} color="#fff" />) },
        { title: "Faste", text: "Process", Icon: (<ScannerIcon size={18} color="#fff" />) },
        { title: "Detailed", text: "Plant Care", Icon: (<ScannerIcon size={18} color="#fff" />) }
    ];

    const SliderItem = ({ title, text, Icon }: any) => (
        <View style={{ backgroundColor: "#FFFFFF14", borderRadius: 14, width: width * 0.5, marginRight: 8 }}>
            <View style={{ width: 36, height: 35.68, backgroundColor: "#0000003D", alignItems: "center", justifyContent: "center",
        marginLeft: 16, marginTop: 16.32, borderRadius: 8 }}>
                {Icon}
            </View>
            <View style={{ marginVertical: 16, marginLeft: 16 }}>
                <Text style={{ fontFamily: "Rubik-Bold", color: "#fff", lineHeight: 24, letterSpacing: 0.38, fontSize: 20 }}>{title}</Text>
                <Text style={{ fontFamily: "Rubik-Regular", color: "#FFFFFFB2", lineHeight: 18, letterSpacing: -0.08, fontSize: 13 }}>{text}</Text>
            </View>
        </View>
    );

    return (
        <ScrollView style={{ flex: 1, backgroundColor: "#101E17" }}>
            <StatusBar
                animated={true}
                backgroundColor="transparent"
                barStyle={'light-content'}
                translucent={true}
            />
            <ImageBackground source={require("../assets/images/paywall_background.png")}
            style={{ height: 490, justifyContent: "space-between"  }}>
                <Pressable style={{ 
                    marginTop: 55, marginRight: 16, borderRadius: 50, alignSelf: "flex-end", backgroundColor: "#00000066",
                    width: 24, height: 24, justifyContent: "center", alignItems: "center"
                }}>
                    <AntDesignIcon name="close" color={"#fff"} size={10} />
                </Pressable>
                <View>
                    <View style={{ marginLeft: 24 }}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Text style={{ fontFamily: "Rubik-SemiBold", lineHeight: 46.8, ...styles.title }}>PlantApp</Text>
                            <Text style={{ fontFamily: "Rubik-Regular", lineHeight: 32, ...styles.title }}> Premium</Text>
                        </View>
                        <Text style={{
                            color: "#fff", fontSize: 17, lineHeight: 24, letterSpacing: 0.38, fontWeight: "300", fontFamily: "Rublik-Light",
                            marginBottom: 20
                        }}>Access All Features</Text>
                    </View>

                    <FlatList 
                        data={sliderDatas}
                        renderItem={({item, index}) => (<SliderItem {...item} />)}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                        contentContainerStyle={{ marginBottom: 5, paddingLeft: 24 }}
                    />
                </View>
            </ImageBackground>

            <View style={{ paddingHorizontal: 24, marginTop: 24 }}>
                
                <Pressable onPress={() => setIsMotnhly(true)} style={{ 
                    borderWidth: 0.5, borderColor: "#FFFFFF4D", borderRadius: 14,
                    flexDirection: "row", alignItems: "center", backgroundColor: "#FFFFFF0D",
                    paddingLeft: 16, paddingVertical: 13
                }}>
                    <CheckButton isCheck={isMonthly} onPress={() => null} />
                    <View>
                        <Text style={{ fontFamily: "Rubik-SemiBold", color: "#fff", fontSize: 16 }}>1 Month</Text>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ fontWeight: "300", fontFamily: "Rubik-Light", color: "#FFFFFFB2", fontSize: 12 }}>$2.99/month, </Text>
                            <Text style={{ fontWeight: "400", fontFamily: "Rubik-Regular", color: "#FFFFFFB2", fontSize: 12 }}>auto renewable</Text>
                        </View>
                    </View>
                </Pressable>

                <Pressable onPress={() => setIsMotnhly(false)}>
                    <LinearGradient 
                    colors={['rgba(40, 175, 110, 0.168)', 'rgba(40, 175, 110, 0)']}
                    locations={[0, 0.6851]}
                    start={{ x: 1, y: 0 }}
                    end={{ x: 0, y: 1 }}
                    style={{
                        borderWidth: 1.5, borderColor: colors.primary, borderRadius: 14,
                        flexDirection: "row", alignItems: "center",
                        paddingLeft: 16, paddingVertical: 13, marginTop: 17
                    }}>
                        <View style={{ position: "absolute", top: 0, right: -2,
                            backgroundColor: colors.primary, borderBottomLeftRadius: 20, borderTopRightRadius: 14 }} >
                            <Text style={{ color: "#fff", fontSize: 12, fontFamily: "Rubik-Regular", paddingVertical: 4.7, marginHorizontal: 12 }}>Save 50%</Text>
                        </View>
                        <CheckButton isCheck={!isMonthly} onPress={() => null} />
                        <View>
                            <Text style={{ fontFamily: "Rubik-SemiBold", color: "#fff", fontSize: 16 }}>1 Month</Text>
                            <Text style={{ fontWeight: "400", fontFamily: "Rubik-Regular", color: "#FFFFFFB2", fontSize: 12 }}>First 3 days free, then $529,99/year</Text>
                        </View>
                    </LinearGradient>
                </Pressable>

            </View>
            
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 27, 
        color: "#fff",
    }
})