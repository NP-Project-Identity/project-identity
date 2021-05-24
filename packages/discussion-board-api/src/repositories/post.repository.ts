import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, HasManyRepositoryFactory} from '@loopback/repository';
import {DbDataSource} from '../datasources';
import {Post, PostRelations, PostComment} from '../models';
import {PostCommentRepository} from './post-comment.repository';

export class PostRepository extends DefaultCrudRepository<
  Post,
  typeof Post.prototype.id,
  PostRelations
> {

  public readonly postComments: HasManyRepositoryFactory<PostComment, typeof Post.prototype.id>;

  constructor(
    @inject('datasources.Db') dataSource: DbDataSource, @repository.getter('PostCommentRepository') protected postCommentRepositoryGetter: Getter<PostCommentRepository>,
  ) {
    super(Post, dataSource);
    this.postComments = this.createHasManyRepositoryFactoryFor('postComments', postCommentRepositoryGetter,);
    this.registerInclusionResolver('postComments', this.postComments.inclusionResolver);
  }
}
