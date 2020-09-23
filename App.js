import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ToDoListScreen from './src/screens/ToDoList';
import AddToDoScreen from './src/screens/AddToDo';
import ShowContentScreen from './src/screens/ShowContentScreen';
import {ToDoProvider} from './src/contexts/ToDoContext';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="ToDoList"
          component={ToDoListScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddToDo"
          component={AddToDoScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ShowContent"
          component={ShowContentScreen}
          options={{title: 'Go Back'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default () => {
  return (
    <ToDoProvider>
      <App />
    </ToDoProvider>
  );
};
