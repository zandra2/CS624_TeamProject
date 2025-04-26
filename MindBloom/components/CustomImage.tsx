import { StyleSheet, Image, ImageSourcePropType } from 'react-native';

interface CustomImageProps {
  source: ImageSourcePropType;
};

export default function CustomImage({ source }: CustomImageProps) {
  return <Image source={source} style={styles.image} resizeMode="cover" />;
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
});

// interface CustomImageProps {
//   imgSource: any;
// };

// export default function CustomImage({ imgSource }: CustomImageProps) {
//   return <Image source={imgSource} style={styles.image} />;
// }