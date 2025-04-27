// import { NavigationContainer } from '@react-navigation/native';
// import AuthStack from '@/navigation/AuthStack';

// export default function App() {
//   return (
//     <NavigationContainer>
//       <AuthStack />
//     </NavigationContainer>
//   );
// }

import { NavigationContainer } from '@react-navigation/native';
import { AuthStack } from '@/app/navigation/AuthStack';
import { TabNavigator } from '@/app/navigation/TabNavigator';
import { useState } from 'react';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // later replace with secure auth check

  return (
    <NavigationContainer>
      {isLoggedIn ? <TabNavigator /> : <AuthStack />}
    </NavigationContainer>
  );
}