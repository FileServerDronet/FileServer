"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const path = require("path");
const fs = require("fs");
let AppController = class AppController {
    getHello() {
        return "Hello World";
    }
    async uploadFile(file) {
        console.log(file);
        return "success";
    }
    getFile(res, file) {
        res.sendFile(path.join(__dirname, "./uploads/" + file.fileName));
    }
    async deleteFile(res, file) {
        try {
            const filePath = path.join(__dirname, "./uploads/" + file.fileName);
            console.log("Dosya Yolu:", filePath);
            if (fs.existsSync(filePath)) {
                fs.unlinkSync(filePath);
                return res.status(200).json({ message: "Dosya başarıyla silindi." });
            }
            else {
                console.log("Dosya Bulunamadı");
                return res.status(404).json({ message: "Dosya bulunamadı." });
            }
        }
        catch (error) {
            console.error("Dosya silinirken hata oluştu:", error);
            return res.status(500).json({ message: "Dosya silinirken bir hata oluştu." });
        }
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.Post)("/upload"),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileInterceptor)('file', {
        storage: (0, multer_1.diskStorage)({
            destination: "./uploads",
            filename: (req, file, cb) => {
                cb(null, `${file.originalname}`);
            }
        })
    })),
    __param(0, (0, common_1.UploadedFile)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "uploadFile", null);
__decorate([
    (0, common_1.Get)("/getFile"),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getFile", null);
__decorate([
    (0, common_1.Delete)("/deleteFile"),
    __param(0, (0, common_1.Res)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "deleteFile", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)()
], AppController);
//# sourceMappingURL=app.controller.js.map