import { Body, Controller, Get, Post, Res, UploadedFile, UseInterceptors, Delete } from "@nestjs/common";
import {FileInterceptor} from "@nestjs/platform-express";
import {diskStorage} from "multer";
import {Response} from "express";
import  * as path from "path";
import * as fs from 'fs';
<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes

interface FileParams {
  fileName : string;
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
    res.sendFile(path.join(__dirname , "./uploads/" + file.fileName));
  }

  @Delete("/deleteFile")
<<<<<<< Updated upstream
  async deleteFile(@Res() res: Response, @Body() file: FileParams) {
    try {
      const filePath = path.join(__dirname, "./uploads/" + file.fileName);
=======
async deleteFile(@Res() res: Response, @Body() file: FileParams) {
  try {
    const filePath = path.join(__dirname, "./uploads/" + file.fileName);

    // Dosya varsa sil
    if (fs.existsSync(filePath)) {
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

>>>>>>> Stashed changes

      console.log("Dosya Yolu:", filePath); // Dosya yolunu konsola yazdır

      // Dosya varsa sil
      if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
        return res.status(200).json({ message: "Dosya başarıyla silindi." });
      } else {
        console.log("Dosya Bulunamadı"); // Dosyanın bulunamadığını konsola yazdır
        return res.status(404).json({ message: "Dosya bulunamadı." });
      }
    } catch (error) {
      
      console.error("Dosya silinirken hata oluştu:", error);
      return res.status(500).json({ message: "Dosya silinirken bir hata oluştu." });
    }
  }
  
}