"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLocaleDateObj = void 0;
const getLocaleDateObj = (inputDate) => {
    let date = new Date();
    if (inputDate) {
        date = new Date(inputDate);
        if (date.toString() === 'invalidDateError') {
            throw new Error(`The date: ${inputDate} generated an "invalidDateError".`);
        }
    }
    const swedishDateString = date.toLocaleDateString('sv-SE');
    const timeFull = date.toLocaleString('sv-SE', { timeStyle: 'medium' });
    const timeFullSpecial = timeFull.replace(/:/g, '-');
    const timePartial = timeFull.slice(0, 5);
    const timePartialSpecial = timeFullSpecial.slice(0, 5);
    const dateFull = `${swedishDateString} ${timeFull}`;
    const dateFullSpecial = `${swedishDateString} ${timeFullSpecial}`;
    const datePartial = dateFull.slice(0, 16);
    const datePartialSpecial = `${swedishDateString} ${timePartialSpecial}`;
    const dateMedium = dateFull.slice(0, 10);
    const dateShort = dateFull.slice(0, 7);
    const dateYear = dateFull.slice(0, 4);
    const dateMonth = dateFull.slice(5, 7);
    const dateDay = dateFull.slice(8, 10);
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const milliseconds = date.getMilliseconds();
    const timestamp = date.getTime();
    return {
        dateFull, // 'YYYY-MM-DD HH:MM:SS'
        dateFullSpecial, // 'YYYY-MM-DD HH-MM-SS' 
        datePartial, // 'YYYY-MM-DD HH:MM'
        datePartialSpecial, // 'YYYY-MM-DD HH-MM'
        dateMedium, // 'YYYY-MM-DD'
        dateShort, // 'YYYY-MM'
        dateYear, // 'YYYY'
        dateMonth, // 'MM'
        dateDay, // 'DD'  
        timeFull, // 'HH:MM:SS' 
        timeFullSpecial, //HH-MM-SS'
        timePartial, // 'HH:MM'
        timePartialSpecial, // 'HH-MM'
        hours, // HH
        minutes, // MM
        seconds, // SS
        milliseconds, // sss
        timestamp // nnnnnnnn
    };
};
exports.getLocaleDateObj = getLocaleDateObj;
//# sourceMappingURL=date-functions.js.map