import type { Person } from './types';
import { IPerson } from './types';

export const greet = (birthYear: number, name: string): string => {
  const age = new Date().getFullYear() - birthYear;

  return `Hello ${name}, you are ${age} years old`;
};

export const isOld = (age: number) => age >= 35;

export const countOdd = (arr: number[]) => arr.filter(num => num % 2 !== 0).length;

export const sumEven = (arr: number[]) => arr
  .filter(num => num % 2 === 0)
  .reduce((total, num) => total + num);

export const getPersonStreetNo = (person: Person) => person.address.streetNo;

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
  fifthNumber: number = 0,
) => firstNumber + secondNumber + thirdNumber + fourthNumber + fifthNumber;

export const greetPeople = (greeting: string, ...names: string[]) => `${greeting} ${names.join(' and ')}`.trim();

export const addToStart = <T>(list: T[], item: T) => [item, ...list];
