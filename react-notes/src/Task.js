import './Task.css'
import './utils/Storage'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react';


function Task(props) {
    const tasks = useSelector(state => state.tasks);
    const dispatch = useDispatch();

    const [text, setText] = useState(props.children);
    const [check, setCheck] = useState(false);
    const onChangeHandler = () => {
        setCheck(previousState => {
            return (!previousState);
        });
        let list = localStorage.getObj("list");
        // let currentTask = list.filter(item => {
        //     return (item.task === props.children);
        // })
        
        !check ? setText(<strike>{props.children}</strike>) : setText(props.children);
        // dispatch({type: 'DELETE', task: props.children})
        console.log(props);

        // currentTask.completion
    }
    return (
        <div className="Task">
            {text}
            <input type="checkbox" onChange={onChangeHandler}></input>
        </div>
    )
}

export default Task;