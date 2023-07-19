import { Input } from 'flowbite-svelte';
import { FieldType } from '$entity/FieldType';

export interface Todo {
  userId: FieldType;
  id: FieldType;
  title: FieldType;
  completed: FieldType;
}

export class TodoImpl implements Todo {
  userId: FieldType = new FieldType(Input, Number);
  id: FieldType = new FieldType(Input, Number);
  title: FieldType = new FieldType(Input, String);
  completed: FieldType = new FieldType(Input, Boolean);

  constructor(params: Partial<TodoImpl>) {
    Object.assign(this, params);
  }
}
