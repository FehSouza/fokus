import { ContainerKeyboardAvoiding, Form } from '@/components'
import { theme } from '@/theme'
import { StyleSheet, Text } from 'react-native'

export default function AddTask() {
  return (
    <ContainerKeyboardAvoiding>
      <Text style={style.title}>Adicionar tarefa:</Text>
      <Form />
    </ContainerKeyboardAvoiding>
  )
}

const style = StyleSheet.create({
  title: {
    paddingHorizontal: 24,
    fontFamily: 'Unbounded_400Regular',
    fontSize: 26,
    lineHeight: 49,
    textAlign: 'center',
    color: theme.colors.white,
  },
})
