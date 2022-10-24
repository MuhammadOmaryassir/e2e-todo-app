import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmAsyncConfig } from "./ormconfig";
import { TodosModule } from './todos/todos.module';


@Module({
  imports: [ 
    TypeOrmModule.forRootAsync(typeOrmAsyncConfig), TodosModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
