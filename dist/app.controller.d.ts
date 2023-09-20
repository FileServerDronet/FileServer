import { Response } from "express";
export declare class AppController {
    getHello(): string;
    uploadFile(file: any): Promise<string>;
    getFile(res: Response, fileName: string): void;
    deleteFile(res: Response, fileName: string): Promise<Response<any, Record<string, any>>>;
}
