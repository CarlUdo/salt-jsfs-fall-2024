"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePeople = void 0;
var faker_1 = require("@faker-js/faker");
var generatePeople = function (numberOfPersons) {
    var createRandomUser = function () {
        return {
            userId: faker_1.faker.string.uuid(),
            fullName: faker_1.faker.person.fullName(),
            email: faker_1.faker.internet.email(),
            address: faker_1.faker.location.streetAddress(),
            phoneNumber: faker_1.faker.phone.number({ style: 'international' }),
            age: faker_1.faker.number.int({ min: 10, max: 100 }),
            gender: faker_1.faker.person.sex(),
            zodiacSign: faker_1.faker.person.zodiacSign(),
            favoriteDish: faker_1.faker.food.dish(),
            pet: faker_1.faker.animal.type(),
            bio: faker_1.faker.person.bio(),
            avatar: faker_1.faker.image.avatar()
        };
    };
    return faker_1.faker.helpers.multiple(createRandomUser, {
        count: numberOfPersons
    });
};
exports.generatePeople = generatePeople;
