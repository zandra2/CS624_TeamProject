// TESTING TSX FILE
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import GradientButton from '@/components/GradientButton';
import CustomImage from '@/components/CustomImage';
import { timerData } from '@/app/data';
import axios from 'axios';

export default function TimerScreen() {
  const [timer, setTimer] = useState(0);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout | null>(null);
    // const [intervalId, setIntervalId] = useState(null);
  // const [timer, setTimer] = useState<number>(0);

  const startTimer = () => {
    const id = setInterval(() => {
      setTimer(prev => prev + 1);
    }, 1000);
    setIntervalId(id);
  };

  const pauseTimer = () => {
    if (intervalId) clearInterval(intervalId);
    setIntervalId(null);
  };

  const resetTimer = async () => {
    if (intervalId) clearInterval(intervalId);
    setIntervalId(null);

    if (timer > 0) {
      const now = new Date();
      try {
        await axios.post('http://YOUR_SERVER_IP:5000/session', {
          date: now.toLocaleDateString(),
          time: Math.floor(timer / 60),
        });
      } catch (error) {
        console.error(error);
      }
    }

    setTimer(0);
  };

  return (
    <ScrollView style={styles.container}>
      <CustomImage source={timerData.hero} />
      <Text style={styles.title}>Breathing Exercise</Text>
      <View style={styles.lineContainer}>
        <View style={styles.line} />
      </View> 
      <Text style={styles.timer}>{timer} sec</Text>
      <View style={styles.timerContainer}>
        <View style={styles.btnContainer}>
          <TouchableOpacity style={[styles.timerbtn, styles.startbtn]} onPress={startTimer}>
              <Text>Start</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.timerbtn, styles.pausebtn]} onPress={pauseTimer}>
              <Text>Pause</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.timerbtn, styles.resetbtn]} onPress={resetTimer}>
              <Text>Reset</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.timerbtn, styles.logbtn]} onPress={() => navigation.navigate('Log', { duration: timer })}>
              <Text>Log Session</Text>
          </TouchableOpacity>
            {/* <View style={styles.innerContainer}> */}
            {/* <GradientButton title="Start" onPress={startTimer} />
              <GradientButton title="Pause" onPress={pauseTimer} />
              <GradientButton title="Stop" onPress={stopTimer} /> */}
            {/* </View> */}
        </View>
      </View>
     
      <View style={styles.lineContainer}>
        <View style={styles.line} />
      </View>

      <View style={styles.textContainer}>
        <View style={styles.innerTextContainer}>
          <Text style={styles.timerSubTitle}>{timerData.breathing.subtitle}</Text>
          <View  style={styles.rightContainer}>
            <Text style={styles.timerContent}>{timerData.breathing.content}</Text>
            <View>
              <View style={styles.contentLine} />
            </View>
          </View>
        </View> 

        <View style={styles.innerTextContainer}>
          <Text style={styles.timerSubTitle}>{timerData.belly.subtitle}</Text>
          <View  style={styles.rightContainer}>
            <Text style={styles.timerContent}>{timerData.belly.content}</Text>
            <View>
              <View style={styles.contentLine} />
            </View>
          </View>
        </View>

        <View style={styles.innerTextContainer}>
          <Text style={styles.timerSubTitle}>{timerData.box.subtitle}</Text>
          <View  style={styles.rightContainer}>
            <Text style={styles.timerContent}>{timerData.box.content}</Text>
          <View>
          <View style={styles.contentLine} /></View>
          </View>
        </View>

        <View style={styles.innerTextContainer}>
          <Text style={styles.timerSubTitle}>{timerData.pursedLip.subtitle}</Text>
          <View  style={styles.rightContainer}>
            <Text style={styles.timerContent}>{timerData.pursedLip.content}</Text>
          <View>
              <View style={styles.contentLine} />
            </View>
          </View>
        </View>

      </View>    
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff'},
  title: {paddingLeft: 20, fontSize: 20, fontWeight:'bold', marginTop: 20 },
  lineContainer: { alignItems: 'center', marginVertical: 20 },
  line: { height: 1, backgroundColor: '#ccc', width: '90%'},
  timerContainer: { flex: 1 },
  timer: { marginTop: 10, paddingLeft: 20, fontSize: 40, fontWeight: 'bold', marginBottom: 20 },
  btnContainer: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10, paddingHorizontal: 20},
  timerbtn: { borderRadius: 10, paddingHorizontal: 12, paddingVertical: 8 },
  startbtn: {backgroundColor: '#D2F6EB'},
  pausebtn: {backgroundColor: '#E2E2E2'},
  resetbtn: {backgroundColor: '#F6D2F6'},
  logbtn: {backgroundColor: '#F6D2D2'},
  
  // Content 
  textContainer: {justifyContent: 'center'},
  innerTextContainer: { flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 20, gap: 15 },
  rightContainer: {maxWidth: '60%', flex: 1, justifyContent: 'flex-start', flexDirection: 'column'},
  contentLine: { height: 1, backgroundColor: '#ccc', width: '100%', marginVertical: 15},
  timerSubTitle: { fontWeight: 'bold', fontSize: 12 },
  timerContent: {fontSize: 12},
});
