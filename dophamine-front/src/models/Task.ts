export type TaskPriority = 'urgent' | 'can-wait';
export type TaskNeed = 'want' | 'must';

export interface Task {
  id: number;
  description: string;
  priority: TaskPriority;
  need: TaskNeed;
  points: number;
  completed: boolean;
}
