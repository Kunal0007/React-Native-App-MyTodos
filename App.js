import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, FlatList, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import Todoitem from './components/todoitem';
import Addtodo from './components/addTodo';

export default function App() {
  const [todo, setTodo] = useState([
    { text: 'buy coffee', key: '1' },
    { text: 'create an app', key: '2' },
    { text: 'play on the switch', key: '3' }
  ])

  const pressHandler = (key) => {
    setTodo((prevTodos) => {
      return prevTodos.filter(todo => todo.key != key);
    })
  }

  const addtodo = (text) => {
    if (text.length > 3) {
      setTodo((prevTodos) => {
        return [ { text, key: Math.random().toString()}, ...prevTodos ];
      });
    }
    else {
      Alert.alert('OPPS!', 'Todo must be over 3 chars long',
        [ { text: 'OK', onPress: () => console.log('Closed') } ]
      );
    }
  }

  return (
    <TouchableWithoutFeedback onPress={() => {
      Keyboard.dismiss();
    }} >
      <View style={styles.container}>
      <Header />
        <View style={styles.content}>
          <Addtodo addtodo={addtodo}/>
          <View style={styles.list}>
            <FlatList 
              data={todo}
              renderItem={({ item }) => (
                <Todoitem item={item} pressHandler={pressHandler}/>
              )}
            />
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    marginTop: 20,
    flex: 1,
  }
});
