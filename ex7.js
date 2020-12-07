const fs = require("fs")

const input = fs.readFileSync("ex7-input.txt", { encoding: "utf8" })

const matches = [...input.matchAll(/^(\w+? \w+?) bags contain (.+?).$/gm)]

const map = matches.reduce((acc, [, colour, childBags]) => {
  const bags = [...childBags.matchAll(/(\d+?|no) (\w+? \w+?|other) bags?/g)].map(([, quantity, colour]) => ({ quantity, colour }))
  acc[colour] = bags.filter(bag => bag.colour !== "other").map(bag => bag.colour)
  return acc
}, {})

const find = (bags, path, out) => {
  for (const bag of bags) {
    if (bag === "shiny gold") {
      out.push([...path, bag])
    }
    else if (map[bag]) {
      find(map[bag], [...path, bag], out)
    }
  }

  return out
}

const outermostBags = matches.map(([, colour]) => [colour, map[colour]])
const goldBagParents = outermostBags.filter(([bag, innerBags]) => !!find(innerBags, [bag], []).length)

console.log(goldBagParents.length)