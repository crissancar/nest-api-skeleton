export class Example {
  readonly id: string;
  readonly name: string;
  readonly description: string;

  constructor(id: string, name: string, description: string) {
    this.id = id;
    this.name = name;
    this.description = description;
  }

  static create(id: string, name: string, description: string) {
    return new Example(id, name, description);
  }
}
