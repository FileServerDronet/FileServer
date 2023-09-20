"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileUploadService = void 0;
const common_1 = require("@nestjs/common");
const fs = require("fs");
let FileUploadService = class FileUploadService {
    async uploadFile(file) {
        const fileName = file.originalname;
        const filePath = `${__dirname}/../../uploads/${fileName}`;
        if (!fs.existsSync(`${__dirname}/uploads`)) {
            fs.mkdirSync(`${__dirname}/uploads`);
        }
        fs.writeFileSync(filePath, file.buffer);
        return filePath;
    }
};
exports.FileUploadService = FileUploadService;
exports.FileUploadService = FileUploadService = __decorate([
    (0, common_1.Injectable)()
], FileUploadService);
//# sourceMappingURL=file-upload.service.js.map