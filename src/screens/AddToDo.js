import React, {useState, useContext} from 'react';
import {Text, StyleSheet, KeyboardAvoidingView, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import ToDoForm from '../components/ToDoForm';
import MyButton from '../components/MyButton';
import ToDoContext from '../contexts/ToDoContext';

const AddToDo = ({navigation}) => {
  const [todo, setTodo] = useState({title: '', content: ''});
  const {AddToDo} = useContext(ToDoContext);

  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.inputcontainer}>
        <ScrollView>
          <Text style={styles.titles}>Title: </Text>
          <ToDoForm
            textform={{
              maxlength: 20,
              multilane: false,
              linesnumber: 1,
              autocorrect: false,
              keytype: 'next',
            }}
            value={todo.title}
            handleText={(newTitle) =>
              setTodo({...todo, title: newTitle})
            }></ToDoForm>
          <Text style={styles.titles}>Content: </Text>
          <ToDoForm
            textform={{
              maxlength: 100,
              multilane: true,
              linesnumber: 10,
              autocorrect: false,
              keytype: 'done',
            }}
            value={todo.content}
            handleText={(newContent) =>
              setTodo({...todo, content: newContent})
            }></ToDoForm>
        </ScrollView>
        <View style={styles.buttoncontainer}>
          <MyButton
            title="Add ToDo"
            onpress={() => {
              AddToDo(todo), navigation.navigate('ToDoList');
            }}
          />
          <MyButton
            title="Go Back"
            onpress={() => navigation.navigate('ToDoList')}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9ED0B3',
  },
  inputcontainer: {
    marginTop: 20,
    justifyContent: 'center',
  },
  titles: {
    fontSize: 20,
    marginLeft: 10,
    justifyContent: 'center',
  },
  buttoncontainer: {
    margin: 10,
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
export default AddToDo;
