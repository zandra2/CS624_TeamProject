import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@/app/auth/home';
import SignInScreen from '@/app/auth/signin';
import SignUpScreen from '@/app/auth/signup';
import TabNavigator from './TabNavigator';  // Notice we import TabNavigator here

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: true }}>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Tabs" component={TabNavigator} />
    </Stack.Navigator>
  );
}
