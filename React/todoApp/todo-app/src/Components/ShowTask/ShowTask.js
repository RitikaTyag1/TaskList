import React from 'react'

const ShowTask = (props) => {

    // const onTaskClickHandler = (event) => {

    //     // props.setPage('task');
    //     // props.setListID(props.index);

    // }


    
        return (
            <div className='container'>

                {/* <button onClick={onTaskClickHandler} >  {props.task} </button> */}
                <h6>{props.task}</h6>
                <button onClick={() => {
                    props.onSelect(props.id)
                }}>Delete Task</button>

            </div>
        )
    }


    export default ShowTask