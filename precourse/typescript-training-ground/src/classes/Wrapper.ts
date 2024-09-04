export default class ListWrapper<T> {
  private list: T[];

  constructor(list: T[]) {
    this.list = list;
  }

  public get first() {
    return this.list[0];
  }

  public get last() {
    return this.list[this.list.length - 1];
  }
}
