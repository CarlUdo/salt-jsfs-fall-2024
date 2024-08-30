import assert from 'assert';
import { getAge, getAgeGroup } from './index.js';

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
  });
});
