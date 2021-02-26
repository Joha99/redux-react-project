import { compose, pipe } from "lodash/fp";

let input = "  JavaScript  ";
let output = `<div>${input.trim()}</div>`;

const trim = (str) => str.trim();
const toLowerCase = (str) => str.toLowerCase();
const wrap = (type) => (str) => `<${type}>${str}</${type}>`;

// calls functions from left to right
// const transform = compose(wrapInDiv, toLowerCase, trim);
// transform(input);

// calls functions from trim to toLowerCase
// for pipe function, the return value of prev function is input value of next function
// wrap("div") returns a function where the trimmed, and lowercase string is passed in
const transform = pipe(trim, toLowerCase, wrap("div"));
console.log(transform(input));
