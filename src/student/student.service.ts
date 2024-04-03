import { Body, Injectable, Param } from '@nestjs/common';
import { Student } from './student.entity';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class StudentService {
  constructor(
    @InjectModel(Student.name) private studentModel: Model<Student>,
  ) {}

  //   Método para encontrar todos los estudiantes, este servicio se exporta al controlador
  findAll() {
    return this.studentModel.find().exec();
  }

  //   Método para crear un estudiante, este servicio se exporta al controlador
  async create(@Body() body): Promise<Student> {
    const studentData = {
      name: body.name,
      password: body.password,
    };

    const student = new this.studentModel(studentData);
    return await student.save();
  }

  //   Método para actualizar un estudiante, este servicio se exporta al controlador
  async update(@Param('id') id: number, @Body() body): Promise<Student> {
    const userFound = await this.studentModel.findById(id);

    if (userFound) {
      const newUser = {
        name: body.name,
        password: body.password,
      };

      const userUpdated = userFound.updateOne(newUser);
      return userUpdated;
    }
  }

  async deleteStudent(@Param('id') id: number) {
    const userFound = await this.studentModel.findById(id);

    if (!userFound) {
      return 'Student not found';
    }

    const userDeleted = userFound.deleteOne();
    return userDeleted;
  }
}
