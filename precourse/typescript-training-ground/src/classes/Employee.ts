import Person from './Person';

export default class Employee extends Person {
  employeeId: number = -1;

  get getEmployeeId() {
    return this.employeeId;
  }

  set setEmployeeId(id: number) {
    this.employeeId = id;
  }
}
