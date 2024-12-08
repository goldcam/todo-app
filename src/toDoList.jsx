import React, {useState} from "react"

import ToDo from "./singleToDo";

function ToDoList (){

    const [tasks, setTasks ] = useState([
        { task: 'wake up', completed: false }, { task: 'get going', completed: false }, { task: 'eat a meal', completed: false }, { task: 'go home', completed: false }
    ]),
    [newTask, setNewTask] = useState(''), 
    handleInputChange = (event) => {
        setNewTask(event.target.value);
        if (event.key === 'Enter') {
            addTask();
            setNewTask('');
        }
        
    },
    addTask = () => {        
        if(newTask.trim() !== ''){
            setTasks(t => [...t, { task: newTask, completed: false }]);
            setNewTask('');
        }       
    },
    deleteTask = (index) => {
        const updatedTasks = tasks.filter((_t, i) => i !== index);
        setTasks(updatedTasks);
    },
    moveTaskUp = (i) =>  {
        if(i > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[i], updatedTasks[i-1]] = [updatedTasks[i-1], updatedTasks[i]];
            setTasks(updatedTasks);

        }
    },
    moveTaskDown = (i) =>  {
        if(i < tasks.length -1){
            const updatedTasks = [...tasks];
            [updatedTasks[i], updatedTasks[i + 1]] = [updatedTasks[i + 1], updatedTasks[i]];
            setTasks(updatedTasks);

        }
    },
    completeTask = (i) => {
        const updatedTasks = tasks.map((task, index) => { 
            if(i === index) {
                task.completed = !task.completed;
                console.log({task})
            }
            return task;

        });
        setTasks(updatedTasks);
    };





    return (<div className="toDoList">
        <h1>To Do List</h1>
        <div className="input-area">
            <input 
            type="text"
            placeholder="Enter a task"
            value={newTask} 
            onChange={handleInputChange}
            onKeyUp={handleInputChange}            
            />
            <button className="btn-add"
            onClick={addTask}
            
            >
                Add Task                
            </button>

        </div>
        <ol>
            {tasks.map((t, i) => 
            <ToDo i={i} 
                  key={i} 
                  task={t.task}
                  deleteTask={deleteTask}
                  moveTaskDown={moveTaskDown}
                  moveTaskUp={moveTaskUp}
                   completed={t.completed}
                    completeTask={completeTask}

            />)}
        </ol>
    </div>);

}

export default ToDoList