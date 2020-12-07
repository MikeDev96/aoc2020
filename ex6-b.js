const fs = require("fs")

const input = fs.readFileSync("ex6-input.txt", { encoding: "utf8" })

const allYesAnswers = input.trim().split("\n\n").map(chars => {
  const uniqueChars = [...new Set(chars.replace(/\s/g, ""))]
  const rows = chars.split("\n")

  return uniqueChars.reduce((acc, cur) => acc + rows.every(row => row.includes(cur)), 0)
})

const allYesSum = allYesAnswers.reduce((acc, cur) => acc + cur, 0)
console.log(allYesSum)