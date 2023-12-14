import { NavigationContainer, type NavigatorScreenParams } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { type StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { SafeAreaView } from 'react-native';
import TabNavigation, { TabParamList, TabScreenProps } from './src/navigations/TabNavigation';

export type RootStackParamList = {
    Tab: NavigatorScreenParams<TabParamList>;
    Intro: undefined
};
  
export type RootStackScreenProps<T extends keyof RootStackParamList> = StackScreenProps<RootStackParamList, T>;

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function App() {

    return (
        <NavigationContainer>
            <SafeAreaView style={{ flex: 1 }}>
                <RootStack.Navigator>
                    <RootStack.Screen name="Tab" component={TabNavigation} />
                    <RootStack.Group>

                    </RootStack.Group>
                </RootStack.Navigator>
            </SafeAreaView>
        </NavigationContainer>
    );
}