import { Pressable, StyleSheet } from 'react-native'
import { ArrowIcon } from '../Icons'

interface ButtonBackProps {
  handleNavigate: () => void
}

export const ButtonBack = ({ handleNavigate }: ButtonBackProps) => {
  return (
    <Pressable style={style.container} onPress={handleNavigate}>
      <ArrowIcon />
    </Pressable>
  )
}

const style = StyleSheet.create({
  container: {
    marginLeft: 16,
  },
})
