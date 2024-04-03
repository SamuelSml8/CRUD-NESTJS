import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { AppService } from './app.service';

@Controller('students')
export class AppController {
  constructor(private readonly appService: AppService) {}

  // @Get()
  // getHello(): string {
  //   return this.appService.getHello();
  // }

  @Get()
  getAll() {
    return 'this return text';
  }

  @Get('notes')
  getNote() {
    return 'this return a note';
  }

  // @Get(':id')
  // getById(@Param() params) {
  //   return `This return a param ${params.id}`;
  // }

  @Get(':id')
  getOnlyOneParamById(@Param('id') id: string) {
    return `This return only a param ${id}`;
  }

  // @Post()
  // createStudent(@Body() body) {
  //   return `This return a body ${body}`;
  // }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  createStudentByName(@Body('name') body) {
    return body;
  }

  @Put(':id')
  updateStudent(@Param('id') id: string) {
    return `This update an user by id: ${id}`;
  }

  @Delete(':id')
  deleteStudent(@Param('id') id: string) {
    return `This delete an user by id: ${id}`;
  }

  @Get('/convert/:id')
  convertNumber(@Param('id') id: number) {
    return this.appService.convert(id);
  }
}
