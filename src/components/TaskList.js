import { useState } from 'react';
import { TaskCard } from './TaskCard';
import { BoxCard } from './BoxCard';

export const TaskList = () => {
  const [tasks, setTasks] = useState([
    { id: 5271, name: 'Record React Lectures', completed: true },
    { id: 7825, name: 'Edit React Lectures', completed: false },
    { id: 8391, name: 'Watch Lectures', completed: false },
  ]);
  const [show, setShow] = useState(true);

  function handleDelete(id) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <div className="tasklist">
      <h1>Task List</h1>
      <ul>
        <button className="trigger" onClick={() => setShow(!show)}>
          Toggle
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
