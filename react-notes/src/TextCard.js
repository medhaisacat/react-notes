import './TextCard.css'
// import InputBox from './InputBox';
// import Submit from './Submit';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function TextCard(props) {
    console.log('SOME ISSUE EXISTS!');
    const tasks = useSelector(state => state.tasks);
    const dispatch = useDispatch();




    const [task, setTask] = useState("");
    // var task = "";
    const inputHandler = event => {
        setTask(event.target.value);
    }
    const submitHandler = (event) => {
        event.preventDefault();
        // dispatch({ type: 'ADD', task: event.target.value});



        // props.callParentCallback({"task": task, "completion": false});
        // setTask("");
    }
    return (
        <div className="TextCard">
            <form onSubmit={submitHandler}>
                <input type="text" value={task} onChange={inputHandler}></input>
                <button>Submit</button>
            </form>
        {/* <InputBox></InputBox>
        <Submit></Submit> */}
        </div>
    )
}

export default TextCard;