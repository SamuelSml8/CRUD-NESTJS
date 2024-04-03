import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get('all')
  obtainsStudents() {
    return this.studentService.findAll();
  }

  @Post('create')
  createStudent(@Body() body) {
    return this.studentService.create(body);
  }

  @Put('update/:id')
  updateStudent(@Param('id') id: number, @Body() body) {
    return this.studentService.update(id, body);
  }

  @Delete('delete/:id')
  deleteStudent(@Param('id') id: number) {
    return this.studentService.deleteStudent(id);
  }
}
