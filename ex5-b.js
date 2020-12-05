const fs = require("fs")

const input = fs.readFileSync("ex5-input.txt", { encoding: "utf8" })

const getMiddle = (str, lowerChar, upperChar, max) => {
  let lower = 0
  let upper = max - 1

  for (const l of str) {
    if (l === lowerChar) {
      upper -= Math.ceil((upper - lower) / 2)
    }
    else if (l === upperChar) {
      lower += Math.ceil((upper - lower) / 2)
    }
  }

  return lower
}

const getSeatId = boardingPass => {
  const row = getMiddle(boardingPass.substr(0, 7), "F", "B", 128)
  const column = getMiddle(boardingPass.substr(7, 3), "L", "R", 8)

  return row * 8 + column
}

const boardingPasses = input.trim().split("\n")
const seatIds = boardingPasses.map(bp => getSeatId(bp)).sort((a, b) => a - b)
const missingSeat = seatIds.find((seatId, idx) => seatIds[idx + 1] !== seatId + 1)

console.log(missingSeat + 1)