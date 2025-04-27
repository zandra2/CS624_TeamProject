import { View, Text, TextInput, Button, StyleSheet, ImageBackground, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
// import api from '../api/api';

export default function SignUpScreen() {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      const res = await api.post('/auth/signup', { firstName, lastName, email, password });
      console.log(res.data);
      navigation.navigate('Dashboard' as never);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ImageBackground source={require('@/assets/images/DaigaEllaby.png')} style={styles.background}> 
        <View style={styles.container}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
            <Text style={styles.title}>MindBloom</Text>
        </TouchableOpacity>
        <TextInput placeholder="First Name" value={firstName} onChangeText={setFirstName} style={styles.input}/>
        <TextInput placeholder="Last Name" value={lastName} onChangeText={setLastName} style={styles.input}/>
        <TextInput placeholder="Email" value={email} onChangeText={setEmail} style={styles.input}/>
        <TextInput placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} style={styles.input}/>
        <TouchableOpacity onPress={handleSignUp}>
            <Text style={styles.signupbtnText}>Sign Up</Text>
        </TouchableOpacity>
        {/* <Button title="Sign Up" onPress={handleSignUp} /> */}
        <TouchableOpacity onPress={() => navigation.navigate('SignIn')}> 
          <Text style={styles.msg}>Already have an account? Sign In</Text>
        </TouchableOpacity>
        </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {width: '100%', height: '100%'},
  container: { flex: 1, justifyContent: 'center', padding: 20, color: '#fff'},
  title: { fontSize: 50, marginBottom: 10, textAlign: 'center', color: '#fff'},
//   title: { fontSize: 32, textAlign: 'center', marginBottom: 20 }, // For Button Tag
  signupbtnText: { color: '#1D77A2', textAlign: 'center', marginTop: 10, fontWeight: 'bold', backgroundColor: '#fff', padding: 10, borderRadius: 5},
  input: { borderWidth: 2, borderColor: '#ccc', padding: 10, marginVertical: 10, color: '#fff' },
  msg: { textAlign: 'center', marginTop: 12, color:'#fff' },
//   link: { color: '#fff', textAlign: 'center', marginTop: 10, fontWeight: 'bold', backgroundColor: '#1D77A2', padding: 10, borderRadius: 5, borderColor: '#1D77A2', borderWidth: 3}
});
