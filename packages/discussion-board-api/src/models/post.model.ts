import {Entity, model, property, hasMany} from '@loopback/repository';
import {PostComment} from './post-comment.model';

@model()
export class Post extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  titile: string;

  @property({
    type: 'string',
    required: true,
  })
  body: string;

  @hasMany(() => PostComment)
  postComments: PostComment[];

  constructor(data?: Partial<Post>) {
    super(data);
  }
}

export interface PostRelations {
  // describe navigational properties here
}

export type PostWithRelations = Post & PostRelations;
