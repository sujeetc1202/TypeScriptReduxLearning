import { addTasks, createTask, removeTasks, tasksReducer } from './tasks-slice';

describe('tasksSlice', () => {
  const initialState = {
    entities: [
      createTask({ title: 'Write a test' }),
      createTask({ title: 'Make them pass' }),
    ],
  };
  test(`should add a task when the ${addTasks}`, () => {
    const task = createTask({ title: 'Got job' });
    const action = addTasks(task);
    const newState = tasksReducer(initialState, action);

    expect(newState.entities).toEqual([task, ...initialState.entities]);
  });

  test(`should remove a task when the ${removeTasks}`, () => {
    const action = removeTasks('Write a test');
    const newState = tasksReducer(initialState, action);
    expect(newState.entities).toHaveLength(1);
  });
});
