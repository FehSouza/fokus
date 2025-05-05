import { ContainerKeyboardAvoiding, Form } from '@/components'
import { theme } from '@/theme'
import { useLocalSearchParams } from 'expo-router'
import { StyleSheet, Text } from 'react-native'

export default function EditTask() {
  const { id } = useLocalSearchParams()
  if (!id) return null

  return (
    <ContainerKeyboardAvoiding>
      <Text style={style.title}>Editar tarefa:</Text>
      <Form id={Array.isArray(id) ? id[0] : id} />
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
