import { useState } from 'react';
import { TaskCard } from './TaskCard';
import { BoxCard } from './BoxCard';
import './taskList.css';

export const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 5271, name: 'Record React Lectures', completed: true },
    { id: 7825, name: 'Edit React Lectures', completed: false },
    { id: 8391, name: 'Watch Lectures', completed: false },
  ]);
  const [show, setShow] = useState(true);
  const styles = {
    color: show ? 'black' : 'white',
    fontSize: '2.25rem',
    border: '2px outset',
    borderColor: show ? 'red' : 'white',
    padding: '2px',
    background: 'grey',
    borderRadius: '5px',
    boxShadow: '1px 1px 10px inset',
  };

  function handleDelete(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div className="tasklist">
      <h1 style={styles}>Task List</h1>
      <ul>
        <button className="trigger" onClick={() => setShow(!show)}>
          {show ? 'Hide' : 'Show'}
        </button>
        {show &&
          tasks.map((task) => (
            <TaskCard key={task.id} task={task} handleDelete={handleDelete} />
          ))}
      </ul>
      <BoxCard result="success">
        <p className="title">Lorem ipsum dolor sit amet.</p>
        <p className="discription">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus
          ratione dolores porro et quam voluptatem fuga eligendi pariatur
          distinctio itaque?
        </p>
      </BoxCard>
      <BoxCard result="warning">
        <p className="title">Lorem, ipsum dolor.</p>
        <p className="discription">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Beatae vitae
          deleniti veritatis eaque distinctio fugiat ea.
        </p>
      </BoxCard>
      <BoxCard result="alert">
        <p className="title">Ipsum dolor.</p>
        <p className="discription">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
      </BoxCard>
    </div>
  );
};
