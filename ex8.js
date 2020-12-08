const fs = require("fs")

const input = fs.readFileSync("ex8-input.txt", { encoding: "utf8" })

const instructions = [...input.matchAll(/(acc|jmp|nop) ([+-]\d+)/g)].map(([, op, arg]) => ({ op, arg: parseInt(arg) }))

let acc = 0
let cur = 0
const visited = new Map()

while (true) {
  const instruction = instructions[cur]

  if (instruction.op === "acc") {
    acc += instruction.arg
    cur++
  }
  else if (instruction.op === "jmp") {
    cur += instruction.arg
  }
  else if (instruction.op === "nop") {
    cur++
  }

  if (visited.has(cur)) {
    break
  }

  visited.set(cur)
}

console.log(acc)