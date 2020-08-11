export interface Todo {
  _id: number;
  completed: boolean;
  title: string;
  projectId: string;
  userId: string;
  createdAt: Date;
}
