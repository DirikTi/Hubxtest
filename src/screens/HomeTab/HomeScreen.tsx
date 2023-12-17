import { type TabScreenProps } from "../../navigations/TabNavigation";
import { Dimensions, ImageBackground, Text, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { ScrollView } from "react-native";
import { SearchTextInput } from "../../components/Inputs";
import { useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { PremiumButton } from "../../components/Buttons";
import { useGetQuestionsQuery } from "../../services/questionService";

export default function HomeScreen({ navigation, route }: TabScreenProps<"HomeTab">) {
    const { width } = Dimensions.get("screen");
    const { data: questions, isSuccess } = useGetQuestionsQuery();

    const { colors } = useTheme();
    const insets = useSafeAreaInsets();

    const [search, setSearch] = useState("");

    console.log("questions", questions);

    return (
        <ScrollView style={{ backgroundColor: "#FBFAFA", flex: 1 }}>
        
            <ImageBackground source={require("../../assets/images/main_header.png")} style={{  }}>
                <View style={{ marginTop: 3 + insets.top, marginLeft: 24, marginBottom: 14 }}>
                    <Text style={{ 
                        fontSize: 16, lineHeight: 18.96, letterSpacing: 0.07, fontFamily: "Rubik-Regular", color: colors.text 
                    }}>Hi, plant lover!</Text>
                    <Text style={{
                        marginTop: 6, letterSpacing: 0.35, lineHeight: 28, fontSize: 24, fontFamily: "Rubik-SemiBold"
                    }}>Good Afternoon! ⛅</Text>
                </View>

                <SearchTextInput style={{ marginBottom: 14, marginHorizontal: 24, width: width - 48 }} 
                value={search} onChangeText={setSearch} placeholder="Search for plants" />
            </ImageBackground>
        
            <PremiumButton />

            <View style={{ paddingHorizontal: 24 }}>
                <Text style={{ 
                    color: colors.text, fontFamily: "Rubik-Regular", lineHeight: 20, letterSpacing: -0.24, fontSize: 15,
            marginBottom: 16  }}>Get Started</Text>
            </View>


            
        </ScrollView>
    )
}