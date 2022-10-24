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
  async findTodos() {
    let todos = await this.todosService.find();
    console.log(todos)
    if(todos.length == 0) {
      return {
        data:[],
        status:204,
        message: 'No Content'
      }
    }
    return {
      data:todos,
      status:200,
      message: 'Done'
    } 
  }
  @Get('/:id')
  findTodoById(@Param('id') id: number) {
    return this.todosService.findOne(id);
  }
  @Patch('/:id')
  updateTodoStatus(@Param('id') id: number) {
    return this.todosService.update(id);
  }

  @Delete('/:id')
  deleteTodo(@Param('id') id: number) {
    return this.todosService.delete(id)
  }
}