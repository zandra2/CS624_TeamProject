// WORKING 
import AuthStack from '@/app/navigation/AuthStack';

export default function App() {
   return (
    <AuthStack />
  );
}


//MESSED UP home.tsx layout
// import { View } from 'react-native';
// import HomeScreen from '../auth/home';
// import TabNavigator from '@/app/navigation/TabNavigator';
// import { useState } from 'react';
// import DashboardScreen from './dashboard';

// export default function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // later replace with secure auth check
//   return (
//     <View>
//     {isLoggedIn ? <DashboardScreen navigation={undefined} /> : <HomeScreen />}
//     </View>
//   );
// }


// import { NavigationContainer } from '@react-navigation/native';
// import AuthStack from '@/app/navigation/AuthStack';
// import TabNavigator from '@/app/navigation/TabNavigator';
// import { useState } from 'react';

// export default function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // later replace with secure auth check

//   return (
//     <NavigationContainer>
//       {isLoggedIn ? <TabNavigator /> : <AuthStack />}
//     </NavigationContainer>
//   );
// }


//RENDER MAIN PAGE ***NOT WORKING***
// import App from '@/app/App';

// export default function HomeScreen() {
//    return (
//     <App />
//   );
// }


//NOT WORKING
// import { NavigationContainer } from '@react-navigation/native';
// import AuthStack from '@/app/navigation/AuthStack';
// import TabNavigator from '@/app/navigation/TabNavigator';
// import { useState } from 'react';

// export default function App() {
//   const [isLoggedIn, setIsLoggedIn] = useState(true); // later replace with secure auth check

//   return (
//     <NavigationContainer>
//       {isLoggedIn ? <TabNavigator /> : <AuthStack />}
//     </NavigationContainer>
//   );
// }


//WORKING *******
// import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
// import { useNavigation } from '@react-navigation/native';

// export default function HomeScreen() {
//   const navigation = useNavigation();

//   return (
//     <ImageBackground source={require('@/assets/images/OksanaTaran.png')} style={styles.background}>
//       <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
//         <Text style={styles.title}>MindBloom</Text>
//       </TouchableOpacity>
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     width: '100%',
//     height: '100%'
//   },
//   title: {
//     fontSize: 50,
//     color: '#fff',
//     fontWeight: 'medium',
//     letterSpacing: 3,
//   }
// });


// NOT USING
// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import axios from 'axios';
// import CustomImage from '@/components/CustomImage';
// import AffirmationButton from '@/components/AffirmationButton';

// export default function HomeScreen() {
//   // const [affirmation, setAffirmation] = useState<string>('');

//   // const fetchAffirmation = async () => {
//   //   const res = await axios.get<{ affirmation: string }>('https://www.affirmations.dev/');
//   //   setAffirmation(res.data.affirmation);
//   // };

//   // useEffect(() => {
//   //   fetchAffirmation();
//   // }, []);
 
//   return (
//     <View style={styles.container}>
//       <CustomImage source={require('../../assets/images/OksanaTaran.png')} />
//       <Text style={styles.title}>MindBloom</Text>
//       {/* <Text style={styles.quote}>"{affirmation}"</Text> */}
//       {/* <AffirmationButton title="Get New Quote" onPress={fetchAffirmation} /> */}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, backgroundColor: '#fff' },
//   title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
//   quote: { fontSize: 18, fontStyle: 'italic', marginVertical: 20 },
// });




// ORIGINAL CODE
// import { Image, StyleSheet, Platform } from 'react-native';

// import { HelloWave } from '@/components/HelloWave';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';

// export default function HomeScreen() {
//   return (
//     <ParallaxScrollView
//       headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
//       headerImage={
//         <Image
//           source={require('@/assets/images/partial-react-logo.png')}
//           style={styles.reactLogo}
//         />
//       }>
//       <ThemedView style={styles.titleContainer}>
//         <ThemedText type="title">Welcome!</ThemedText>
//         <HelloWave />
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 1: Try it</ThemedText>
//         <ThemedText>
//           Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
//           Press{' '}
//           <ThemedText type="defaultSemiBold">
//             {Platform.select({
//               ios: 'cmd + d',
//               android: 'cmd + m',
//               web: 'F12'
//             })}
//           </ThemedText>{' '}
//           to open developer tools.
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 2: Explore</ThemedText>
//         <ThemedText>
//           Tap the Explore tab to learn more about what's included in this starter app.
//         </ThemedText>
//       </ThemedView>
//       <ThemedView style={styles.stepContainer}>
//         <ThemedText type="subtitle">Step 3: Get a fresh start</ThemedText>
//         <ThemedText>
//           When you're ready, run{' '}
//           <ThemedText type="defaultSemiBold">npm run reset-project</ThemedText> to get a fresh{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> directory. This will move the current{' '}
//           <ThemedText type="defaultSemiBold">app</ThemedText> to{' '}
//           <ThemedText type="defaultSemiBold">app-example</ThemedText>.
//         </ThemedText>
//       </ThemedView>
//     </ParallaxScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   titleContainer: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: 8,
//   },
//   stepContainer: {
//     gap: 8,
//     marginBottom: 8,
//   },
//   reactLogo: {
//     height: 178,
//     width: 290,
//     bottom: 0,
//     left: 0,
//     position: 'absolute',
//   },
// });
