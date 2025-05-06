import AsyncStorage from '@react-native-async-storage/async-storage'

const PREFIX = 'fokus-'

export const storageGetItem = async <T = any>(key: string) => {
  try {
    const formattedKey = PREFIX + key
    const value = await AsyncStorage.getItem(formattedKey)
    if (!value) return []

    const parsedValue = JSON.parse(value)
    return parsedValue.value as T
  } catch (error) {
    console.log(`storageGetItem error: ${error}`)
  }
}

export const storageSetItem = async <T>(key: string, value: T) => {
  try {
    const formattedKey = PREFIX + key
    if (value === undefined) await storageRemoveItem(formattedKey)

    const formattedValue = JSON.stringify({ value })
    if (value !== undefined) await AsyncStorage.setItem(formattedKey, formattedValue)
  } catch (error) {
    console.log(`storageSetItem error: ${error}`)
  }
}

export const storageRemoveItem = async (key: string) => {
  try {
    const formattedKey = PREFIX + key
    await AsyncStorage.removeItem(formattedKey)
  } catch (error) {
    console.log(`storageRemoveItem error: ${error}`)
  }
}
