import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';


@Injectable()
export class TaskService {
  constructor(private prisma: PrismaService) {}

  create(userId: number, data: CreateTaskDto) {
    return this.prisma.task.create({
      data: {
        ...data,
        userId,
      },
    });
  }

  findAll() {
    return this.prisma.task.findMany({
      include: { user: true }, // optional: show user with task
    });
  }

  findOne(id: number) {
    return this.prisma.task.findUnique({
      where: { id },
      include: { user: true },
    });
  }

  update(id: number, data: UpdateTaskDto) {
    return this.prisma.task.update({
      where: { id },
      data,
    });
  }

  remove(id: number) {
    return this.prisma.task.delete({
      where: { id },
    });
  }
}
