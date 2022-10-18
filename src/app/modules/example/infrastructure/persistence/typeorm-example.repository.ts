import { ExampleRepository } from '../../domain/repositories/example.repository';
import { Example } from '../../domain/example.model';
import { ExampleEntity } from './example.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

export class TypeormExampleRepository implements ExampleRepository {
  constructor(@InjectRepository(ExampleEntity) readonly repository: Repository<ExampleEntity>) {}

  async save(example: Example): Promise<void> {
    await this.repository.save(example);
  }
}
