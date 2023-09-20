import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FileUploadService } from './file-upload/file-upload.service';
import { FileUploadController } from './file-upload/file-upload.controller';
import { FileDeleteService } from './file-delete/file-delete.service';
import { FileDeleteController } from './file-delete/file-delete.controller';

@Module({
  imports: [],
  controllers: [AppController, FileUploadController, FileDeleteController],
  providers: [AppService, FileUploadService, FileDeleteService],
})
export class AppModule {}
