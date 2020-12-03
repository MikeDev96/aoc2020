const fs = require("fs")

const input = fs.readFileSync("ex1-input.txt", { encoding: "utf8" })

const numbers = input.split("\n").slice(0, -1).map(n => parseInt(n))

numbers.forEach(n1 => {
  numbers.forEach(n2 => {
    if (n1 + n2 === 2020) {
      console.log(n1 * n2)
    }
  })
})