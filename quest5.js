let obj = [
  { id: 4, name: "abc" },
  { id: 10, name: "ab2" },
  { id: 5, name: "abc3" },
  { id: 6, name: "abc5" },
];
obj.sort(sortById);
console.log(obj);

function sortById(n1, n2) {
  return n1.id - n2.id;
}
