// Copyright The LearnSpot Authors 2021. All Rights Reserved.
// Node module: @learnspot/discussion-board-api
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

import {Getter, inject} from '@loopback/core';
import {
  DefaultCrudRepository,
  HasManyRepositoryFactory,
  repository,
} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Post, PostComment, PostRelations} from '../models';
import {PostCommentRepository} from './post-comment.repository';

export class PostRepository extends DefaultCrudRepository<
  Post,
  typeof Post.prototype.id,
  PostRelations
> {
  public readonly postComments: HasManyRepositoryFactory<
    PostComment,
    typeof Post.prototype.id
  >;

  constructor(
    @inject('datasources.Db') dataSource: DbDataSource,
    @repository.getter('PostCommentRepository')
    protected postCommentRepositoryGetter: Getter<PostCommentRepository>,
  ) {
    super(Post, dataSource);
    this.postComments = this.createHasManyRepositoryFactoryFor(
      'postComments',
      postCommentRepositoryGetter,
    );
    this.registerInclusionResolver(
      'postComments',
      this.postComments.inclusionResolver,
    );
  }
}
