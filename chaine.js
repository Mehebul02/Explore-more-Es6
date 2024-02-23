// data access
const data = [
  { name: "mehebul Alif", address: "Kazihata Bheramara", post: "Satbaria" },
];
console.log(data[0].post);

const products = {
  count: 5000,
  data: [
    { name: "Hp", model: "2690aq", price: 61000 },
    { name: "Deal", model: "455mt", price: 74000 },
  ],
};
console.log(products.data[1].price);

const users = {
  home: "Kuakata",
  secondAddress: {
    home: "Jhenaidah sdar",
  },
  permanentAddress: {
    home: "Kazihata",
    post: "Satbaria",
    Thana: "Bheramara",
    district: "Kushtia",
  },
};
console.log(users.permanentAddress.district)