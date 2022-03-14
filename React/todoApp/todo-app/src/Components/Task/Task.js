import React, {useState} from 'react'
import ShowTask from '../ShowTask/ShowTask'

const Task = (props) => {
    const [task, setTask] = useState('Enter a Task');
    const [data, setData] = useState([]);


    // Take user input
    const onChangeHandler = (event) => {

        setTask(event.target.value);
    }

    // Get it stored
    const submitHandler = (event) => {
        event.preventDefault();
        const newData = task;
        setData([...data, newData]);
        setTask('');
    }

    const deleteItem = (id) => {
        const finalData = data.filter((value, index) => {
            return index !== id
        })
        setData(finalData);
    }
  return (
    <div className="container">
        <div className="row justify-content-center align-items-center main-row">
            <div className="col shadow main-col bg-white">
                <div className="row bg-primary text-white">
                    <div className="col  p-2">
                        <h4 className='text-center'>Tasks in {props.listName}</h4>
                    </div>
                </div>
                <form onSubmit={submitHandler}>
                    <div className="row justify-content-between text-white p-2">
                        <div className="form-group flex-fill mb-2 col-9">
                            <input id="todo-input" type="text" className="form-control" value={task} onChange={onChangeHandler} />
                        </div>
                        <button type="submit" className="btn btn-primary mb-2 ml-2 col-3">Add a Task</button>
                    </div>
                </form>

                {data.map((value, index) => {
                    return <ShowTask
                        key={index}
                        id={index}
                        task={value}
                        onSelect={deleteItem}
                        page={props.page}
                        setPage={props.setPage}
                        
                       
                    />
                })}


            </div>
        </div>
    </div>
  )
}

export default Task