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
});
