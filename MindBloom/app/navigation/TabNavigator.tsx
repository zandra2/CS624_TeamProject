import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardScreen from '@/app/(tabs)/dashboard'
import TimerScreen from '@/app/(tabs)/timer';
import LogScreen from '@/app/(tabs)/log';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="dashboard" component={DashboardScreen} />
      <Tab.Screen name="timer" component={TimerScreen} />
      <Tab.Screen name="log" component={LogScreen} />
    </Tab.Navigator>
  );
}
