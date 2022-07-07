import './TaskCard.css'
import Task from './Task'
// import { useState } from 'react'

function TaskCard(props) {
    // const [task, setTask] = useState("");

    const renderTasks = (props) => {
        const items = props.tasks.map( (task, index) => (
            // console.log("hello")
            <Task key={index}>{task}</Task>
        ))
        console.log(items);
        return (
            <div className="TaskCard">
                { items }
            </div>
        )
    }
    return renderTasks(props);
}

export default TaskCard;


