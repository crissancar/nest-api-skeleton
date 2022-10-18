import { Inject, Injectable } from '@nestjs/common';
import { ExampleRepository } from '../domain/repositories/example.repository';
import { exampleConfig } from '../example.config';
import { CreateExampleRequest } from './dto/create-example-request.dto';
import { Example } from '../domain/example.model';
import { Uuid } from '../../shared/services/uuid.service';

@Injectable()
export class ExampleCreator {
  constructor(@Inject(exampleConfig.repository) readonly repository: ExampleRepository) {}

  async run(request: CreateExampleRequest) {
    const id = Uuid.random();
    const example = Example.create(id, request.name, request.description);

    await this.repository.save(example);
  }
}
