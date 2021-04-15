let value = prompt("Enter the size of the array");
if (value) {
  let vl = prompt("Enter the values of sorted array in this prompt with ,");
  let newvl = vl.split(",");
  if (newvl.length > +value || newvl.length < +value) {
    alert("length of array must be " + value);
  } else {

let arr = newvl;
let k,
for(let j = 0; j < arr.length; j++) {
  k = j + 1;
  if (k < arr.length) {
    if (arr[j] === arr[k]) {
      console.log(arr[j]);
    }
  }
}
  }
}
