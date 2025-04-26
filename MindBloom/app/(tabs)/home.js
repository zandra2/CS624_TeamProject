import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import CustomImage from '@/components/CustomImage';
import CustomImageButton from '@/components/CustomImageButton';
import axios from 'axios';

export default function HomeScreen({ navigation }) {
  const [username, setUsername] = useState('Makenna Max'); // Fetch from MongoDB later
  const [quote, setQuote] = useState('');

  const fetchAffirmation = async () => {
    try {
      const res = await axios.get('https://www.affirmations.dev/');
      setQuote(res.data.affirmation);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAffirmation();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image source={require('@/assets/images/MichaelDam.png')} style={styles.avatar} />
        <View style={styles.usercontainer}>
            <Text style={styles.welcome}>Welcome back, </Text>
            <Text style={styles.username}>{username}</Text>
        </View>
      </View>

      <CustomImage source={require('@/assets/images/PsoasStretch.png')}/>

      <View style={styles.grid}>
        {/* Affirmation Quote Button */}
        <TouchableOpacity style={styles.button} onPress={fetchAffirmation}>
            <CustomImageButton
            source={require('@/assets/images/first_button.png')}
            onPress={() => console.log('Pressed!')}
            // title="Get Quote"
            // source={require('@/assets/images/WesleyTingey.png')}
            />
        </TouchableOpacity>

        {/* Breathing Exercise Timer Button */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Timer')}>
            <CustomImageButton
            source={require('@/assets/images/second_button.png')}
            onPress={() => console.log('Pressed!')}
            // title="Get Quote"
            // source={require('@/assets/images/WesleyTingey.png')}
            />
        </TouchableOpacity>
        {/* Session Log Button */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Log')}>
            <CustomImageButton
            source={require('@/assets/images/third_button.png')}
            onPress={() => console.log('Pressed!')}
            // title="Get Quote"
            // source={require('@/assets/images/WesleyTingey.png')}
            />
        </TouchableOpacity>

        {/* Affirmation Quote Button */}
        {/* <TouchableOpacity style={styles.button} onPress={fetchAffirmation}>
          <Text style={styles.buttonText}>Get Quote</Text>
          <Text style={styles.quote}>{quote}</Text>
        </TouchableOpacity> */}

        {/* Breathing Exercise Timer Button */}
        {/* <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Timer')}>
          <Text style={styles.buttonText}>Start Timer</Text>
          <Text>Breathing Exercise</Text>
        </TouchableOpacity> */}

        {/* Session Log Button */}
        {/* <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Log')}>
          <Text style={styles.buttonText}>Log Session</Text>
          <Text>View Past Sessions</Text>
        </TouchableOpacity> */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: 20 },
  header: { flexDirection: 'row', alignItems: 'center', paddingVertical: 20, paddingHorizontal: 20},
  avatar: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  welcome: { fontSize: 12 },
  usercontainer: {flexDirection: 'column' },
  username: { fontSize: 24, fontWeight: 'bold', letterSpacing: 1 },
  grid: { marginTop: 20, paddingLeft: 20 },
  button: { backgroundColor: '#f0f0f0', marginVertical: 10, borderRadius: 10 },
  buttonText: { fontWeight: 'bold', fontSize: 16 },
  quote: { marginTop: 5, fontStyle: 'italic' },
});
