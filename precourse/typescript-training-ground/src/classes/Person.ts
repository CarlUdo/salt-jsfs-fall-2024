export default class Person {
  private name: string = '';

  birthYear: number = 1970;

  constructor(name: string, birthYear: number) {
    this.name = name;

    this.birthYear = birthYear;
  }

  get getName() {
    return this.name;
  }
}
