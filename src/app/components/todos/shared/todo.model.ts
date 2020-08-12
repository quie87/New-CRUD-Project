export interface Todo {
  _id?: string;
  completed: boolean;
  title: string;
  projectId: string;
  userId: string;
  createdAt?: Date;
}
