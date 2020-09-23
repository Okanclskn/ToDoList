import React, {useReducer} from 'react';

const ToDoContext = React.createContext();

const reducer = (state, action) => {
  console.log(action.payload.title, 'in reducer');
  console.log(state, 'in Reducer');
  switch (action.type) {
    case 'Add_ToDo':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case 'Delete_ToDo':
      return state.filter((todos) => todos.id !== action.payload);
    default:
      return state;
  }
};

export const ToDoProvider = ({children}) => {
  const [ToDos, dispatch] = useReducer(reducer, []);

  const AddToDo = (state) => {
    console.log(state, 'in AddToDo');
    dispatch({type: 'Add_ToDo', payload: state});
  };

  const DeleteToDo = (id) => {
    dispatch({type: 'Delete_ToDo', payload: id});
  };
  return (
    <ToDoContext.Provider value={{data: ToDos, AddToDo, DeleteToDo}}>
      {children}
    </ToDoContext.Provider>
  );
};

export default ToDoContext;
