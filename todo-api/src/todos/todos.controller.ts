import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { TodosService } from './todos.service';

@Controller('api/todos')
export class TodosController {
  constructor(private todosService: TodosService) {}
  @Post()
  async createTodo(@Body() body: CreateTodoDto) {
    let todo = await this.todosService.create(body);
    if(todo) {
      return {
        data:todo,
        status:200,
        message:"Creaeted Sucessfully"
      }
    }
    return {
      data:[],
      status:400,
      message:"Somthing Went worng"
    }
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
  async updateTodoStatus(@Param('id') id: number) {
    let updatedTodo = await this.todosService.update(id)
    if(updatedTodo) {
      return {
        data:updatedTodo,
        status:200,
        message:"Updated Sucessfully"
      }
    }
    return {
      data:[],
      status:400,
      message:"Somthing Went worng"
    }
  }

  @Delete('/:id')
  async deleteTodo(@Param('id') id: number) {
    let deleedTodo = await this.todosService.delete(id)
    if(deleedTodo) {
      return {
        data:deleedTodo,
        status:200,
        message:"Updated Sucessfully"
      }
    }
    return {
      data:[],
      status:400,
      message:"Somthing Went worng"
    }
  }
}