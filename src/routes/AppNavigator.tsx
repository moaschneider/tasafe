import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { Colors, Spacing } from '../styles/Theme';

import SplashScreen from '../pages/SplashScreen';
import LoginScreen from '../pages/LoginScreen';
import FindRidesScreen from '../pages/FindRidesScreen';
import ProfileScreen from '../pages/ProfileScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

/**
 * Navegador principal de abas para telas autenticadas
 */
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.textSecondary,
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: Colors.border,
          paddingTop: Spacing.sm,
          paddingBottom: Spacing.xxl,
          // height: 110,
        },
      }}
    >
      <Tab.Screen
        name="FindRides"
        component={FindRidesScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

/**
 * Navegador raiz para todo o app
 */
export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen 
          name="Splash" 
          component={SplashScreen}
          options={{ gestureEnabled: false }}
        />
        <Stack.Screen 
          name="Login" 
          component={LoginScreen}
          options={{ gestureEnabled: false }}
        />
        <Stack.Screen 
          name="MainTabs" 
          component={MainTabs}
          options={{ gestureEnabled: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

