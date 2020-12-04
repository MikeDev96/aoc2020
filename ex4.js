const fs = require("fs")

const input = fs.readFileSync("ex4-input.txt", { encoding: "utf8" })

const fields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"/*, "cid"*/]

const groups = input.trim().split("\n\n")
const groupKeyValues = groups.map(g => g.replace(/\n/g, " ").split(" ").map(kv => kv.split(":")))
const validPassports = groupKeyValues.filter(pp => fields.every(f => !!pp.find(([key]) => key === f)))

console.log(validPassports.length)