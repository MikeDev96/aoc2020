const fs = require("fs")

const input = fs.readFileSync("ex6-input.txt", { encoding: "utf8" })

const yesAnswers = input.trim().split("\n\n").map(chars => [...new Set(chars.replace(/\s/g, ""))].length)
const yesSum = yesAnswers.reduce((acc, cur) => acc + cur, 0)

console.log(yesSum)