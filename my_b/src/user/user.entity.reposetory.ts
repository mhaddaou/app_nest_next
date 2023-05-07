import { EntityRepository, Repository } from 'typeorm';
import { UserEntity } from './user.entity';

@EntityRepository(UserEntity)
export class UserEntityRepository extends Repository<UserEntity> {
  // Add any additional methods or queries for the UserEntity here
}