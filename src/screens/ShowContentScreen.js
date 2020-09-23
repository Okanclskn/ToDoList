import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import ToDoContext from '../contexts/ToDoContext';

const ShowContentScreen = ({route}) => {
  const id = route.params.id;
  const {data} = useContext(ToDoContext);
  const todo = data.find((todos) => todos.id === id);
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.text}>{todo.title}</Text>
      </View>
      <View style={styles.body}>
        <Text style={styles.text}>{todo.content}</Text>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    margin: 30,
    height: 75,
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  body: {
    margin: 30,
    height: 300,
    borderWidth: 2,
    borderColor: 'gray',
    borderRadius: 10,
  },
  text: {
    fontSize: 25,
  },
});
export default ShowContentScreen;
