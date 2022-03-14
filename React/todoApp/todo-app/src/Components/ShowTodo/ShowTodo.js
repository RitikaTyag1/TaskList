import React from 'react'
import {useState} from 'react'
import Task from '../Task/Task';
import  {CgClose } from 'react-icons/cg'
import './ShowTodo.css'
import Button1 from 'react-bootstrap/Button';


const ShowTodo = (props) => {
// const [page, setPage] = useState('task');    
const onListClickHandler = (event) => {

    // setPage('task');
    // console.log('in show todo on list: ' + page);
    // props.onPageChange(page);
    
    props.setPage('task');
    props.setListID(props.index);
    props.setListName(props.task);
    console.log(props.listName);

}


  return (
    <div className='container'>
         <Button1 variant="success" className='list-button' onClick={onListClickHandler}>{props.task}</Button1>{' '}
         {/* <button className='list-button' onClick={onListClickHandler} >  {props.task} </button> */}
         <Button1 variant="danger" className='btn-1'  onClick={()=>{
               props.onSelect(props.id)
           }}>Delete <CgClose/> </Button1>{' '}

            {/* <button className='delete-container' onClick={()=>{
               props.onSelect(props.id)
           }}>Delete List <CgClose/></button> 
          */}
           </div>
 
    
  )
}

export default ShowTodo