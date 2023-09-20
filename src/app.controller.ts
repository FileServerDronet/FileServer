import { Body, Controller, Get, Post, Res, UploadedFile, UseInterceptors, Delete, Query } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage } from "multer";
import { Response } from "express";
import * as path from "path";
import * as fs from 'fs';

interface FileParams {
  fileName: string;
}

@Controller()
export class AppController {

  @Get()
  getHello(): string {
    return "Hello World";
  }

  @Post("/upload")
  @UseInterceptors(FileInterceptor('file', {
    storage: diskStorage({
      destination: "./uploads",
      filename: (req, file, cb) => {
        cb(null, `${file.originalname}`)
      }
    })
  }))
  async uploadFile(@UploadedFile() file: any) {
    console.log(file);
    return "success";
  }

  @Get("/getFile")
  getFile(@Res() res: Response, @Query('fileName') fileName: string) {
    const filePath = path.join(__dirname, "./uploads/", fileName);
    res.sendFile(filePath);
  }

  @Delete("/deleteFile")
  async deleteFile(@Res() res: Response, @Query('fileName') fileName: string) {
    try {
      const filePath = path.join(__dirname, "./uploads/", fileName);

      // Dosya varsa sil
      if (fs.existsSync(filePath)) {
        console.log("Dosya Yolu:", filePath);

        fs.unlinkSync(filePath);
        return res.status(200).json({ message: "Dosya başarıyla silindi." });
      } else {
        return res.status(404).json({ message: "Dosya bulunamadı." });
      }
    } catch (error) {
      console.error("Dosya silinirken hata oluştu:", error);
      
      return res.status(500).json({ message: "Dosya silinirken bir hata oluştu." });
      
    }
  }
}