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
    width: '100%',
    marginTop: 'auto',
    paddingVertical: 32,
    paddingHorizontal: 24,
    borderTopWidth: 1,
    borderColor: theme.colors.blue500,
  },

  text: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 12,
    lineHeight: 19,
    textAlign: 'center',
    color: theme.colors.gray,
  },
})
