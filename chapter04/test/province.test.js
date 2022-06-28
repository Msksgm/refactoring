const Province = require("../province");

describe("province", () => {
  it("shortfall", function () {
    const asia = new Province(sampleProvinceData());
    expect(asia.shortfall).toBe(5);
  });
  it("profit", function () {
    const asia = new Province(sampleProvinceData());
    expect(asia.profit).toBe(230);
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
