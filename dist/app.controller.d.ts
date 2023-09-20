import { Response } from "express";
interface FileParams {
    fileName: string;
}
export declare class AppController {
    getHello(): string;
    uploadFile(file: any): Promise<string>;
    getFile(res: Response, file: FileParams): void;
    deleteFile(res: Response, file: FileParams): Promise<Response<any, Record<string, any>>>;
}
export {};
