// import { Link } from 'expo-router';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// // import HomeScreen from '@/app/(tabs)/index';
// // import HomeScreen from '@/app/auth/home';
// import SignInScreen from '@/app/auth/signin';
// import SignUpScreen from '@/app/auth/signup';
// // import SignUpScreen from './src/screens/SignUpScreen';

// const Stack = createNativeStackNavigator();

// export default function HomeScreen() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
//       {/* <Link href="/signin" name='SignIn' component={SignInScreen} />
//       <Link href="/signup" name='SignUp'component={SignUpScreen} /> */}
//       <Stack.Screen name="Home" component={HomeScreen} />
//       <Stack.Screen name="Signin" component={SignInScreen} />
//       <Stack.Screen name="Signup" component={SignUpScreen} />
//         {/* Add /dashboard later */}
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

import { View, Text, ImageBackground, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function HomeScreen() {
  const navigation = useNavigation();

  return (
    <ImageBackground source={require('@/assets/images/OksanaTaran.png')} style={styles.background}>
      <TouchableOpacity onPress={() => navigation.navigate('SignIn')}>
        <Text style={styles.title}>MindBloom</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: { flex: 1, justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%' },
  title: { fontSize: 50, color: '#fff', fontWeight: 'medium', letterSpacing: 0 },
});