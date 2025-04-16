import { theme } from '@/theme'
import { StyleSheet, Text, View } from 'react-native'

export const Footer = () => {
  return (
    <View style={style.container}>
      <Text style={style.text}>Projeto fictício e sem fins comerciais.</Text>
      <Text style={style.text}>Desenvolvido por Alura.</Text>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    marginTop: 32,
  },

  text: {
    color: theme.colors.gray,
    fontSize: 12,
    textAlign: 'center',
  },
})
