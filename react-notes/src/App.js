import './App.css';
import WelcomeCard from './WelcomeCard';
import TextCard from './TextCard';
import TaskCard from './TaskCard';
import { useState } from 'react';

function App() {
  const titleText = "CAN'T WAIT TO-DO LIST";
  const decorators = "***";

  const [tasks, setTasks] = useState([]);
  const handleCallback = childData => {
    setTasks(tasks => [...tasks, childData]);
    localStorage.setObj("list", [...tasks, childData]);
    console.log("I stored!");
  }
  return (
    <div className="App">
      <WelcomeCard>{decorators + titleText + decorators}</WelcomeCard>
      {/* <TextCard callParentCallback={handleCallback}/> */}
      {/* <TaskCard tasks={localStorage.getObj("list").map(item => {return item.task})}/> */}
    </div>
  );
}

export default App;
