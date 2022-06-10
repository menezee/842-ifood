function TaskList({ tasks, completeTask, deleteTask, archiveTask }) {
  const styles = {
    listStyle: {
      listStyleType: 'none',
      padding: 'unset',
    },
    itemChekced: {
      textDecoration: 'line-through',
    },
    listItem: {
      padding: '.5rem',
    },
  };

  return (
    <ul style={styles.listStyle}>
      {
        tasks.map((task, idx) => (
          <li key={task.description} style={styles.listItem}>
            <button onClick={() => archiveTask(idx)}>📂</button>
            <button onClick={() => deleteTask(idx)}>🗑</button>
            <input
              type='checkbox'
              onChange={() => completeTask(idx)}
              value={task.completed}
            />
            <span
              style={task.completed ? styles.itemChekced : null}
            >
              {task.description}
            </span>
          </li>
        ))
      }
    </ul>
  );
}

export default TaskList;
