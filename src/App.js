import { useState } from 'react';
import './App.css';
import TaskContainer from './components/TaskContainer';

function App() {
  const [tasks, setTask] = useState([]);
  const [newTask, setNewTask] = useState ('');
  const [completedTasks, setCompletedTasks] = useState([]);

  const addTask = ()=>{
    if(newTask==='') return;
    setTask([...tasks, newTask])
    setNewTask('')
    setCompletedTasks([...completedTasks, false]);
  }

  const removeTask = (index) =>{
    const updatedTasks = tasks.filter((_, taskIndex)=> taskIndex!==index)
    setTask(updatedTasks);
    const updatedCompletedTasks = [...completedTasks];
    updatedCompletedTasks.splice(index, 1);
    setCompletedTasks(updatedCompletedTasks);
  }

  const completeTask = (index) => {
    const updatedCompletedTasks = [...completedTasks];
    updatedCompletedTasks[index] = !updatedCompletedTasks[index];
    setCompletedTasks(updatedCompletedTasks);
  };

  const handleKeyUp = (e) => {
    if (e.key === 'Enter') {
      addTask();
    }
  };

  return (

    <div className='App'>
      <h1 className='title'>To-Do Applicaton</h1>
      <div className='inputContainer'>
        <input 
        className='inputField' 
        type='text' 
        value={newTask} 
        onChange={e => setNewTask(e.target.value)} 
        placeholder='Enter a new Task'
        onKeyUp={handleKeyUp}
      />
        <button onClick={addTask} className='addButton'>Add</button>
      </div>
      <ul className='taskList'>
        {tasks.map((task, index) => (
          <TaskContainer
          key={index}
          task={task}
          index={index}
          removeTask={removeTask}
          completeTask={completeTask} 
          isCompleted={completedTasks[index]}
          className='taskItem'
          />

        ))}
      </ul>

    </div>

  );

}

export default App;
