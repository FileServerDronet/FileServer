/// <reference types="multer" />
export declare class FileUploadService {
    uploadFile(file: Express.Multer.File): Promise<string>;
}
