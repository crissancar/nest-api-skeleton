import { Body, Controller, Post } from '@nestjs/common';
import { CreateExampleRequest } from '../application/dto/create-example-request.dto';
import { ExampleCreator } from '../application/example-creator.service';
import { exampleConfig } from '../example.config';

@Controller(exampleConfig.api.route)
export class ExamplePostController {
  constructor(readonly creator: ExampleCreator) {}

  @Post()
  async run(@Body() request: CreateExampleRequest) {
    return this.creator.run(request);
  }
}
