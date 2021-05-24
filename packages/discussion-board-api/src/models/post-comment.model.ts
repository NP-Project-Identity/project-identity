import {Entity, model, property, belongsTo} from '@loopback/repository';
import {Post} from './post.model';

@model()
export class PostComment extends Entity {
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
  body: string;

  @belongsTo(() => Post)
  postId: number;

  constructor(data?: Partial<PostComment>) {
    super(data);
  }
}

export interface PostCommentRelations {
  // describe navigational properties here
}

export type PostCommentWithRelations = PostComment & PostCommentRelations;
