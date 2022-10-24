import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('todo')
export class TodosController {
  @Post()
  createTodo(@Body() body: any) {
    console.log('Create TODO ', body);
  }
  @Get()
  findTodos() {
    console.log('Get all todos');
  }
  @Get('/:id')
  findTodoById(@Param('id') id: string) {
    console.log(`Get Todo by Id ${id}`);
  }
  @Put('/:id')
  updateTodoStatus(@Param('id') id: string) {
    console.log(`Update Todo by Id ${id}`);
  }
  @Delete('/:id')
  deleteTodo(@Param('id') id: string) {
    console.log(`Delete Todo by Id ${id}`);
  }
}