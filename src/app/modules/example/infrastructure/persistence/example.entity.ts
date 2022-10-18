import { Column, Entity, PrimaryColumn } from 'typeorm';

@Entity({ name: 'example' })
export class ExampleEntity {
  @PrimaryColumn()
  id: string;

  @Column({ unique: true })
  name: string;

  @Column()
  description: string;
}
