import * as React from 'react';
import TodoList from './TodoList';
import { ChakraProvider} from '@chakra-ui/react'

function App() {
  
  return (
    <div>   
    
    <ChakraProvider>

    <TodoList/>
    </ChakraProvider>
    
    </div>
  );
}

export default App;
