import { TypeOrmModuleAsyncOptions, TypeOrmModuleOptions } from "@nestjs/typeorm";
import { DataSourceOptions } from "typeorm";


 export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  useFactory : async () : Promise<any> => {
    return {
      host: 'localhost',
      username: process.env.MYSQLDB_USER,
      password: process.env.MYSQLDB_ROOT_PASSWORD,
      port: Number(process.env.MYSQLDB_DOCKER_PORT),
      database: process.env.MYSQLDB_DATABASE,
      type: 'mysql',
      synchronize: false,
      logging: process.env.NODE_ENV == 'Testing' ? false : true,
      autoLoadEntities: true,
      migrations: [__dirname + '/migrations/*{.ts,.js}'],
      cli: {
        migrationsDir: __dirname + '/migrations',
      },
      extra:{
        charset: "utf8mb4_unicode_ci"
      }
    }
  }
}

export function typeOrmConfig() 
{
return {
  host: 'localhost',
  username: process.env.MYSQLDB_USER,
  password: process.env.MYSQLDB_ROOT_PASSWORD,
  port: Number(process.env.MYSQLDB_DOCKER_PORT),
  database: process.env.MYSQLDB_DATABASE,
  type: 'mysql',
  synchronize: false,
  logging: process.env.NODE_ENV == 'Testing' ? false : true,
  autoLoadEntities: true,
  migrations: [__dirname + '/migrations/*{.ts,.js}'],
  cli: {
    migrationsDir: __dirname + '/migrations',
  },
  extra:{
    charset: "utf8mb4_unicode_ci"
  }
} as DataSourceOptions
} 