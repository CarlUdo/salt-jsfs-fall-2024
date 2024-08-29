export const getAge = (birthYear, currentYear) => currentYear - birthYear;

export const getAgeGroup = (age) => {
  if (age < 4) return 'toddler';
  if (age < 13) return 'kid';
  if (age < 20) return 'teenager';
  if (age < 40) return 'adult';
  if (age === 50) return 'prime';  
  return 'old';
};
