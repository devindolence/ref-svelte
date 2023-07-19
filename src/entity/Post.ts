import { Input } from 'flowbite-svelte';
import { FieldType } from '$entity/FieldType';

export interface Post {
  userId: FieldType;
  id: FieldType;
  title: FieldType;
  body: FieldType;
}

export class PostImpl implements Post {
  userId: FieldType;
  id: FieldType;
  title: FieldType;
  body: FieldType;

  constructor(
    public userId: FieldType,
    public id: FieldType,
    public title: FieldType,
    public body: FieldType
  ) {
    this.userId = userId;
    this.id = id;
    this.title = title;
    this.body = body;
  }
}

export const defaultPost = new PostImpl(
  new FieldType(Input, Number),
  new FieldType(Input, Number),
  new FieldType(Input, String),
  new FieldType(Input, String)
);
