import { Input } from 'flowbite-svelte';
import { FieldType } from '$entity/FieldType';

export interface Todo {
  userId: FieldType;
  id: FieldType;
  title: FieldType;
  completed: FieldType;
}

export class TodoImpl implements Todo {
  userId: FieldType;
  id: FieldType;
  title: FieldType;
  completed: FieldType;

  constructor(
    public userId: FieldType,
    public id: FieldType,
    public title: FieldType,
    public completed: FieldType
  ) {
    this.userId = userId;
    this.id = id;
    this.title = title;
    this.completed = completed;
  }
}

export const defaultTodo = new TodoImpl(
  new FieldType(Input, Number),
  new FieldType(Input, Number),
  new FieldType(Input, String),
  new FieldType(Input, Boolean)
);
