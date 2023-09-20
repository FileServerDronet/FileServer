import { Test, TestingModule } from '@nestjs/testing';
import { FileDeleteController } from './file-delete.controller';

describe('FileDeleteController', () => {
  let controller: FileDeleteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [FileDeleteController],
    }).compile();

    controller = module.get<FileDeleteController>(FileDeleteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
