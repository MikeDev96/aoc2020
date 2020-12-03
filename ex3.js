const fs = require("fs")

const input = fs.readFileSync("ex3-input.txt", { encoding: "utf8" })

const deltaX = 3
const deltaY = 1

const rows = input.split("\n")

let trees = 0

for (let y = 0; y < rows.length - 1; y += deltaY) {
  const x = (y / deltaY * deltaX) % rows[0].length
  if (rows[y][x] === "#") {
    trees++
  }
}

console.log(trees) // 156