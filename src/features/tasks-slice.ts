import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

import data from '../api/data.json';
import { removeUser } from './user-slice';

export type TasksState = {
  entities: Task[];
  loading?: boolean;
};

type DraftTasks = Pick<Task, 'title'>;
// type DraftTasks = RequireOnly<Task, 'title'>;

const initialState: TasksState = {
  entities: [],
  loading: false,
};

export const fetchTasks = createAsyncThunk(
  'tasks/fetchTasks',
  async (): Promise<Task[]> => {
    const response = await fetch('api/tasks').then((response) =>
      response.json(),
    );
    return response.tasks;
  },
);

// fetchTasks;

export const createTask = (draftTask: DraftTasks): Task => {
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
  extraReducers: (builder) => {
    builder.addCase(removeUser, (state, action) => {
      const userId = action.payload;

      for (const task of state.entities) {
        if (task.user === userId) {
          task.user = undefined;
        }
      }
    });

    builder.addCase(fetchTasks.pending, (state, action) => {
      state.loading = true;
    });

    builder.addCase(fetchTasks.fulfilled, (state, action) => {
      state.loading = false;
      state.entities = action.payload;
    });
  },
});

export const tasksReducer = tasksSlice.reducer;
export const { addTasks, removeTasks } = tasksSlice.actions;

export default tasksSlice;
