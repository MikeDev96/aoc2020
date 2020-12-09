const fs = require("fs")

const input = fs.readFileSync("ex9-input.txt", { encoding: "utf8" })

const numbers = [...input.matchAll(/\d+/g)].map(n => parseInt(n))
const preamble = 25

const anomaly = numbers.slice(preamble).find((num, idx) => {
  const prevNumbers = numbers.slice(idx, idx + preamble)
  const pairs = prevNumbers.reduce((acc, num1) => [...acc, ...prevNumbers.map(num2 => num1 !== num2 && num1 + num2).filter(num => typeof num === "number")], [])
  return !pairs.includes(num)
})

console.log(anomaly)