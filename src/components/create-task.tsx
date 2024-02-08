import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTasks } from '../features/tasks-slice';
import { useAppDispatch } from '../lib/hooks';

const CreateTask = () => {
  const [newTaskTitle, setnewTaskTitle] = useState('');
  // const dispatch = useDispatch();
  const dispatch = useAppDispatch();


  return (
    <form
      className="create-task"
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(addTasks({ title: newTaskTitle }));
      }}
    >
      <label htmlFor="new-task-title">
        Title
        <input
          id="new-task-title"
          type="text"
          value={newTaskTitle}
          placeholder="Title"
          required
          onChange={(e) => setnewTaskTitle(e.target.value)}
        />
      </label>
      <button type="submit">Create Task</button>
    </form>
  );
};

export default CreateTask;
