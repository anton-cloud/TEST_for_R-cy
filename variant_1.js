function loadGrain(levels) {

  let count = 0;
  let first = 0;
  let last = 3;


  for (let i = 0; last <= levels.length; i += 1) {
    const newArr = levels.slice(first, last)

    if (newArr[1] > newArr[0] && newArr[1] > newArr[2]) {
      count += 0
    }
    else if (newArr[0] > newArr[2] && newArr[1] !== 0) {
      count += newArr[2] - newArr[1]
    }
    else if (newArr[0] < newArr[2] && newArr[0] === 0) {
      count += newArr[1]
    }

    else if (newArr[0] > newArr[2] && newArr[2] === 0) {
      count += newArr[1] - newArr[2]
    }

    else if (newArr[0] < newArr[2] && newArr[1] !== 0) {
      count += newArr[0] - newArr[1]
    }

    else if (newArr[0] > newArr[2] && newArr[1] === 0) {
      count += newArr[0] - newArr[1]
    }
    else if (newArr[0] < newArr[2] && newArr[1] === 0) {
      count += newArr[2] - newArr[1]
    }

    first += 1
    last += 1

  }
  return count;
}


console.log("variant - 1");
console.log("loadGrain([4, 1, 3]) , ", loadGrain([4, 1, 3]));
console.log("loadGrain([2, 1, 5, 2, 7, 4, 10]) , ", loadGrain([2, 1, 5, 2, 7, 4, 10]));
console.log("loadGrain([2, 0, 1, 5, 2, 7]) , ", loadGrain([2, 0, 1, 5, 2, 7]));
console.log("loadGrain([2, 4, 2]) , ", loadGrain([2, 4, 2]));
console.log("loadGrain([7, 4]) , ", loadGrain([7, 4]));
console.log("loadGrain([]) , ", loadGrain([]));


// loadGrain([4, 1, 3]) // 2
// loadGrain([2, 1, 5, 2, 7, 4, 10]) // 7
// loadGrain([2, 0, 1, 5, 2, 7]) // 6
// loadGrain([2, 4, 2]) // 0
// loadGrain([7, 4]) // 0
// loadGrain([]) // 0