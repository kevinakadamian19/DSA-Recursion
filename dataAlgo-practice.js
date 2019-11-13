//Counting Sheep

const sheep = 3;

const countSheep = function(sheep) {
    if (sheep === 0) {
        return 'All sheep jumped over the fence.'
    }
    console.log(sheep, `Another sheep has jumped over the fence!`)
    sheep--;
    return countSheep(sheep);
}

//Power Calculator

const powerCalculator = function(base, exponent) {
    //base case stating if exponent is less than 0 return statement
    if(exponent < 0 ) {
        return `Exponent should be >= 0`
    }
    //secondary base case stating that if exponent is 0 then the value should return 1
    if(exponent === 0) {
        return 1;
    }
    return base * powerCalculator(base, exponent - 1);
}

//Reverse String

const word = 'hello';

const reverseString = function(word) {
    if(word === "") {
        return "";
    }
    return reverseString(word.substr(1) + word.charAt(0));
}

//nth Triangular Number

//Triangular Number Sequence = 1, 3, 6, 10, 15, 21, 28, 36, 45

const triNumber = function(n) {
    if(n <= 1) {
        return 1;
    }
    return n + triNumber(n - 1);
}

//String Splitter

const reverseString = (string) => {
   
    
}

//Fibonnacci

const Fib = function(input) {
    if(input <= 0) {
        return;
    }
    if(input === 1 || input === 2) {
        return 1;
    }
    return Fib(input - 1) + Fib(input - 2);
}

//Factorial

const factNum = function(num) {
    if(num === 0) {
        return 1;
    }
    return num * factNum(num - 1);
}

//Find way out of maze

//Find all ways out of maze

//Anagrams

//Organizing Chart


//Binary Representation