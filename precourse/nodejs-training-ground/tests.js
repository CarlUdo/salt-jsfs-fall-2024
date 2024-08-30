import assert from 'assert';
import { getAge, getAgeGroup, getAgeForPerson } from './index.js';

describe("age calculator", () => {
  it("someone born 1976 is 48 2024", () => {
    // act 
    const result = getAge(1976, 2024);
    
    // assert
    assert.equal(result, 48);
  });
});

describe('age classifier', () => {
  it('less than 0 years should be not born', () => {
    // act
    const result = getAgeGroup(-1);

    //assert
    assert.equal(result, 'not born')
  });

  it('0-3 years old should be a toddler', () => {
    // act
    const result = getAgeGroup(0);

    // assert
    assert.equal(result, 'toddler');
  });

  it("4-12 years old should be a kid", () => {
    // act
    const result = getAgeGroup(4);

    // assert
    assert.equal(result, 'kid');
  });

  it("13-19 years old should be a teenager", () => {
    // act
    const result = getAgeGroup(13);

    // assert
    assert.equal(result, 'teenager');
  } );

  it("20-39 years old should be a adult", () => {
    // act
    const result = getAgeGroup(39);

    // assert
    assert.equal(result, 'adult');
  });

  it("above 39 years old ... you are just old", () => {
    // act
    const result = getAgeGroup(40);

    // assert
    assert.equal(result, 'old');
  });

  it('But 50 - that is prime age, my friend. PRIME. AGE.', () => {
    // act
    const result = getAgeGroup(50);

    // assert
    assert.equal(result, 'prime')
  });

  it('above 100 years old.. you are most probaly dead', () => {
    // act
    const result = getAgeGroup(101);

    //assert
    assert.equal(result, 'probably dead')
  });
});

describe('constants and variables', () => {
  it.skip('const means constant', () => {
    // arrange
    const aNumber = 1;
    aNumber = 2;

    // assert
    assert.equal(result, )
  });

  it('you can change a let variable', () => {
    // arrange
    let aNumber = 1;
  
    // act
    aNumber = 2;
  
    // assert
    assert.equal(aNumber, 2);
  });

  it('uninitialized variables are undefined', () => {
    // act
    let aNumber;
  
    // assert
    assert.equal('undefined', typeof aNumber);
    assert.equal(undefined, aNumber);
  });

  it('null should be used for not set', () => {
    // arrange
    // declaring a dummy function
    const peekIntoTheBox = () => {
      return false;
    };
  
    // act
    let isCatAlive = null;
  
    // assert
    assert.equal(null, isCatAlive);
    isCatAlive = peekIntoTheBox();
    assert.equal(false, isCatAlive);
  });
});

describe('loops does things over and over', () => {
  it.skip('while-loops just keeps going ...', () => {
    // act
    while (1 < 2) {
      console.log('Another lap in the loop');
    }
  });

  it('while-loops just keeps going unless we stop them', () => {
    // arrange
    let counter = 0;
  
    // act
    while (counter < 2) {
      console.log(`Counter is now '${counter}'`);
  
      counter++;
    }
  });

  it('arrays keep values', () => {
    // arrange
    const array1 = [1, 2, 3, 4];
    const array2 = ['Marcus', 'Eliza', 'Obaid'];
    const array3 = ['Marcus', 49, true];
  });

  it('getting elements out of arrays', () => {
    // arrange
    const names = ['Marcus', 'Eliza', 'Obaid'];
  
    // act
    const firstElement = names[0];
    const secondElement = names[1];
  
    const length = names.length;
    const lastElement = names[length - 1];
  
    // assert
    assert.equal(firstElement, 'Marcus');
    assert.equal(secondElement, 'Eliza');
    assert.equal(lastElement, 'Obaid');
    assert.equal(length, 3);
  });

  it('removing last element from array using slice', () => {
    // arrange
    const names = ['Marcus', 'Eliza', 'Obaid', 'Arvid'];
    
    // assert
    assert.equal(names.length, 4);
  
    // act
    names.splice(names.length - 1, 1);
  
    // assert
    assert.equal(names.length, 3);
    assert.equal(names[3], undefined);
  });

  it('removing first elements from array using slice', () => {
    // arrange
    const names = ['Marcus', 'Eliza', 'Obaid', 'Arvid'];
    
    // assert
    assert.equal(names.length, 4);
  
    // act
    names.splice(0, 1);
  
    // assert
    assert.equal(names.length, 3);
    assert.equal(names[0], 'Eliza');
  });

  it('filter an array - mutable', () => {
    // arrange
    const numbers = [10, 23, 13, 33, 8, 12];
    
    // assert
    assert.equal(numbers.length, 6);
  
    // act (solution with incrementing i)
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] > 10) {
        numbers.splice(i, 1);
        i--;
      }
    }    

    // act (solution with decrementing i)
    for (let i = numbers.length - 1; i >= 0; i--) {
      if (numbers[i] > 10) {
        numbers.splice(i, 1);
      }
    }  
  
    // assert
    assert.equal(numbers.length, 2);
    assert.equal(numbers[0], 10);
  });

  it('filter an array - immutable', () => {
    // arrange
    const numbers = [10, 23, 1, 33, 8, 12];
  
    // act
    const lowNumbers = numbers.filter(x => x > 10);
  
    // assere
    assert.equal(lowNumbers.length, 3);
  });
});

describe('object are for building things', () => {
  it('our first object - a human', () => {
    // arrange
    const person = {
      name: 'Marcus',
      birthYear: 1972,
      isTeacher: true,
    };

    // assert
    assert.equal(person.name, 'Marcus');
    assert.equal(person.birthYear, 1972);
    assert.equal(person.isTeacher, true);
  });

  it('get age for person', () => {
    // arrange
    const currentYear = 2022;

    const person = {
      name: 'Marcus',
      birthYear: 1972,
      isTeacher: true,
    };
  
    // act
    const age = getAgeForPerson(person, currentYear);
  
    // assert
    assert.equal(age, 50);
  });

  it('a list of persons - people that is - with their hobbies', () => {
    // arrange 
    const vera = {
      age: 32,
      hobbies: ['play the piano', 'rollerblading', 'fishing'],
      favoriteColor: 'green'
    };

    const klara = {
      age: 38,
      hobbies: ['climbing', 'dancing', 'swimming'],
      favoriteColor: 'purple'
    };

    const carl = {
      age: 48,
      hobbies: ['boating', 'coding', 'biking'],
      favoriteColor: 'blue'
    };

    const people = [vera, klara, carl];

    // assert
    assert.equal(vera.age, 32)
    assert.equal(klara.age, 38)
    assert.equal(klara.hobbies[2], 'swimming')
    assert.equal(klara.favoriteColor, 'purple')
    assert.equal(carl.hobbies[1], 'coding')
  });
});
