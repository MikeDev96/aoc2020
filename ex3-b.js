const fs = require("fs")

const input = fs.readFileSync("ex3-input.txt", { encoding: "utf8" })

const rows = input.split("\n")

const getTrees = (deltaX, deltaY) => {
  let trees = 0

  for (let y = 0; y < rows.length - 1; y += deltaY) {
    const x = (y / deltaY * deltaX) % rows[0].length
    if (rows[y][x] === "#") {
      trees++
    }
  }

  return trees
}

const slope1 = getTrees(1, 1)
const slope2 = getTrees(3, 1)
const slope3 = getTrees(5, 1)
const slope4 = getTrees(7, 1)
const slope5 = getTrees(1, 2)

console.log(slope1 * slope2 * slope3 * slope4 * slope5) // 3521829480