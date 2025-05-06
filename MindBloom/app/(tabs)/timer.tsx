// app/(tabs)/timer.tsx
import React, { useRef, useEffect, useState } from 'react'
import {
  Animated,
  Easing,
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  Alert,
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useRouter } from 'expo-router'

const { width }      = Dimensions.get('window')
const CIRCLE_SIZE    = width * 0.6
const BREATH_DURATION = 4000 // ms

export default function TimerScreen() {
  const scale = useRef(new Animated.Value(1)).current
  const [phase, setPhase] = useState<'Inhale'|'Exhale'>('Inhale')
  const [seconds, setSeconds] = useState(0)
  const router = useRouter()

  // Run and track the breathing cycle
  useEffect(() => {
    let timerId: NodeJS.Timeout
    const runCycle = () => {
      setPhase('Inhale')
      Animated.timing(scale, {
        toValue: 1.5,
        duration: BREATH_DURATION,
        easing: Easing.inOut(Easing.ease),
        useNativeDriver: true,
      }).start(() => {
        setPhase('Exhale')
        Animated.timing(scale, {
          toValue: 1,
          duration: BREATH_DURATION,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }).start(() => {
          runCycle()
        })
      })

      // track seconds
      setSeconds(0)
      clearInterval(timerId)
      timerId = setInterval(() => setSeconds(s => s + 1), 1000)
    }

    runCycle()
    return () => clearInterval(timerId)
  }, [scale])

  // Write a new session to AsyncStorage
  const logSession = async () => {
    try {
      const newEntry = {
        id: Date.now().toString(),
        timestamp: new Date().toISOString(),
        duration: seconds,
      }
      const raw = await AsyncStorage.getItem('sessions')
      const sessions = raw ? JSON.parse(raw) : []
      sessions.push(newEntry)
      await AsyncStorage.setItem('sessions', JSON.stringify(sessions))
      Alert.alert('Logged!', `Session of ${seconds}s saved.`)
    } catch (e) {
      Alert.alert('Error', 'Could not save session.')
    }
  }

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.circle, { transform: [{ scale }] }]} />
      <Text style={styles.header}>Breathing Exercise</Text>
      <Text style={styles.phase}>{phase}</Text>
      <Text style={styles.timer}>{seconds}s</Text>

      {/* 3️⃣ Buttons to navigate or log */}
      <View style={styles.buttons}>
        <Button title="Log Session" onPress={logSession} />
        <Button title="View Logs" onPress={() => router.push('/log')} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, backgroundColor: '#E8F4F8',
    alignItems: 'center', justifyContent: 'center', padding: 20,
  },
  circle: {
    width: CIRCLE_SIZE, height: CIRCLE_SIZE,
    borderRadius: CIRCLE_SIZE/2, backgroundColor: '#A3D5FF',
    marginBottom: 20,
  },
  header: { fontSize: 24, fontWeight:'600' },
  phase:  { fontSize: 20, color: '#333', marginVertical: 4 },
  timer:  { fontSize: 18, marginBottom: 16 },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginTop: 20,
  },
})


// import { StyleSheet, Image, Platform } from 'react-native';

// import { Collapsible } from '@/components/Collapsible';
// import { ExternalLink } from '@/components/ExternalLink';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';
// import { IconSymbol } from '@/components/ui/IconSymbol';

// export default function TabTwoScreen() {
//   return (
//     <ParallaxScrollView
//       headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
//       headerImage={
//         <IconSymbol
//           size={310}
//           color="#808080"
//           name="chevron.left.forwardslash.chevron.right"
//           style={styles.headerImage}
//         />
//       }>
//       <ThemedView style={styles.titleContainer}>
//         <ThemedText type="title">Explore</ThemedText>
//       </ThemedView>
//       <ThemedText>This app includes example code to help you get started.</ThemedText>
//       <Collapsible title="File-based routing">
//         <ThemedText>
//           This app has two screens:{' '}
//           <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> and{' '}
//           <ThemedText type="defaultSemiBold">app/(tabs)/timer.tsx</ThemedText>
//         </ThemedText>
//         <ThemedText>
//           The layout file in <ThemedText type="defaultSemiBold">app/(tabs)/_layout.tsx</ThemedText>{' '}
//           sets up the tab navigator.
//         </ThemedText>
//         <ExternalLink href="https://docs.expo.dev/router/introduction">
//           <ThemedText type="link">Learn more</ThemedText>
//         </ExternalLink>
//       </Collapsible>
//       <Collapsible title="Android, iOS, and web support">
//         <ThemedText>
//           You can open this project on Android, iOS, and the web. To open the web version, press{' '}
//           <ThemedText type="defaultSemiBold">w</ThemedText> in the terminal running this project.
//         </ThemedText>
//       </Collapsible>
//       <Collapsible title="Images">
//         <ThemedText>
//           For static images, you can use the <ThemedText type="defaultSemiBold">@2x</ThemedText> and{' '}
//           <ThemedText type="defaultSemiBold">@3x</ThemedText> suffixes to provide files for
//           different screen densities
//         </ThemedText>
//         <Image source={require('@/assets/images/react-logo.png')} style={{ alignSelf: 'center' }} />
//         <ExternalLink href="https://reactnative.dev/docs/images">
//           <ThemedText type="link">Learn more</ThemedText>
//         </ExternalLink>
//       </Collapsible>
//       <Collapsible title="Custom fonts">
//         <ThemedText>
//           Open <ThemedText type="defaultSemiBold">app/_layout.tsx</ThemedText> to see how to load{' '}
//           <ThemedText style={{ fontFamily: 'SpaceMono' }}>
//             custom fonts such as this one.
//           </ThemedText>
//         </ThemedText>
//         <ExternalLink href="https://docs.expo.dev/versions/latest/sdk/font">
//           <ThemedText type="link">Learn more</ThemedText>
//         </ExternalLink>
//       </Collapsible>
//       <Collapsible title="Light and dark mode components">
//         <ThemedText>
//           This template has light and dark mode support. The{' '}
//           <ThemedText type="defaultSemiBold">useColorScheme()</ThemedText> hook lets you inspect
//           what the user's current color scheme is, and so you can adjust UI colors accordingly.
//         </ThemedText>
//         <ExternalLink href="https://docs.expo.dev/develop/user-interface/color-themes/">
//           <ThemedText type="link">Learn more</ThemedText>
//         </ExternalLink>
//       </Collapsible>
//       <Collapsible title="Animations">
//         <ThemedText>
//           This template includes an example of an animated component. The{' '}
//           <ThemedText type="defaultSemiBold">components/HelloWave.tsx</ThemedText> component uses
//           the powerful <ThemedText type="defaultSemiBold">react-native-reanimated</ThemedText>{' '}
//           library to create a waving hand animation.
//         </ThemedText>
//         {Platform.select({
//           ios: (
//             <ThemedText>
//               The <ThemedText type="defaultSemiBold">components/ParallaxScrollView.tsx</ThemedText>{' '}
//               component provides a parallax effect for the header image.
//             </ThemedText>
//           ),
//         })}
//       </Collapsible>
//     </ParallaxScrollView>
//   );
// }

// const styles = StyleSheet.create({
//   headerImage: {
//     color: '#808080',
//     bottom: -90,
//     left: -35,
//     position: 'absolute',
//   },
//   titleContainer: {
//     flexDirection: 'row',
//     gap: 8,
//   },
// });
