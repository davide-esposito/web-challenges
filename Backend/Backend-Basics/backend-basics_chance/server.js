import { createServer } from "node:http";
import { Chance } from "chance";

const chance = new Chance();

export const server = createServer((request, response) => {
  const fName = chance.first({ gender: "female", nationality: "en" });
  const lName = chance.last({ nationality: "en" });
  const age = chance.age();
  const profession = chance.profession();
  const company = chance.company();
  const address = chance.address();
  const paragraph = chance.paragraph({ sentences: 1 });
  const word = chance.word();

  response.end(
    `Hello, my name is ${fName}, ${lName} and I am ${age} years old. I am a ${profession} at ${company}, living in ${address}.\n My favourite paragraph:  ${paragraph} \n My favourite word: ${word}.`
  );
});
