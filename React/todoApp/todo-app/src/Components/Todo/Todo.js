import React from 'react'
import { useState } from 'react'
import ShowTodo from '../ShowTodo/ShowTodo';
import './Todo.css'
import { CgAdd}  from 'react-icons/cg';
import Button from 'react-bootstrap/Button';

const Todo = (props) => {
    const [list, setList] = useState('Enter a list');
    const [data, setData] = useState([]);
    // const [pager, setPager]=useState('');

    // Take user input
    const onChangeHandler = (event) => {

        setList(event.target.value);
    }

    // Get it stored
    const submitHandler = (event) => {
        event.preventDefault();
        const newData = list;
        setData([...data, newData]);
        setList('');
    }

    const deleteItem = (id) => {
        const finalData = data.filter((value, index) => {
            return index !== id
        })
        setData(finalData);
    }
    
    // const onPageChange = (page) => {
    //     console.log('in todo on page: ' + page);
    //     setPager(page);
    //     props.value(pager);
    //     console.log('in todo on page: '+ pager);
    // }

    return (
        <div className="container">
        {/* <div className="row justify-content-center align-items-center main-row">
            <div className="col shadow main-col bg-white"> */}
                {/* <div className="row bg-primary text-white"> */}
                    <div className="list-container">
                        <h4 className='head-container'>Available Lists</h4>
                    </div>
                {/* </div> */}
                <form onSubmit={submitHandler}>
                    <div className="row justify-content-between text-white p-2">
                        <div className="form-group flex-fill mb-2 col-9">
                            <input id="todo-input" type="text" className="form-control" value={list} onChange={onChangeHandler} />
                        </div>
                        {/* <button type="submit" className="btn btn-primary mb-2 ml-2 col-3">Add List <CgAdd/></button> */}
                        <Button variant="outline-success" className='btn' type="submit">Add a List <CgAdd/></Button>{' '}
                    </div>
                </form>

                {data.map((value, index) => {
                    return <ShowTodo
                        key={index}
                        id={index}
                        task={value}
                        onSelect={deleteItem}
                        page={props.page}
                        setPage={props.setPage}
                        listID={props.listID}
                        setListID={props.setListID}
                        listName={props.listName}
                        setListName={props.setListName}
                       
                    />
                })}


            {/* </div>
        </div> */}
    </div>
    )
}

export default Todo