let value = prompt("Enter the size of the array");
if (value) {
  let vl = prompt("Enter the values of array in this prompt with ,");
  let newvl = vl.split(",");
  if (newvl.length > +value || newvl.length < +value) {
    alert("length of array must be " + value);
  } else {
    console.log("output");
    for (let i = 0; i < newvl.length; i++) {
      if (+newvl[i] % 2 === 0) {
        console.log(newvl[i]);
      }
    }
  }
}
