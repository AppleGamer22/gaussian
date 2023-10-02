import gaussian from "gaussian";

const mean = 0;
const variance = 1;

const distribution = gaussian(mean, variance);
const n = parseInt(process.argv[2]);
// seed is not set, random number sequence would be different every time
console.log(distribution.random(n).join('\n'));
