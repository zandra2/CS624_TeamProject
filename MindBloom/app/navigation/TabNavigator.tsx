import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardScreen from '@/app/(tabs)/dashboard'
import TimerScreen from '@/app/(tabs)/timer';
// import LogScreen from '@/app/(tabs)/log';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Dashboard" component={DashboardScreen} />
      <Tab.Screen name="Timer" component={TimerScreen} />
      {/* <Tab.Screen name="Log" component={LogScreen} /> */}
    </Tab.Navigator>
  );
}
