const date = new Date();
const [month, day, year] = [
  date.getMonth(),
  date.getDate(),
  date.getFullYear(),
];

let tuKi = month + 1;
console.log(year+'年'+tuKi+'月'+day+'日');
