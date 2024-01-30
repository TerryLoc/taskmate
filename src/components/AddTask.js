import { useState } from 'react';
import './AddTask.css';

export function AddTask({ tasks, setTasks }) {
  const [taskValue, setTaskValue] = useState('');
  const [progress, setProgress] = useState(false);

  // const handleChange = (e) => {
  //   setTaskValue(e.target.value);
  // };

  function handleReset() {
    setTaskValue('');
    setProgress(false);
  }

  function handleSubmit(event) {
    event.preventDefault();
    const task = {
      id: Math.round(Math.random() * 10000),
      name: taskValue,
      completed: Boolean(progress),
    };
    setTasks([...tasks, task]);
    handleReset();
  }

  return (
    <section className="addtask">
      <form onSubmit={handleSubmit}>
        {/* <label htmlFor="task">TASK NAME:</label> */}
        <input
          value={taskValue}
          onChange={(e) => setTaskValue(e.target.value)}
          type="text"
          name="task"
          id="task"
          placeholder="Your task..."
          autoComplete="off"
        />
        <select onChange={(e) => setProgress(e.target.value)} value={progress}>
          <option value="false">Pending</option>
          <option value="true">Complete</option>
        </select>
        <span onClick={handleReset} className="reset">
          Reset
        </span>
        <button type="Submit">Add Task</button>
      </form>
    </section>
  );
}
