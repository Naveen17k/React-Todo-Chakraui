import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { HStack, Textarea, Flex, Center, Spacer, Container, Checkbox } from "@chakra-ui/react";
import { DeleteIcon, EditIcon, } from '@chakra-ui/icons'
import { IconButton, Text } from '@chakra-ui/react'
import TodoList from './TodoList';



const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {

    return <TodoForm edit={edit} onSubmit={submitUpdate} />;

  }

  return todos.map((todo, index) => (
    <>
      <HStack>

        <div id="content"
          className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
          key={index} textAlign='center'
        > </div>
        <Checkbox style={{ textDecorationLine: 'line-through', textDecorationStyle: 'solid' }} checked={todos.completed}></Checkbox>
        <Text flexDir='column' width='60%'
          key={todo.id} onClick={() => completeTodo(todo.id)}>
          {todo.text}



        </Text>

        <IconButton
          className="delBtn"
          onClick={() => removeTodo(todo.id)}
          icon={<DeleteIcon />}
          isRound='true' />

        <IconButton

          onClick={() => setEdit({ id: todo.id, value: todo.text })}
          className='edit-icon'
          icon={<EditIcon />}
          isRound='true' />

      </HStack>



    </>



  ));
};




export default Todo;
