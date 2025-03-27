const sumAll = function(num1, num2) {
    if (num1 < 0|| num2 < 0) return 'ERROR';
    if (!Number.isInteger(num1) || !Number.isInteger(num2)) return 'ERROR';

    const high = num1 > num2 ? num1 : num2;
    const bottom = num1 < num2 ? num1 : num2;
    let result = bottom;

    for(i=bottom+1; i<=high; i++)
        result = result + i;

    return result;
};

// Do not edit below this line
module.exports = sumAll;
