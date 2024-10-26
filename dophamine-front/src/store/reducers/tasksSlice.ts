import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Task } from "../../models/Task";

type TasksState = {tasks: Array<Task>};

const initialState = {
  tasks: [
  {
    id: 1,
    description: 'Complete the tasks store inialization',
    priority: 'urgent',
    need: 'want',
    points: 10,
    completed: false,
  },
  {
    id: 2,
    description: 'Display the tasks in the right format',
    priority: 'urgent',
    need: 'want',
    points: 10,
    completed: false,
  },
  {
    id: 3,
    description: 'Add the level calculation',
    priority: 'urgent',
    need: 'want',
    points: 10,
    completed: false,
  },
  {
    id: 4,
    description: 'Add saving t the local storage',
    priority: 'urgent',
    need: 'want',
    points: 10,
    completed: false,
  },
]} as TasksState

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Omit<Task, 'id' | 'completed'>>) => {
      state.tasks.push({
        ...action.payload,
        id: Math.floor(Math.random() * 1000000000),
        completed: false,
      })   
    },

    markComplete: (state, action: PayloadAction<number>) => {
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) {
        task.completed = true;
      }
    },
    markIncomplete: (state, action: PayloadAction<number>) => {
      const task = state.tasks.find(task => task.id === action.payload);
      if (task) {
        task.completed = false;
      }
    },
  },
});


export const {addTask, markComplete, markIncomplete} =  tasksSlice.actions;
export default tasksSlice.reducer;