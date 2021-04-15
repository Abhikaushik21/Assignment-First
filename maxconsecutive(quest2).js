let value = prompt("Enter the size of the array");
if (value) {
  let vl = prompt("Enter the values of array in binary in this prompt with ,");
  let newvl = vl.split(",");
  if (newvl.length > +value || newvl.length < +value) {
    alert("length of array must be " + value);
  } else {
    let arr = newvl;
    let k,
      count = 0,
      max = 0;
    for (let j = 0; j < arr.length; j++) {
      k = j + 1;
      if (k < arr.length) {
        if (+arr[j] === 1 && +arr[k] === 1) {
          count++;
          count > max ? (max = count) : (max = max);
        } else {
          count = 0;
        }
      }
    }
    console.log("maximum number of consecutive 1's", max + 1);
  }
}
