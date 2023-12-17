import { type TabScreenProps } from "../../navigations/TabNavigation";
import { Dimensions, FlatList, ImageBackground, type NativeScrollEvent, Text, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import { ScrollView } from "react-native";
import { SearchTextInput } from "../../components/Inputs";
import { useEffect, useState } from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { PremiumButton } from "../../components/Buttons";
import { useGetQuestionsQuery } from "../../services/questionService";
import { CategoryItem, QuestionItem } from "../../components/Items";
import { FlashList } from "@shopify/flash-list";
import categoriesApi, { useGetCategoriesQuery } from "../../services/categoryService";
import { ScreenProgress } from "../../components/Progress";
import { useSelector } from "react-redux";
import { RootStateType, useAppDispatch } from "../../store/store";
import { CategoryType } from "../../types/response";

export default function HomeScreen({ navigation, route }: TabScreenProps<"HomeTab">) {
    const { width } = Dimensions.get("screen");
    const appDispatch = useAppDispatch();
    const { colors } = useTheme();
    const insets = useSafeAreaInsets();

    const { data: questions, isLoading: questionLoading, isError: questionError } = useGetQuestionsQuery();
    const { isLoading: categoriesLoading, isError: categoriesError  } = useGetCategoriesQuery(1);

    const categoryItems = useSelector<RootStateType, CategoryType[]>(state => state.category.items);
    const pageCount = useSelector<RootStateType, number>(state => state.category.pageCount);
    const page = useSelector<RootStateType, number>(state => state.category.page);
    
    const [search, setSearch] = useState("");

    async function handleScroll({ layoutMeasurement, contentOffset, contentSize }: NativeScrollEvent) {

        const paddingToBottom = 10;
        const isEndReached = layoutMeasurement.height + contentOffset.y >= contentSize.height - paddingToBottom;
        
        if (isEndReached && page < pageCount) {
            const promise = appDispatch(categoriesApi.endpoints.getCategories.initiate(page + 1));
            await promise;
        }
    }

    if(questionLoading || categoriesLoading) {
        return <ScreenProgress />
    }

    return (
        <ScrollView onScroll={({ nativeEvent }) => handleScroll(nativeEvent)} scrollEventThrottle={150}
        style={{ backgroundColor: "#FBFAFA", flex: 1 }}>
        
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
        
            <PremiumButton  />

            <View style={{ display: questionError ? "none" : "flex" }}>
                <Text style={{ 
                    color: colors.text, fontFamily: "Rubik-SemiBold", lineHeight: 20, letterSpacing: -0.24, fontSize: 15,
            marginBottom: 16, marginLeft: 24 }}>Get Started</Text>
                <FlatList 
                    data={questions}
                    keyExtractor={(item, index) => index.toString()}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ marginBottom: 24, paddingLeft: 24 }}
                    renderItem={({ item, index }) => (
                        <QuestionItem {...item} />
                    )}
                />
            </View>

            {categoriesError ? null : (
                <FlatList
                    data={categoryItems}
                    keyExtractor={(item, index) => index.toString()}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingLeft: 24, paddingRight: 13, paddingBottom: 25 }}
                    renderItem={({ item, index }) => (
                        <CategoryItem {...item} />
                    )}
                    numColumns={2}
                />
            )}

            
        </ScrollView>
    )
}