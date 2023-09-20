import { Test, TestingModule } from '@nestjs/testing';
import { FileDeleteService } from './file-delete.service';

describe('FileDeleteService', () => {
  let service: FileDeleteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FileDeleteService],
    }).compile();

    service = module.get<FileDeleteService>(FileDeleteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
