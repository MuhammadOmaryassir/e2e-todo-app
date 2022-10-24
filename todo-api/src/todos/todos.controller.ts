import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { TodosService } from './todos.service';

@Controller('todos')
export class TodosController {
  constructor(private todosService: TodosService) {}
  @Post()
  createTodo(@Body() body: CreateTodoDto) {
    return this.todosService.create(body);
  }
  @Get()
  findTodos() {
    return this.todosService.find();
  }
  @Get('/:id')
  findTodoById(@Param('id') id: string) {
    return this.todosService.findOne(id);
  }
  @Delete('/:id')
  deleteTodo(@Param('id') id: string) {
    console.log(`Delete Todo by Id ${id}`);
  }
}