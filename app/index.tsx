import { StatusBar, StyleSheet, Text, View } from 'react-native'

export default function Index() {
  return (
    <View style={style.container}>
      <StatusBar backgroundColor="#021123" barStyle="light-content" translucent />
      <Text style={style.text}>Hello world</Text>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#021123',
  },
  text: {
    color: 'white',
  },
})
