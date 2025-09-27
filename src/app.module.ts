// src/app.module.ts

import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TaskModule } from './task/task.module';
import { PrismaModule } from './prisma/prima.module';

@Module({
   imports: [UserModule, TaskModule,PrismaModule],
  controllers: [AppController],
  providers: [AppService],
  
})
export class AppModule {}
