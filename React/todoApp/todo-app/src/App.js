
import { useState } from 'react';
import './App.css';
import Todo from './Components/Todo/Todo';

import Task from './Components/Task/Task';




function App() {

// const [visible, setVisible] = useState('starter');
const [page, setPage] = useState('starter');   
const [listID, setListID] = useState(-1);
const [listName, setListName] = useState('');

// const value= (page) => {
//     console.log('Page: ' + page);
//     setVisible(page);
// }

const Nav= () =>{
   if(page==='starter'){
     return (
     <Todo page={page} setPage={setPage} listID={listID} setListID={setListID} listName={listName} setListName={setListName}></Todo>
     
     )
   }
   if (page==='task') {
     return (
     <Task page={page} setPage={setPage} listID={listID} setListID={setListID} listName={listName} setListName={setListName} ></Task>
     )

   }
   return null;
}

  return (
    <div className="todo-app">
    <Nav/>
    </div>
  );
}

export default App;
