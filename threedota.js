// three dots ...

const ages = [12,14,15,16,78];
const ages2 = [24,48,72];
const ages3 = [2,3,4];
const allAges = ages.concat(ages2).concat([5]).concat(ages3);
const allAges2 = [...ages, ...ages2,...ages3];
// console.log(allAges);
console.log(allAges2);

const business = 650;
const minister = 450;
const sochib = 550;
// const maximum = Math.max(business,minister,sochib);
const amount = [650,450,550];
const maximum = Math.max(...amount);
console.log(maximum);