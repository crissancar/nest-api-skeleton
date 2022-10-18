import { Example } from '../example.model';

export interface ExampleRepository {
  save(example: Example): Promise<void>;
}
