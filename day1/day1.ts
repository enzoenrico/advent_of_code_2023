import fs from "fs";

const regMap = {
  one: 1,
  two: 2,
};

const data = fs
  .readFileSync("/workspaces/advent_of_code_2023/day1/input.txt", "utf-8")
  .trim()
  .split("\n");

function partOne() {
  const values = data.map((line) => {
    let first = line.split("").find((v) => !Number.isNaN(Number(v)));
    let last = line.split("").findLast((v) => !Number.isNaN(Number(v)));
    return Number(first + last);
  });
  // console.log(values);
  return values.reduce((s, v) => s + v);
}
// console.log(partOne());

function partTwo() {
  let sum = 0;

  for (const line of data) {
    let digits = [];

    for (let i = 0; i < line.length; i++) {
      const c = line[i];

      if (!Number.isNaN(Number(c))) {
        digits.push(c);
      }

      const textDigits = [
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
      ];
      const lineSubstring = line.substring(i);
      for (let d = 0; d < textDigits.length; d++) {
        const textDigit = textDigits[d];
        if (lineSubstring.startsWith(textDigit)) {
          digits.push(d + 1);
        }
      }
    }

    const lastIndex = digits.length - 1;
    const twoDigits = `${digits[0]}${digits[lastIndex]}`;

    sum += Number(twoDigits);
  }
  console.log(sum)
}
partTwo();
