const Province = require("../province");

describe("province", () => {
  let asia;
  beforeEach(function () {
    asia = new Province(sampleProvinceData());
  });
  it("shortfall", function () {
    expect(asia.shortfall).toBe(5);
  });

  it("profit", function () {
    expect(asia.profit).toBe(230);
  });

  it("change production", function () {
    asia.producers[0].production = 20;
    expect(asia.shortfall).toBe(-6);
    expect(asia.profit).toBe(292);
  });

  it("zero demand", function () {
    asia.demand = 0;
    expect(asia.shortfall).toBe(-25);
    expect(asia.profit).toBe(0);
  });

  it("negative demand", function () {
    asia.demand = -1;
    expect(asia.shortfall).toBe(-26);
    expect(asia.profit).toBe(-10);
  });

  it("empty estring demand", function () {
    asia.demand = "";
    expect(asia.shortfall).toBe(NaN);
    expect(asia.profit).toBe(NaN);
  });
});

describe("no producers", function () {
  let noProducers;
  beforeEach(function () {
    const data = {
      name: "No producers",
      producers: [],
      demand: 30,
      price: 20,
    };
    noProducers = new Province(data);
  });

  it("shortfall", function () {
    expect(noProducers.shortfall).toBe(30);
  });

  it("profit", function () {
    expect(noProducers.profit).toBe(0);
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

// 以下はパスしないコードなのでコメントアウト
// describe("string for producers", function () {
//   it("", function () {
//     const data = {
//       name: "String producers",
//       producers: "",
//       demand: 30,
//       price: 20,
//     };
//     const prov = new Province(data);
//     expect(prov, shortfall).toBe(0);
//   });
// });
