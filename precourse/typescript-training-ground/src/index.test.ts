import 'mocha';
import assert from 'assert';
import {
  greet, isOld, countOdd, sumEven, getPersonStreetNo, EmployeeClass, IPerson, PersonClass,
  getPersonNameString, printThis, optionallyAdd, greetPeople
} from './index';
import type { Person } from './index';

describe('ts tests', () => {
  it('get greeting', () => {
    // arrange
    const birthYear = 1972;
    const name = 'Marcus';

    // act
    const result = greet(birthYear, name);
    // assert
    assert.strictEqual(result, 'Hello Marcus, you are 52 years old');
  });

  it('returns true if age is above or equal to 35', () => {
    // act
    const is34Old = isOld(34);
    const is35Old = isOld(35);
    const is36Old = isOld(36);

    // assert
    assert.strictEqual(is34Old, false);
    assert.strictEqual(is35Old, true);
    assert.strictEqual(is36Old, true);
  });

  it('fun with variables', () => {
    // act
    const name: string = 'Marcus';
    const nameImplicit = 'Marcus';
    const nameImplicit2 = name;

    const cool: boolean = true;
    const birthYear = 1972;

    // arrange
    assert.strictEqual(typeof cool, 'boolean');
    assert.strictEqual(typeof birthYear, 'number');
    assert.strictEqual(typeof name, 'string');
    assert.strictEqual(typeof nameImplicit, 'string');
    assert.strictEqual(typeof nameImplicit2, 'string');
  });

  /* it('arrays are typed in ts', () => {
    const names = ['Marcus', 'Julia', 'Catherine'];
    const firstFive = [1, 2, 3, 4, 5];
  }); */

  it('count odd numbers', () => {
    // arrange
    const firstFive = [1, 2, 3, 4, 5];

    // act
    const numberOfOdds = countOdd(firstFive);

    // arrange
    assert.strictEqual(numberOfOdds, 3);
  });

  it('sum even numbers', () => {
    // arrange
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // act
    const sum = sumEven(nums);

    // arrange
    assert.strictEqual(sum, 30);
  });

  it('gets the street number for a person', () => {
    // arrange
    const p: Person = {
      name: 'Marcus',
      birthYear: 1972,
      address: {
        street: 'Strålgatan',
        streetNo: 23,
        city: 'Stockholm',
      },
    };

    // act
    const streetNo = getPersonStreetNo(p);

    // assert
    assert.strictEqual(streetNo, 23);
  });

  it('using classes', () => {
    // arrange
    const p = new PersonClass('Marcus', 1972);
    const e = new EmployeeClass('Marcus Employee', 1972);

    // act
    e.setEmployeeId = 12345;

    // assert
    assert.strictEqual(p.getName, 'Marcus');
    assert.strictEqual(e.getName, 'Marcus Employee');
    assert.strictEqual(e.employeeId, 12345);
  });

  it('prints an IPerson', () => {
    // arrange
    const p1: IPerson = {
      name: 'Marcus',
      birthYear: 1972,
    };

    const p2 = {
      name: 'David',
      birthYear: 1975,
      drummer: true,
    };

    // act
    const p1NameString = getPersonNameString(p1);
    const p2NameString = getPersonNameString(p2);

    // assert
    assert.strictEqual(p1NameString, 'Marcus, 1972');
    assert.strictEqual(p2NameString, 'David, 1975');
  });

  it('uses union types to allow null', () => {
    // act
    const result1 = printThis(undefined);
    const result2 = printThis(null);
  
    // assert
    assert.strictEqual(result1, "no person supplied");
    assert.strictEqual(result2, "no person supplied");
  });

  it('optional parameters', () => {
    // act
    const sum = optionallyAdd(1, 2, 3, 4, 5);
  
    // assert
    assert.strictEqual(sum, 15);
  });

  it('rest parameters - print names', () => {
    // act
    const greeting1 = greetPeople('Hello');
    const greeting2 = greetPeople('Hello', 'Marcus');
    const greeting3 = greetPeople('Hello', 'Marcus', 'Dasha');
    const greeting4 = greetPeople('Hello', 'Marcus', 'Dasha', 'David');
    const greeting5 = greetPeople(
      'Hello',
      'Marcus',
      'Dasha',
      'David',
      'Julia',
      'Wietse',
      'Lucas'
    );
  
    // assert
    assert.strictEqual(greeting1, 'Hello'); 
    assert.strictEqual(greeting2, 'Hello Marcus');
    assert.strictEqual(greeting3, 'Hello Marcus and Dasha');
    assert.strictEqual(greeting4, 'Hello Marcus and Dasha and David');
    assert.strictEqual(
      greeting5,
      'Hello Marcus and Dasha and David and Julia and Wietse and Lucas'
    );
  });
});
