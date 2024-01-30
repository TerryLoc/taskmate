import './taskCard.css';
import styles from './TaskCard.module.css';

export function TaskCard({ task, handleDelete }) {
  return (
    <li className={`taskcard ${task.completed ? 'completed' : 'incomplete'}`}>
      <span className={styles.title}>
        {task.id} - {task.name}
      </span>
      <button onClick={() => handleDelete(task.id)} className="delete">
        Delete
      </button>
    </li>
  );
}
