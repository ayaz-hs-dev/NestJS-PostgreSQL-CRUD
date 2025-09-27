import { Global, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Global() // makes PrismaService available everywhere
@Module({
  providers: [PrismaService],
  exports: [PrismaService], // important: export so other modules can use it
})
export class PrismaModule {}
