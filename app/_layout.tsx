import { AnimatedLoadingIcon, ButtonBack } from '@/components'
import { TasksProvider } from '@/context/tasks/provider'
import { theme } from '@/theme'
import { Montserrat_400Regular, Montserrat_600SemiBold, Montserrat_700Bold } from '@expo-google-fonts/montserrat'
import { Unbounded_200ExtraLight, Unbounded_400Regular, Unbounded_600SemiBold } from '@expo-google-fonts/unbounded'
import { useFonts } from 'expo-font'
import { router } from 'expo-router'
import { Drawer } from 'expo-router/drawer'
import { StatusBar, StyleSheet } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Unbounded_200ExtraLight,
    Unbounded_400Regular,
    Unbounded_600SemiBold,
  })

  return (
    <GestureHandlerRootView style={style.container}>
      <StatusBar backgroundColor={theme.colors.blue700} barStyle="light-content" />

      {!fontsLoaded && <AnimatedLoadingIcon />}

      {!!fontsLoaded && (
        <TasksProvider>
          <Drawer
            screenOptions={{
              headerStyle: { backgroundColor: theme.colors.blue700 },
              headerTintColor: theme.colors.white,
              drawerActiveTintColor: theme.colors.lilac,
              drawerActiveBackgroundColor: 'transparent',
              drawerInactiveTintColor: theme.colors.white,
              drawerInactiveBackgroundColor: 'transparent',
              drawerStyle: { backgroundColor: theme.colors.blue700 },
              drawerLabelStyle: { fontFamily: 'Montserrat_400Regular', fontSize: 22 },
            }}
          >
            <Drawer.Screen
              name="index"
              options={{ headerShown: false, swipeEnabled: false, drawerLabelStyle: { display: 'none' } }}
            />
            <Drawer.Screen name="pomodoro/index" options={{ title: '', drawerLabel: 'Timer' }} />
            <Drawer.Screen name="tasks/index" options={{ title: '', drawerLabel: 'Lista de tarefas' }} />
            <Drawer.Screen
              name="addTask/index"
              options={{
                title: '',
                drawerLabelStyle: { display: 'none' },
                headerLeft: () => <ButtonBack handleNavigate={() => router.navigate('/tasks')} />,
              }}
            />
            <Drawer.Screen
              name="editTask/[id]"
              options={{
                title: '',
                drawerLabelStyle: { display: 'none' },
                headerLeft: () => <ButtonBack handleNavigate={() => router.navigate('/tasks')} />,
              }}
            />
          </Drawer>
        </TasksProvider>
      )}
    </GestureHandlerRootView>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
  },
})
