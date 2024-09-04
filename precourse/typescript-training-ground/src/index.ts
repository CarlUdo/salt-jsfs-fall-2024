export const greet = (birthYear: number, name: string): string => {
  const age = new Date().getFullYear() - birthYear;

  return `Hello ${name}, you are ${age} years old`;
};

export const isOld = (age: number) => age >= 35;

export const countOdd = (arr: number[]) => arr.filter(num => num % 2 !== 0).length;

export const sumEven = (arr: number[]) => arr
  .filter(num => num % 2 === 0)
  .reduce((total, num) => total + num);

type Address = {
  street: string;
  streetNo: number;
  city: string;
};

export type Person = {
  name: string;
  birthYear: number;
  address: Address;
};

export const getPersonStreetNo = (person: Person) => person.address.streetNo;

export class PersonClass {
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

export class EmployeeClass extends PersonClass {
  employeeId: number = -1;

  get getEmployeeId() {
    return this.employeeId;
  }

  set setEmployeeId(id: number) {
    this.employeeId = id;
  }
}

export interface IPerson {
  name: string;
  birthYear: number;
}

export const getPersonNameString = (person: IPerson) => `${person.name}, ${person.birthYear}`;

export const printThis = (person: Person | undefined | null) => {
  if (!person) return 'no person supplied';
  
  return person.name;
};

/* export const optionallyAdd = (
  firstNumber: number, 
  secondNumber: number,
  thirdNumber?: number,
  fourthNumber?: number,
  fifthNumber?: number
) => {
  let sum = firstNumber + secondNumber;

  if (thirdNumber) sum += thirdNumber;
  if (fourthNumber) sum += fourthNumber;
  if (fifthNumber) sum += fifthNumber;

  return sum; 
}; */

export const optionallyAdd = (
  firstNumber: number, 
  secondNumber: number,
  thirdNumber: number = 0,
  fourthNumber: number = 0,
  fifthNumber: number = 0
) => {
  return firstNumber + secondNumber + thirdNumber + fourthNumber + fifthNumber; 
};

export const greetPeople = (greeting: string, ...names: string[]) => {
 return `${greeting} ${names.join(' and ')}`.trim();
};
