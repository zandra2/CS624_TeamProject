import React from 'react';
import { TouchableOpacity, ImageBackground, Text, StyleSheet, ImageSourcePropType } from 'react-native';

interface CustomImageButtonProps {
  title: string;
  source: ImageSourcePropType;
  onPress: () => void;
};

export default function CustomImageButton({ title, source, onPress }: CustomImageButtonProps) {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <ImageBackground source={source} style={styles.image} imageStyle={styles.imageBorder}>
        <Text style={styles.text}>{title}</Text>
      </ImageBackground>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 100,
    borderRadius: 20,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageBorder: {
    borderRadius: 20,
  },
  text: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingHorizontal: 5,
  },
});
