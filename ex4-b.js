const fs = require("fs")

const input = fs.readFileSync("ex4-input.txt", { encoding: "utf8" })

const fields = ["byr", "iyr", "eyr", "hgt", "hcl", "ecl", "pid"/*, "cid"*/]

const groups = input.trim().split("\n\n")
const groupKeyValues = groups.map(g => g.replace(/\n/g, " ").split(" ").map(kv => kv.split(":")))

const validate = (key, value) => {
  switch (key) {
    case "byr": return value.length === 4 && value >= 1920 && value <= 2002
    case "iyr": return value.length === 4 && value >= 2010 && value <= 2020
    case "eyr": return value.length === 4 && value >= 2020 && value <= 2030
    case "hgt": {
      const match = /(\d+)(cm|in)/.exec(value)
      if (match) {
        const [, height, unit] = match
        return unit === "cm" ?
          height >= 150 && height <= 193 :
          height >= 59 && height <= 76
      }
      return false
    }
    case "hcl": return /^#[0-9a-f]{6}$/.test(value)
    case "ecl": return /^(amb|blu|brn|gry|grn|hzl|oth)$/.test(value)
    case "pid": return /^\d{9}$/.test(value)
    default: return true
  }
}

const validPassports = groupKeyValues.filter(pp => fields.every(f => !!pp.find(([key, value]) => key === f && validate(key, value))))

console.log(validPassports.length)