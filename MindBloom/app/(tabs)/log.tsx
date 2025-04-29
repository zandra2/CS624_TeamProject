import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import GradientButton from '@/components/GradientButton';

interface Session {
  _id: string;
  date: string;
  time: number;
}

export default function LogScreen() {
  const [sessions, setSessions] = useState<Session[]>([]);

  useEffect(() => {
    const fetchSessions = async () => {
      const res = await axios.get<Session[]>('http://YOUR_SERVER_IP:5000/sessions');
      setSessions(res.data);
    };

    fetchSessions();
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={sessions}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.item}>
            <Text>{item.date}</Text>
            <Text>{item.time} mins</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  item: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 },
});



// JAVASCRIPT
// import React, { useState } from 'react';
// import { View, Text, Button, FlatList, StyleSheet } from 'react-native';
// import CustomImage from '../components/CustomImage';

// export default function LogScreen({ route }) {
//   const [sessions, setSessions] = useState([]);

//   const addSession = () => {
//     const now = new Date();
//     setSessions([...sessions, { id: now.toISOString(), date: now.toLocaleDateString(), time: Math.floor(Math.random() * 30) + 1 }]);
//   };

//   const deleteSession = (id) => {
//     setSessions(sessions.filter((session) => session.id !== id));
//   };

//   return (
//     <View style={styles.container}>
//       <CustomImage source="https://picsum.photos/600/302" style={{ marginVertical: 10 }} />
//       <Button title="Add Session" onPress={addSession} />

//       <FlatList
//         data={sessions}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => (
//           <View style={styles.sessionItem}>
//             <Text>{item.date} - {item.time} mins</Text>
//             <Button title="Delete" color="red" onPress={() => deleteSession(item.id)} />
//           </View>
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: { flex: 1, padding: 20 },
//   sessionItem: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10, backgroundColor: '#f9f9f9', padding: 10, borderRadius: 10 },
// });
