import { Button, Container, PlusIcon, Task } from '@/components'
import { theme } from '@/theme'
import { StyleSheet, Text, View } from 'react-native'

const TASKS = [
  { id: 1, title: 'Estudar React Native', done: false },
  { id: 2, title: 'Estudar Flutter', done: false },
  { id: 3, title: 'Estudar Next.js', done: true },
]

export default function Tasks() {
  return (
    <Container>
      <Text style={style.title}>Lista de tarefas:</Text>

      {!TASKS?.length && <Text style={style.text}>Ainda não há tarefas na sua lista,{'\n'}que tal adicionar?</Text>}

      {!!TASKS?.length && (
        <View style={style.tasksContent}>
          {TASKS.map((task) => (
            <Task
              key={task.id}
              title={task.title}
              done={task.done}
              handleDone={() => console.log('done')}
              handleEdit={() => console.log('edit')}
              handleDelete={() => console.log('delete')}
            />
          ))}
        </View>
      )}

      <View style={style.buttonContent}>
        <Button text="Adicionar nova tarefa" icon={<PlusIcon />} outline onPress={() => {}} />
      </View>
    </Container>
  )
}

const style = StyleSheet.create({
  title: {
    paddingHorizontal: 24,
    marginTop: 32,
    fontFamily: 'Unbounded_400Regular',
    fontSize: 26,
    lineHeight: 49,
    textAlign: 'center',
    color: theme.colors.white,
  },

  text: {
    paddingHorizontal: 24,
    marginTop: 32,
    fontFamily: 'Montserrat_600SemiBold',
    fontSize: 18,
    lineHeight: 27,
    textAlign: 'center',
    color: theme.colors.gray,
  },

  tasksContent: {
    gap: 8,
    marginTop: 32,
    paddingHorizontal: 24,
  },

  buttonContent: {
    width: '100%',
    maxWidth: 480,
    marginHorizontal: 'auto',
    paddingHorizontal: 24,
    marginTop: 32,
  },
})
