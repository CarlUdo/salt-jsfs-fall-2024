"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isErrorInfo = exports.isPersonProperties = exports.isCreatedPerson = exports.isPerson = void 0;
const isPerson = (obj) => {
    return (typeof obj === 'object' &&
        obj !== null &&
        typeof obj.fullName === 'string' &&
        typeof obj.email === 'string' &&
        typeof obj.address === 'string' &&
        (typeof obj.phoneNumber === 'undefined' || typeof obj.phoneNumber === 'string') &&
        (typeof obj.age === 'undefined' || typeof obj.age === 'number') &&
        (typeof obj.gender === 'undefined' || typeof obj.gender === 'string') &&
        (typeof obj.zodiacSign === 'undefined' || typeof obj.zodiacSign === 'string') &&
        (typeof obj.favoriteDish === 'undefined' || typeof obj.favoriteDish === 'string') &&
        (typeof obj.pet === 'undefined' || typeof obj.pet === 'string') &&
        (typeof obj.bio === 'undefined' || typeof obj.bio === 'string') &&
        (typeof obj.avatar === 'undefined' || typeof obj.avatar === 'string'));
};
exports.isPerson = isPerson;
const isCreatedPerson = (obj) => (0, exports.isPerson)(obj) && typeof typeof obj.userId === 'string';
exports.isCreatedPerson = isCreatedPerson;
const isPersonProperties = (obj) => {
    const properties = ['fullName', 'email', 'address', 'phoneNumber', 'age', 'gender',
        'zodiacSign', 'favoriteDish', 'pet', 'bio', 'avatar'];
    const hasAtLeastOneProperty = properties.some(prop => prop in obj);
    const hasOnlyValidProperties = Object.keys(obj).every(prop => properties.includes(prop));
    return hasAtLeastOneProperty && hasOnlyValidProperties;
};
exports.isPersonProperties = isPersonProperties;
const isErrorInfo = (logObj) => {
    return (typeof logObj === 'object' &&
        logObj !== null &&
        typeof logObj.status === 'number' &&
        typeof logObj.name === 'string' &&
        typeof logObj.message === 'string' &&
        typeof logObj.type === 'string' &&
        typeof logObj.stack === 'string');
};
exports.isErrorInfo = isErrorInfo;
//# sourceMappingURL=type-guards.js.map