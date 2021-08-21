// Copyright The LearnSpot Authors 2021. All Rights Reserved.
// Node module: @learnspot/discussion-board-api
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {repository} from '@loopback/repository';
import {get, getModelSchemaRef, param} from '@loopback/rest';
import {Post, PostComment} from '../models';
import {PostCommentRepository} from '../repositories';

export class PostCommentPostController {
  constructor(
    @repository(PostCommentRepository)
    public postCommentRepository: PostCommentRepository,
  ) {}

  @get('/post-comments/{id}/post', {
    responses: {
      '200': {
        description: 'Post belonging to PostComment',
        content: {
          'application/json': {
            schema: {type: 'array', items: getModelSchemaRef(Post)},
          },
        },
      },
    },
  })
  async getPost(
    @param.path.number('id') id: typeof PostComment.prototype.id,
  ): Promise<Post> {
    return this.postCommentRepository.post(id);
  }
}
