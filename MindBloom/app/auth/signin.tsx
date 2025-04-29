import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
// import api from '../api/api';  //TODO: SETUP BACKEND

export default function SignInScreen() {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Future Authentication Feature
  const handleSignIn = async () => {
    try {
      const res = await api.post('/auth/login', { email, password });
      console.log(res.data);
      navigation.navigate('Dashboard' as never); // /dashboard
      // navigation.navigate('Dashboard')

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ImageBackground source={require('@/assets/images/KarstenWinegeart.png')} style={styles.background}>       
      {/* <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.title}>MindBloom</Text>
      </TouchableOpacity> */}
      <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.title}>MindBloom</Text>
      </TouchableOpacity>
        <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input}/>
        <TextInput placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} style={styles.input}/>
        {/* <Button title="Sign In" onPress={handleSignIn} color="#4CAF50"/> */}
        <TouchableOpacity onPress={handleSignIn}>
          <Text style={styles.signinbtnText}>Sign In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
          <Text style={styles.link}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {width: '100%', height: '100%'},
  container: { flex: 1, justifyContent: 'center', padding: 20 },
  signinbtnText: {marginTop: 20, backgroundColor: '#1D77A2', padding: 11, textAlign: 'center', fontWeight: 'bold', color: '#fff', borderRadius: 5}, 
  title: { fontSize: 50, marginBottom: 40, textAlign: 'center', color: '#fff'},
  input: { borderBottomWidth: 2, borderBottomColor: '#fff', padding: 10, marginVertical: 10, color: '#fff', fontWeight: 'bold'},
  link: { color: '#1D77A2', textAlign: 'center', marginTop: 10, fontWeight: 'bold', backgroundColor: '#fff', padding: 10, borderRadius: 5}
});
