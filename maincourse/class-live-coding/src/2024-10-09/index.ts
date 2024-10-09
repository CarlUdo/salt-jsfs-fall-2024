const nameArray = ['carl', 'leo', 'anton'];

const filledArray = new Array(100).fill(null).map((_, i) => i);

const lastElement = nameArray[nameArray.length -1];

const indexOfValueCarl = nameArray.indexOf('carl');

const newArray = nameArray
.map(name => name + '_excellent_coder!')
.forEach(name => console.log(name));
