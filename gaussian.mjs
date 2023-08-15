import gaussian from "gaussian";

const mean = 0;
const variance = 1;

const distribution = gaussian(mean, variance);
const n = parseInt(process.argv[2]);
console.log(distribution.random(n).join('\n'));