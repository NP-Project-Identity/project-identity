import {Getter, inject} from '@loopback/core';
import {
  BelongsToAccessor,
  DefaultCrudRepository,
  repository
} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Post, PostComment, PostCommentRelations} from '../models';
import {PostRepository} from './post.repository';

export class PostCommentRepository extends DefaultCrudRepository<
  PostComment,
  typeof PostComment.prototype.id,
  PostCommentRelations
> {
  public readonly post: BelongsToAccessor<
    Post,
    typeof PostComment.prototype.id
  >;

  constructor(
    @inject('datasources.Db') dataSource: DbDataSource,
    @repository.getter('PostRepository')
    protected postRepositoryGetter: Getter<PostRepository>,
  ) {
    super(PostComment, dataSource);
    this.post = this.createBelongsToAccessorFor('post', postRepositoryGetter);
  }
}
