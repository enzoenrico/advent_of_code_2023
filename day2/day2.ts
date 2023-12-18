// count how many games are possible based on the total cube quantity
import fs from "fs";

const data = fs
  .readFileSync("/workspaces/advent_of_code_2023/day2/input.txt", "utf-8")
  .trim()
  .split("\n");

const cubeQuantity: { [key: string]: number } = {
  green: 13,
  red: 12,
  blue: 14,
};

function partOne() {
  return data.map((line, gameId) => {
    return line
      .split(": ")[1]
      .split("; ")
      .map((set) => {
        // console.log([set]);
        const pulls = set.split(", ");
        return pulls.every((pull) => {
          const [count, color] = pull.split(" ");
          return cubeQuantity[color] >= Number(count);
        });
      })
      .every((p) => p);
    // console.log(sets);
  }).reduce((s, res, i) =>{
    return res ? s + (i + 1) : s;
  }, 0)
  return
}
// console.log(partOne());

function partTwo() {
  return data.map((line, gameId) => {
    return line
      .split(": ")[1]
      .split("; ")
      .map((set) => {
        // console.log([set]);
        const pulls = set.split(", ");
        return pulls.every((pull) => {
          const [count, color] = pull.split(" ");
          return cubeQuantity[color] >= Number(count);
        });
      })
      .every((p) => p);
    // console.log(sets);
  }).reduce((s, res, i) =>{
    return res ? s + (i + 1) : s;
  }, 0)
  return
}
