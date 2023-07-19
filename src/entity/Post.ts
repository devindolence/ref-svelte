import { Button, Input } from 'flowbite-svelte';
import { FieldType } from '$entity/FieldType';

export interface Post {
  userId: FieldType;
  id: FieldType;
  title: FieldType;
  body: FieldType;
}

export class PostImpl implements Post {
  userId: FieldType = new FieldType(Input, Number);
  id: FieldType = new FieldType(Input, Number);
  title: FieldType = new FieldType(Input, String);
  body: FieldType = new FieldType(Button, String);

  constructor(params: Partial<PostImpl>) {
    Object.assign(this, params);
  }
}
