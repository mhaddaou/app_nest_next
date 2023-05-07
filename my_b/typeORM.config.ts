import { UserEntity } from 'src/user/user.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export const configORM: PostgresConnectionOptions = {
  type: "postgres",

  database: "med",

  host: "localhost",

  port: 5432,

  username: "postgres",

  password: "med123",

  entities: [UserEntity],

  synchronize: true,
};
