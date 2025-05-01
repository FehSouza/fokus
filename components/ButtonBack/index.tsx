import { StyleSheet, TouchableOpacity } from 'react-native'
import { ArrowIcon } from '../Icons'

interface ButtonBackProps {
  handleNavigate: () => void
}

export const ButtonBack = ({ handleNavigate }: ButtonBackProps) => {
  return (
    <TouchableOpacity style={style.container} activeOpacity={0.7} onPress={handleNavigate}>
      <ArrowIcon />
    </TouchableOpacity>
  )
}

const style = StyleSheet.create({
  container: {
    marginLeft: 16,
  },
})
