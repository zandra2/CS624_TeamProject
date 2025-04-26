import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface AffirmationButtonProps {
  onPress: () => void;
  title: string;
}

export default function AffirmationButton({ onPress, title }: AffirmationButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={0.8}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: { backgroundColor: '#4c669f', padding: 15, borderRadius: 10 },
  text: { color: '#fff', fontWeight: 'bold', textAlign: 'center' },
});
