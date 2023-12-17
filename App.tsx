import React from 'react';
import { NavigationContainer, type NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { type StackScreenProps } from '@react-navigation/stack';
import { StatusBar, useColorScheme } from 'react-native';
import { darkTheme, lightTheme } from './src/utils/theme';

// Screens
import TabNavigation, { type TabParamList } from './src/navigations/TabNavigation';
import IntroScreen from './src/screens/Intro/IntroScreen';
import StartScreen from './src/screens/Intro/StartScreen';
import PaywallScreen from './src/screens/PaywallScreen';
import { Provider } from 'react-redux';
import { store } from './src/store/store';

export type RootStackParamList = {
    Tab: NavigatorScreenParams<TabParamList>;
    Intro: undefined;
    Start: undefined;
    Paywall: undefined;
};
  
export type RootStackScreenProps<T extends keyof RootStackParamList> = StackScreenProps<RootStackParamList, T>;

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
    const scheme = useColorScheme();

    return (
        <Provider store={store}>
            <NavigationContainer theme={scheme == "dark" ? darkTheme : lightTheme}>
                <StatusBar
                    animated={true}
                    backgroundColor="transparent"
                    barStyle={'dark-content'}
                    translucent={true}
                />
                <RootStack.Navigator  screenOptions={{ headerShown: false }}>
                    <RootStack.Screen name="Tab" component={TabNavigation} />
                    <RootStack.Screen name="Paywall" component={PaywallScreen} />
                    <RootStack.Screen name="Start" component={StartScreen} />
                    <RootStack.Screen name="Intro" component={IntroScreen} />
                    <RootStack.Group>
                        
                    </RootStack.Group>
                </RootStack.Navigator>
            </NavigationContainer>
        </Provider>
    );
}