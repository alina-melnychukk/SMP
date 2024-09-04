function greet(name) {
    return "Hello, " + name + "!";
}

function isAdult(age) {
    return age >= 18;
}

function calculateAverage(score1, score2, score3) {
    return (score1 + score2 + score3) / 3;
}

function hasPassed(average) {
    return average >= 60;
}

function toUpperCase(str) {
    return str.toUpperCase();
}

function toLowerCase(str) {
    return str.toLowerCase();
}

function contains(str, substring) {
    return str.indexOf(substring) !== -1;
}

function isEven(number) {
    return number % 2 === 0;
}

function isOdd(number) {
    return number % 2 !== 0;
}

function isPositive(number) {
    return number > 0;
}

function isNegative(number) {
    return number < 0;
}

function compareNumbers(num1, num2) {
    if (num1 > num2) {
        return num1 + " is greater than " + num2;
    } else if (num1 < num2) {
        return num1 + " is less than " + num2;
    } else {
        return num1 + " is equal to " + num2;
    }
}

function isEmpty(str) {
    return str.length === 0;
}

function trim(str) {
    return str.trim();
}

function getLength(str) {
    return str.length;
}

function concatenate(str1, str2) {
    return str1 + " " + str2;
}

function checkBoolean(value) {
    if (value) {
        return "The value is true";
    } else {
        return "The value is false";
    }
}

function reverseString(str) {
    return str.split("").reverse().join("");
}

function numberToString(number) {
    return number.toString();
}

function stringToNumber(str) {
    return parseInt(str);
}

function roundNumber(number) {
    return Math.round(number);
}

console.log(greet("John"));
console.log("Is John an adult? " + isAdult(20));
console.log("Average score: " + calculateAverage(70, 80, 90));
console.log("Has John passed? " + hasPassed(80));
console.log("Uppercase: " + toUpperCase("hello"));
console.log("Lowercase: " + toLowerCase("WORLD"));
console.log("Contains 'hello'? " + contains("hello world", "hello"));
console.log("Is 10 even? " + isEven(10));
console.log("Is 7 odd? " + isOdd(7));
console.log("Is 5 positive? " + isPositive(5));
console.log("Is -3 negative? " + isNegative(-3));
console.log(compareNumbers(5, 10));
console.log("Is empty string? " + isEmpty(""));
console.log("Trimmed string: '" + trim("  hello  ") + "'");
console.log("Length of 'hello': " + getLength("hello"));
console.log("Concatenated string: " + concatenate("hello", "world"));
console.log(checkBoolean(true));
console.log("Reversed string: " + reverseString("abc"));
console.log("Number to string: " + numberToString(123));
console.log("String to number: " + stringToNumber("456"));
console.log("Rounded number: " + roundNumber(4.7));

function square(number) {
    return number * number;
}

function cube(number) {
    return number * number * number;
}

function squareRoot(number) {
    return Math.sqrt(number);
}

function absoluteValue(number) {
    return Math.abs(number);
}

function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isInteger(number) {
    return Number.isInteger(number);
}

function power(base, exponent) {
    return Math.pow(base, exponent);
}

function factorial(number) {
    if (number === 0 || number === 1) {
        return 1;
    }
    let result = 1;
    for (let i = number; i > 1; i--) {
        result *= i;
    }
    return result;
}

function isPrime(number) {
    if (number <= 1) return false;
    if (number <= 3) return true;

    if (number % 2 === 0 || number % 3 === 0) return false;

    for (let i = 5; i * i <= number; i += 6) {
        if (number % i === 0 || number % (i + 2) === 0) return false;
    }
    return true;
}

function replaceSpaces(str) {
    return str.split(" ").join("-");
}

function isPalindrome(str) {
    let reversed = str.split("").reverse().join("");
    return str === reversed;
}

function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

function sortArrayAscending(arr) {
    return arr.sort((a, b) => a - b);
}

console.log("Square of 4: " + square(4));
console.log("Cube of 3: " + cube(3));
console.log("Square root of 16: " + squareRoot(16));
console.log("Absolute value of -10: " + absoluteValue(-10));
console.log("Random number between 1 and 10: " + randomBetween(1, 10));
console.log("Is 7 an integer? " + isInteger(7.5));
console.log("2 raised to the power of 3: " + power(2, 3));
console.log("Factorial of 5: " + factorial(5));
console.log("Is 11 prime? " + isPrime(11));
console.log("Replace spaces: " + replaceSpaces("Hello World"));
console.log("Is 'madam' a palindrome? " + isPalindrome("madam"));
console.log("Max in [1, 5, 3]: " + findMax([1, 5, 3]));
console.log("Min in [1, 5, 3]: " + findMin([1, 5, 3]));
console.log("Sorted array [3, 1, 2]: " + sortArrayAscending([3, 1, 2]));
