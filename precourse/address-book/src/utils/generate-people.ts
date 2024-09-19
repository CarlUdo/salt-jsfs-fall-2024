import { faker } from '@faker-js/faker';

export const generatePeople = (numberOfPersons: number) => {
  const createRandomUser = () => {
    return {
      userId: faker.string.uuid(),
      fullName: faker.person.fullName(),
      address: faker.location.streetAddress(),
      phoneNumber: faker.phone.number({ style: 'international' }),
      age: faker.number.int({ min: 10, max: 100 }), 
      gender: faker.person.sex(),
      zodiacSign: faker.person.zodiacSign(),
      favoriteDish: faker.food.dish(),
      pet: faker.animal.type(),
      bio: faker.person.bio(),
      email: faker.internet.email(),
      avatar: faker.image.avatar(),
    };
  };


  return faker.helpers.multiple(createRandomUser, {
    count: numberOfPersons,
  });
};
