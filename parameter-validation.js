function getMeanTemp(temperatures) {
    //Making sure that the parameter is an array in order to perform  the operation
    if (!(temperatures instanceof Array)) {
        return NaN;
    }
    let sum = 0;
    for (let i = 0; i < temperatures.length; i++) {
        sum += temperatures[i];
    }
    return sum / temperatures.length;
}

console.log(getMeanTemp(10));       // -> NaN
console.log(getMeanTemp([10, 30])); // -> 20