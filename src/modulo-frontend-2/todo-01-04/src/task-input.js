function TaskInput(props) {
  const { handleTaskInputOnChange, taskInput, addTask } = props;
  return (
    <>
      <input
          id='task-description'
          placeholder='Tarefa'
          onChange={handleTaskInputOnChange}
          value={taskInput}
        />
        <button onClick={addTask}>
          Adicionar
        </button>
    </>
  );
}

export default TaskInput;
