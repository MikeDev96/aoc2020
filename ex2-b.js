const fs = require("fs")

const input = fs.readFileSync("ex2-input.txt", { encoding: "utf8" })

const pattern = /^(\d+)-(\d+) ([a-z]): ([a-z]+)$/gm

let match
let validPasswords = 0

while ((match = pattern.exec(input))) {
  const [, index1, index2, letter, password] = match

  if ((password[index1 - 1] === letter && password[index2 - 1] !== letter) || (password[index2 - 1] === letter && password[index1 - 1] !== letter)) {
    validPasswords++
  }
}

console.log(validPasswords)