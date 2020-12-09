const fs = require("fs")

const input = fs.readFileSync("ex9-input.txt", { encoding: "utf8" })

const numbers = [...input.matchAll(/\d+/g)].map(n => parseInt(n))
const preamble = 25

const anomaly = numbers.slice(preamble).find((num, idx) => {
  const prevNumbers = numbers.slice(idx, idx + preamble)
  const pairs = prevNumbers.reduce((acc, num1) => [...acc, ...prevNumbers.map(num2 => num1 !== num2 && num1 + num2).filter(num => typeof num === "number")], [])
  return !pairs.includes(num)
})

numbers.some((num1, idx1) => {
  let total = num1
  numbers.slice(idx1 + 1).some((num2, idx2) => {
    total += num2
    if (total === anomaly) {
      const contiguousSet = numbers.slice(idx1, idx1 + idx2 + 2)
      const minNum = Math.min(...contiguousSet)
      const maxNum = Math.max(...contiguousSet)

      console.log(minNum + maxNum)
      return true
    }
  })
})