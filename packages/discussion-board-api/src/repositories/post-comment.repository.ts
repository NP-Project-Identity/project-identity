import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {PostComment, PostCommentRelations, Post} from '../models';
import {PostRepository} from './post.repository';

export class PostCommentRepository extends DefaultCrudRepository<
  PostComment,
  typeof PostComment.prototype.id,
  PostCommentRelations
> {

  public readonly post: BelongsToAccessor<Post, typeof PostComment.prototype.id>;

  constructor(
    @inject('datasources.Db') dataSource: DbDataSource, @repository.getter('PostRepository') protected postRepositoryGetter: Getter<PostRepository>,
  ) {
    super(PostComment, dataSource);
    this.post = this.createBelongsToAccessorFor('post', postRepositoryGetter,);
  }
}
