export const getAge = (birthYear, currentYear) => currentYear - birthYear;

export const getAgeForPerson = (person, currentYear) => currentYear - person.birthYear;

export const getAgeGroup = (age) => {
  if (age < 0) return 'not born'
  if (age < 4) return 'toddler';
  if (age < 13) return 'kid';
  if (age < 20) return 'teenager';
  if (age < 40) return 'adult';
  if (age === 50) return 'prime';  
  if (age > 100) return 'probably dead';
  return 'old'
};

export const divideIt = (firstNumber, secondNumber) => {
  if (secondNumber === 0) {
    throw new Error(`No divison with zero please...`)
  }
  
  return firstNumber / secondNumber;
};
