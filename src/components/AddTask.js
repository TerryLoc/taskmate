import './AddTask.css';

export function AddTask() {
  return (
    <section className="addtask">
      <form>
        <label htmlFor="task">TASK NAME:</label>
        <input
          type="text"
          name="task"
          id="task"
          placeholder="Your task..."
          autoComplete="off"
        />
        <button type="Submit">Add Task</button>
      </form>
    </section>
  );
}
