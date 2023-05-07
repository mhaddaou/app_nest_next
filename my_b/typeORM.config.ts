// import { UserEntity } from 'src/user/user.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export const configORM: PostgresConnectionOptions = {
  type: "postgres",

  database: "testdb",

  host: "localhost",

  port: 5432,

  username: "postgres",

  password: "said123",

  entities: [],

  synchronize: true,
};
