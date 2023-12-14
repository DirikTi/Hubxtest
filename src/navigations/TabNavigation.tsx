import type { CompositeScreenProps, NavigatorScreenParams } from '@react-navigation/native';
import { BottomTabScreenProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

export type TabParamList = {
    HomeTab: undefined;
    DiagnoseTab: undefined;
    ScannerTab: undefined;
    GardenTab: undefined;
    ProfileTab: undefined; 
};

export type TabScreenProps<T extends keyof TabParamList> = CompositeScreenProps<
    BottomTabScreenProps<TabParamList, T>,
    NativeStackScreenProps<RootStackParamList, "Tab">
>;

const Tab = createBottomTabNavigator<TabParamList>();

export default function TabNavigation() {
    return (
        <Tab.Navigator>
        </Tab.Navigator>
    )
}