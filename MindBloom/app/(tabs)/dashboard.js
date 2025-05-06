import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import CustomImage from '@/components/CustomImage';
import CustomImageButton from '@/components/CustomImageButton';
import { dashboardData } from '@/app/data';
import axios from 'axios';
import { useRouter } from 'expo-router';
//TODO:  Both router and Navigation are not working

export default function DashboardScreen({ navigation }) {
  const [username, setUsername] = useState('Makenna Max'); // Fetch from MongoDB later
  const [quote, setQuote] = useState('');
  const router = useRouter();

  const fetchAffirmation = async () => {
    try {
      const res = await axios.get('https://api.quotable.io/random');
      // const res = await axios.get('https://www.affirmations.dev/'); //CORS ERROR NEED TO SETUP BACKEND
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
        <Image source={dashboardData.avatar} style={styles.avatar} />
        <View style={styles.usercontainer}>
            <Text style={styles.welcome}>Welcome back, </Text>
            <Text style={styles.username}>{username}</Text>
        </View>
      </View>

      <CustomImage source={dashboardData.hero}/>

      <View style={styles.grid}>
        {/* Affirmation Quote Button */}
        <TouchableOpacity style={styles.button} onPress={fetchAffirmation}>
            <CustomImageButton
            source={dashboardData.getQuoteBtn}
            onPress={() => console.log('Pressed!')}
            />
        </TouchableOpacity>

        {/* Breathing Exercise Timer Button */}
        <TouchableOpacity style={styles.button} onPress={() => router.push('timer')}>
            <CustomImageButton
            source={dashboardData.startTimerBtn}
            onPress={() => console.log('Pressed!')}
            />
        </TouchableOpacity>
        {/* Session Log Button */}
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('log')}>
            <CustomImageButton
            source={dashboardData.logSessionBtn}
            onPress={() => console.log('Pressed!')}
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
