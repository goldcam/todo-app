import React from "react";

const ToDo = ({ i, task, deleteTask, moveTaskUp, moveTaskDown, completeTask, completed }) => {
    console.log({ completed, task });
  
   
    return (<li>
        <span className={`task-text ${completed === true ? `lineThrough` : ``}`}>{task}</span>
        <button className="btn-complete" onClick={() => completeTask(i)}>{completed === false ? `complete` : `uncomplete`}</button>
        <button className="btn-delete" onClick={() => deleteTask(i)}>delete</button>
        <button className="btn-move" onClick={() => moveTaskUp(i)}>up</button>
        <button className="btn-move" onClick={() => moveTaskDown(i)}>down</button>
    </li>)
}

export default  ToDo