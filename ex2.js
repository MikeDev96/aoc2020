const fs = require("fs")

const input = fs.readFileSync("ex2-input.txt", { encoding: "utf8" })

const pattern = /^(\d+)-(\d+) ([a-z]): ([a-z]+)$/gm

let match
let validPasswords = 0

while ((match = pattern.exec(input))) {
  const [, minOccur, maxOccur, letter, password] = match

  const chars = password.split("")
  const letterCount = chars.filter(c => c === letter).length

  if (letterCount >= minOccur && letterCount <= maxOccur) {
    validPasswords++
  }
}

console.log(validPasswords)