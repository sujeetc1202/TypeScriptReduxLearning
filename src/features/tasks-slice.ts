import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

import data from '../api/data.json';

export type TasksState = {
  entities: Task[];
};

type DraftTasks = Pick<Task, 'title'>;
// type DraftTasks = RequireOnly<Task, 'title'>;

const initialState: TasksState = {
  entities: data.tasks,
};

const createTask = (draftTask: DraftTasks): Task => {
  return { id: nanoid(), ...draftTask };
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTasks: (state, action: PayloadAction<DraftTasks>) => {
      const task = createTask(action.payload);
      state.entities.unshift(task);
    },
    removeTasks: (state, action: PayloadAction<Task['id']>) => {
      const index = state.entities.findIndex(
        (task) => task.id === action.payload,
      );
      state.entities.splice(index, 1);
    },
  },
});

export const tasksReducer = tasksSlice.reducer;
export const { addTasks, removeTasks } = tasksSlice.actions;

export default tasksSlice;
