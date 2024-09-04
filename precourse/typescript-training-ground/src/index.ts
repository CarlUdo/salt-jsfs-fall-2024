export const greet = (birthYear: number, name: string): string => {
  const age = new Date().getFullYear() - birthYear;

  return `Hello ${name}, you are ${age} years old`;
};

export const isOld = (age: number) => age >= 35;
