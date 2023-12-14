import type { CompositeScreenProps } from '@react-navigation/native';
import { BottomTabScreenProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import HomeScreen from '../screens/HomeTab/HomeScreen';
import DiagnoseScreen from '../screens/DiagnoseTab/DiagnoseScreen';
import ScannerScreen from '../screens/ScannerTab/ScannerScreen';
import GardenScreen from '../screens/GardenTab/GardenScreen';
import ProfielScreen from '../screens/ProfileTab/ProfileScreen';
import { DiagnoseTabIcon, GardenTabIcon, HomeTabIcon, ProfileTabIcon } from '../components/Icons';

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
        <Tab.Navigator screenOptions={{ 
            headerShown: false
         }}>
            <Tab.Screen name="HomeTab" component={HomeScreen} 
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <HomeTabIcon color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen name="DiagnoseTab" component={DiagnoseScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <DiagnoseTabIcon color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen name="ScannerTab" component={ScannerScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <HomeTabIcon color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen name="GardenTab" component={GardenScreen} 
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <GardenTabIcon color={color} size={size} />
                    )
                }}
            />
            <Tab.Screen name="ProfileTab" component={ProfielScreen}
                options={{
                    tabBarIcon: ({ focused, color, size }) => (
                        <ProfileTabIcon color={color} size={size} />
                    )
                }}
            />
        </Tab.Navigator>
    )
}