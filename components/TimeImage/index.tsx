import { Image, StyleSheet, View } from 'react-native'

interface TimeImageProps {
  image: number
}

export const TimeImage = ({ image }: TimeImageProps) => {
  return (
    <View style={style.container}>
      <Image style={style.image} resizeMode="contain" fadeDuration={500} source={image} />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    width: '100%',
    maxHeight: 422,
    aspectRatio: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  image: {
    maxWidth: '100%',
  },
})
