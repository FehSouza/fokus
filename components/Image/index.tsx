import { Image as ImageRN, StyleSheet, View } from 'react-native'

interface ImageProps {
  image: number
}

export const Image = ({ image }: ImageProps) => {
  return (
    <View style={style.container}>
      <ImageRN style={style.image} resizeMode="contain" fadeDuration={500} source={image} />
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
