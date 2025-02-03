import { Tabs } from 'expo-router';
import React from 'react';
import { useColorScheme } from '@/hooks/useColorScheme';
import { FontAwesome } from "@expo/vector-icons";
import { PRIMARY } from '@/core/theme/colors';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: PRIMARY
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Tab one',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="photo" color={color} />,
          tabBarShowLabel: false,
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="favorite"
        options={{
          title: 'favorite',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="heart" color={color} />,
          tabBarShowLabel: false,
          headerShown: false,
        }}
      />
       <Tabs.Screen
        name="bookings"
        options={{
          title: 'Bookings',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="calendar-o" color={color} />,
          tabBarShowLabel: false,
          headerShown: false,
        }}
      />
          <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
          tabBarShowLabel: false,
          headerShown: false,
        }}
      />
      
    </Tabs>
  );
}
