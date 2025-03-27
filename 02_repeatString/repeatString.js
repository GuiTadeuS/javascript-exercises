const repeatString = function(string, number) {
    if (number < 0) return 'ERROR';
    if (number === 0) return '';
    
    let result = string; 

    for(let i=1; i<number; i++)
        result = result + string;
    
    return result;
};

// Do not edit below this line
module.exports = repeatString;
