const plays = require("./data/plays.json");
const invoices = require("./data/invoices.json");

const statement = require("../statement");

describe("statement test", () => {
  it("compare statement", () => {
    const actual = statement(invoices);
    const mock = `Statement for BigCo
 Hamlet:$650.00 (55 seats)
 As You Like it:$580.00 (35 seats)
 Othello:$500.00 (40 seats)
Amount owed is $1,730.00
You earned 47 credits
`;
    expect(actual).toBe(mock);
  });
});
