import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import { Heading, Badge, useToast, IconButton,useColorMode,Checkbox} from '@chakra-ui/react';
import {VStack,HStack} from '@chakra-ui/react';
import {FaSun} from 'react-icons/fa';
function TodoList() {
  const [todos, setTodos] = useState([]);
 
  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }


    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  const   { toggleColorMode} = useColorMode();

  return (      
    <>
    <VStack >
    <IconButton
  icon ={<FaSun/>}
  isRound='true'
  size='lg'
  alignSelf='flex-end'   
  onClick={toggleColorMode} 

  />  
      <Heading pb={10} size='2xl' fontWeight='extrabold' bgGradient='linear(to-r, pink.500, pink.300, blue.500 ) ' bgClip='text'>ToDo Application</Heading>

  </VStack>
    
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
    </>
  );
}

export default TodoList;
