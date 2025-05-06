// app/(tabs)/log.tsx
import React, { useState, useCallback } from 'react'
import {
  View,
  Text,
  FlatList,
  Button,
  StyleSheet,
  Alert,
} from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useFocusEffect } from '@react-navigation/native'

type Session = {
  id: string
  timestamp: string
  duration: number
}

export default function LogScreen() {
  const [sessions, setSessions] = useState<Session[]>([])

  // Reload whenever tab is focused
  useFocusEffect(
    useCallback(() => {
      (async () => {
        const raw = await AsyncStorage.getItem('sessions')
        setSessions(raw ? JSON.parse(raw) : [])
      })()
    }, [])
  )

  const clearAll = async () => {
    Alert.alert('Clear Logs?', 'This cannot be undone.', [
      { text: 'Cancel', style: 'cancel' },
      {
        text: 'OK', onPress: async () => {
          await AsyncStorage.removeItem('sessions')
          setSessions([])
        }
      }
    ])
  }

  return (
    <View style={styles.root}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>Session Logs</Text>
        <Button title="Clear" color="#c00" onPress={clearAll} />
      </View>

      {sessions.length === 0 ? (
        <Text style={styles.empty}>No sessions logged yet.</Text>
      ) : (
        <FlatList
          data={sessions}
          keyExtractor={item => item.id}
          renderItem={({ item }) => (
            <View style={styles.entry}>
              <Text style={styles.ts}>
                {new Date(item.timestamp).toLocaleString()}
              </Text>
              <Text style={styles.dur}>{item.duration}s</Text>
            </View>
          )}
        />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  root: {
    flex:1, padding:20, backgroundColor:'#fff'
  },
  headerRow: {
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginBottom:12,
  },
  title: { fontSize:24, fontWeight:'600' },
  empty: { textAlign:'center', marginTop:40, color:'#666' },
  entry: {
    padding:12,
    borderBottomWidth:1,
    borderColor:'#eee',
    flexDirection:'row',
    justifyContent:'space-between'
  },
  ts:  { fontSize:16 },
  dur: { fontSize:16, fontWeight:'500' },
})
