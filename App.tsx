import { NavigationContainer, type NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { type StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';

// Screens
import TabNavigation, { type TabParamList } from './src/navigations/TabNavigation';
import IntroScreen from './src/screens/Intro/IntroScreen';
import StartScreen from './src/screens/Intro/StartScreen';

export type RootStackParamList = {
    Tab: NavigatorScreenParams<TabParamList>;
    Intro: undefined;
    Start: undefined;
};
  
export type RootStackScreenProps<T extends keyof RootStackParamList> = StackScreenProps<RootStackParamList, T>;

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function App() {

    return (
        <NavigationContainer>
            <StatusBar
                animated={true}
                backgroundColor="transparent"
                barStyle={'dark-content'}
                translucent={true}
            />
            <RootStack.Navigator screenOptions={{ headerShown: false }}>
                <RootStack.Screen name="Start" component={StartScreen} />
                <RootStack.Screen name="Tab" component={TabNavigation} />
                <RootStack.Screen name="Intro" component={IntroScreen} />
                <RootStack.Group>
                    
                </RootStack.Group>
            </RootStack.Navigator>
        </NavigationContainer>
    );
}