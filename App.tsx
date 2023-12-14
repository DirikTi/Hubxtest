import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StackScreenProps } from '@react-navigation/stack';
import React from 'react';
import { SafeAreaView } from 'react-native';

export type RootStackParamList = {
    Tab: undefined;
};
  
export type RootStackScreenProps<T extends keyof RootStackParamList> = StackScreenProps<RootStackParamList, T>;

const RootStack = createNativeStackNavigator<RootStackParamList>();

function App(): React.JSX.Element {

    return (
        <NavigationContainer>
            <SafeAreaView>
                <RootStack.Navigator>
                    
                    <RootStack.Group>

                    </RootStack.Group>
                </RootStack.Navigator>
            </SafeAreaView>
        </NavigationContainer>
    );
}

export default App;
