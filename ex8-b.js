const fs = require("fs")

const input = fs.readFileSync("ex8-input.txt", { encoding: "utf8" })

const instructions = [...input.matchAll(/(acc|jmp|nop) ([+-]\d+)/g)].map(([, op, arg]) => ({ op, arg: parseInt(arg) }))

const boot = (instructions) => {
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

    if (!instructions[cur]) {
      return acc
    }

    visited.set(cur)
  }

  return false
}

const flipOps = ["jmp", "nop"]
const accAndNopInstructions = instructions.map((inst, idx) => flipOps.includes(inst.op) ? idx : -1).filter(idx => idx >= 0)

for (const idx of accAndNopInstructions) {
  const instructionsCopy = instructions.map(inst => ({ ...inst }))
  const inst = instructionsCopy[idx]
  inst.op = flipOps[!flipOps.indexOf(inst.op) + 0]

  const acc = boot(instructionsCopy)
  if (typeof acc === "number") {
    console.log(acc)
    break
  }
}