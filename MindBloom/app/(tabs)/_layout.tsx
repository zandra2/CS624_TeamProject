import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import DashboardScreen from './dashboard';


// new func
function capitalize(word: string) {
  if (!word) return '';
  return word.charAt(0).toUpperCase() + word.slice(1);
}

// WORKING-TRYING-SOMETHING NEW
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute',
          },
          default: {},
        }),
        title: capitalize(route.name),  // 👈 capitalize tab title automatically
      })}
    >

      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="home" color={color} />,
        }}
      />
      <Tabs.Screen
        name="dashboard"
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="dashboard" color={color} />,
        }}
      />
      <Tabs.Screen
        name="timer"
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="watch" color={color} />,
        }}
      />
      <Tabs.Screen
        name="log"
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name="book" color={color} />,
        }}
      />
    </Tabs>
  );


//ORIGINAL CODE
// export default function TabLayout() {
//   const colorScheme = useColorScheme();

//   return (
//     <Tabs
//       screenOptions={{
//         tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
//         headerShown: false,
//         tabBarButton: HapticTab,
//         tabBarBackground: TabBarBackground,
//         tabBarStyle: Platform.select({
//           ios: {
//             // Use a transparent background on iOS to show the blur effect
//             position: 'absolute',
//           },
//           default: {},
//         }),
//       }}>
//       <Tabs.Screen
//         name="index"
//         // name='dashboard'
//         options={{
//           title: 'Main',
//           tabBarIcon: ({ color }) => <IconSymbol size={28} name="house.fill" color={color} />,
//         }}
//       />
//       <Tabs.Screen
//         name="home"
//         options={{
//           title: 'Timer',
//           tabBarIcon: ({ color }) => <IconSymbol size={28} name="clock.fill" color={color} />,
//         }}
//       />
//       <Tabs.Screen
//         name="log"
//         options={{
//           title: 'Log',
//           tabBarIcon: ({ color }) => <IconSymbol size={28} name="book.fill" color={color} />,
//         }}
//       />
//     </Tabs>
//   );
}
