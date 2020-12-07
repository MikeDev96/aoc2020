const fs = require("fs")

const input = fs.readFileSync("ex7-input.txt", { encoding: "utf8" })

const matches = [...input.matchAll(/^(\w+? \w+?) bags contain (.+?).$/gm)]

const map = matches.reduce((acc, [, colour, childBags]) => {
  const bags = [...childBags.matchAll(/(\d+?|no) (\w+? \w+?|other) bags?/g)].map(([, quantity, colour]) => ({ quantity: parseInt(quantity), colour }))
  acc[colour] = bags.filter(bag => bag.colour !== "other")
  return acc
}, {})

const outermostBags = matches.map(([, colour]) => [colour, map[colour]])
const goldBag = outermostBags.find(([colour]) => colour === "shiny gold")

const countBags = bags => {
  let total = bags.reduce((acc, cur) => acc + cur.quantity, 0)
  bags.forEach(bag => {
    total += bag.quantity * countBags(map[bag.colour])
  })
  return total
}

const totalInnerBags = countBags(goldBag[1], 0)
console.log(totalInnerBags)