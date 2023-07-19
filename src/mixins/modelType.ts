import { TodoImpl } from '$entity/Todo';
import { PostImpl } from '$entity/Post';

export const entities = [
  { name: 'Todo', value: new TodoImpl({}) },
  { name: 'Post', value: new PostImpl({}) }
];
