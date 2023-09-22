import { Body, Controller, Get, Post, Res, UploadedFile, UseInterceptors, Delete, Query } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { Response } from "express";
import * as path from "path";
import * as fs from 'fs';
import { v4 as uuidv4 } from 'uuid' //random id için gerekli

interface FileParams {
  fileName : string;
  user: string;
  id: string;
}

@Controller()
export class AppController {

  @Get()
  getHello(): string {
    return "Hello World";
  }


  @Post("/upload")
  @UseInterceptors(FileInterceptor('file' , {
    storage : diskStorage({
      destination : "./uploads",
      filename : (req , file , cb) => {
        cb(null , `${file.originalname}`)
      }
    })
  }))
  async uploadFile(@UploadedFile() file : any) {
    console.log(file);
    return "success";
  }

@Get("/getFile")
  getFile(@Res() res : Response , @Body() file : FileParams)
  {
    res.sendFile(path.join(__dirname , "../uploads/" + file.fileName));
  }


}