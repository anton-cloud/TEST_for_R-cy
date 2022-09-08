function loadGrain(levels) {
    return [...recursion(levels, levels, 1)].reduce(
        (acc, current, index) => (acc += current - levels[index]),
        0
    );
}

function recursion(levels, res, count) {
    let data = [...res];
    if (count < levels.length - 1) {
        if (data[count - 1] > data[count]) {
            data[count] = data[count - 1];
        }
        data = [...recursion(levels, data, count + 1)];
    }
    if (data[count - 1] > data[count]) {
        if (levels[count - 1] > data[count]) {
            data[count - 1] = levels[count - 1];
        } else {
            data[count - 1] = data[count];
        }
    }
    return data;
}

console.log("variant - 2");
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