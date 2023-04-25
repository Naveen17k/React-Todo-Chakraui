import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import { Button, Stack,  HStack, } from '@chakra-ui/react';
import { Input,IconButton } from '@chakra-ui/react';
import {AddIcon,CheckIcon} from '@chakra-ui/icons'
import Todo from './Todo';





function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    props.onSubmit({
      id: Math.floor(Math.random() * 10000),
      text: input
    });
    setInput('');
  };

  return (
    <form  id="editform" onSubmit={handleSubmit} className='todo-form'>
      
      {props.edit ? (

  
 <HStack>

<div >
        <Input
          required
          id="outlined-required"
          label="Required"
          placeholder='Update your item'
          value={input}
          onChange={handleChange}
          name='text'
          ref={inputRef}
          
          className='todo-input edit' />
          <Button colorScheme="blue"
    _hover={{
    background: "blue.600",
    color: "white",}} 
          id="update-btn"  onClick={handleSubmit} className='todo-button edit' >
            Update
          </Button> 
          </div>

          </HStack>
       
   
      ) :
       (
        <>
                  <HStack >
          <Input
          required
          id="outlined-required"
          label="Required"
            placeholder='Add a todo'
            value={input}
            onChange={handleChange}
            name='text'
            className='todo-input'
            ref={inputRef}
            />
 
    

          <IconButton marginTop={5} mb={5}  colorScheme="blue" 
    _hover={{
    background: "blue.600 ",
    color: "white",}}  onClick={handleSubmit} className='todo-button'  icon= {<AddIcon />} ></IconButton>
        </HStack>
        

     </>
      )}
    </form>

  );
}

export default TodoForm;
