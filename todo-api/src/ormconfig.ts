import { TypeOrmModuleAsyncOptions } from "@nestjs/typeorm";
import { DataSourceOptions } from "typeorm";


 export const typeOrmAsyncConfig: TypeOrmModuleAsyncOptions = {
  useFactory : async () : Promise<any> => {
    return {
      host: 'sql8.freemysqlhosting.net',
      username: 'sql8528957',
      password: 'l2vKdCIJyF',
      port: 3306,
      database: 'sql8528957',
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
  host: 'sql8.freemysqlhosting.net',
  username: 'sql8528957',
  password: 'l2vKdCIJyF',
  port: 3306,
  database: 'sql8528957',
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