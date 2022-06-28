const Province = require("../province");
const assert = require("assert");

describe("province", () => {
  it("shortfall", function () {
    const asia = new Province(sampleProvinceData());
    assert.equal(asia.shortfall, 5);
  });
});

function sampleProvinceData() {
  return {
    name: "Asia",
    producers: [
      { name: "Byzantium", cost: 10, production: 9 },
      { name: "Attalia", cost: 12, production: 10 },
      { name: "Sinope", cost: 10, production: 6 },
    ],
    demand: 30,
    price: 20,
  };
}
