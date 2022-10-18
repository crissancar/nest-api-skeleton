import { Module } from '@nestjs/common';
import { ExamplePostController } from './infrastructure/example-post.controller';
import { ExampleCreator } from './application/example-creator.service';
import { exampleConfig } from './example.config';
import { TypeormExampleRepository } from './infrastructure/persistence/typeorm-example.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExampleEntity } from './infrastructure/persistence/example.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ExampleEntity])],
  controllers: [ExamplePostController],
  providers: [
    ExampleCreator,
    {
      provide: exampleConfig.repository,
      useClass: TypeormExampleRepository,
    },
  ],
  exports: [],
})
export class ExampleModule {}
