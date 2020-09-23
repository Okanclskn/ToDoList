import React, {useContext} from 'react';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {
  View,
  Text,
  StyleSheet,
  Button,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import ToDoContext from '../contexts/ToDoContext';
import MyButton from '../components/MyButton';
const ToDoList = ({navigation}) => {
  const {data, DeleteToDo} = useContext(ToDoContext);
  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: '#87cefa',
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={{fontSize: 25, fontWeight: '100', color: '#d8e2de'}}>
          My ToDo List
        </Text>
      </View>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('ShowContent', {id: item.id})}>
              <View style={styles.todo}>
                <Text style={{fontSize: 25, marginLeft: 30}}>{item.title}</Text>
                <TouchableOpacity onPress={() => DeleteToDo(item.id)}>
                  <Icon
                    size={30}
                    color="black"
                    name="trash-can-outline"
                    style={{marginRight: 10}}
                  />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}></FlatList>
      <View style={styles.buttoncontainer}>
        <MyButton
          title="Add ToDo"
          onpress={() => navigation.navigate('AddToDo')}></MyButton>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3EDD9D',
    justifyContent: 'center',
  },
  todo: {
    flexDirection: 'row',
    height: 50,
    margin: 10,
    borderBottomWidth: 2,
    borderColor: 'gray',
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#E1F1EB',
  },
  buttoncontainer: {
    margin: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default ToDoList;
