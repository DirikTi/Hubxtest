import type { CompositeScreenProps } from '@react-navigation/native';
import { BottomTabScreenProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import HomeScreen from '../screens/HomeTab/HomeScreen';
import DiagnoseScreen from '../screens/DiagnoseTab/DiagnoseScreen';
import ScannerScreen from '../screens/ScannerTab/ScannerScreen';
import GardenScreen from '../screens/GardenTab/GardenScreen';
import ProfielScreen from '../screens/ProfileTab/ProfileScreen';
import { DiagnoseTabIcon, GardenTabIcon, HomeTabIcon, ProfileTabIcon, ScannerTabIcon } from '../components/Icons';
import { Text, View } from 'react-native';
import { useTheme } from "@react-navigation/native";

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
    const { colors } = useTheme();
    return (
        <Tab.Navigator screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: colors.tabActive,
            tabBarInactiveTintColor: colors.tabInActive,
            tabBarLabel: ({ children, focused, color, position }) => (
                <Text style={{ fontSize: focused ? 12 : 10, color, fontWeight: "400", marginBottom: 5 }}>{children}</Text>
            ),
            tabBarStyle: {
                backgroundColor: colors.tab
            }
         }}>
            <Tab.Screen name="HomeTab" component={HomeScreen} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <HomeTabIcon color={color} size={size} />
                    ),
                    tabBarLabel: "Home"
                }}
            />
            <Tab.Screen name="DiagnoseTab" component={DiagnoseScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <DiagnoseTabIcon color={color} size={size} />
                    ),
                    tabBarLabel: "Diagnose"
                }}
            />
            <Tab.Screen name="ScannerTab" component={ScannerScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <View style={{ 
                            alignItems: "center", justifyContent: "center", 
                            backgroundColor: colors.primary, borderColor: "#FFFFFF3D", 
                            width: 64, height: 64,
                            borderRadius: 100, borderWidth: 4, bottom: 15
                        }}>
                            <ScannerTabIcon color={"#FFF"} size={25} />
                        </View>
                    ),
                    tabBarLabel: ""
                }}
            />
            <Tab.Screen name="GardenTab" component={GardenScreen} 
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <GardenTabIcon color={color} size={size} />
                    ),
                    tabBarLabel: "My Garden"
                }}
            />
            <Tab.Screen name="ProfileTab" component={ProfielScreen}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <ProfileTabIcon color={color} size={size} />
                    ),
                    tabBarLabel: "Profile"
                }}
            />
        </Tab.Navigator>
    )
}