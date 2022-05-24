// ----1--Given an array of 0's and 1's find out number of 0's 
function firstZero(arr, low, high) {
    if (high >= low) {

        var mid = low + parseInt((high - low) / 2);
        if ((mid == 0 || arr[mid - 1] == 1) && arr[mid] == 0)
            return mid;

        if (arr[mid] == 1)
            return firstZero(arr, (mid + 1), high);
        else
            return firstZero(arr, low, (mid - 1));
    }
    return -1;
}

function countZeroes(arr, n) {

    var first = firstZero(arr, 0, n - 1);

    if (first == -1)
        return 0;

    return (n - first);
}


var arr = [1, 1, 1, 0, 0, 0, 0, 0];
var n = arr.length;
document.write("Count of zeroes is " + countZeroes(arr, n));





// //---2-----Given an array find out total no. of odd and even nos

// function CountingEvenOdd(arr, arr_size) {
//     let even_count = 0;
//     let odd_count = 0;

//     for (let i = 0; i < arr_size; i++) {

//         if (arr[i] & 1 == 1)
//             odd_count++;
//         else
//             even_count++;
//     }

//     document.write("Number of even elements = " + even_count + "Number of odd elements = " + odd_count);
// }

// let arr = [2, 3, 4, 5, 6];
// let n = arr.length;

// CountingEvenOdd(arr, n);


// //-----3----Given a string find out number of vowels

// function countVowel(str) {

//     const count = str.match(/[aeiou]/gi).length;

//     return count;
// }

// const string = prompt('Enter a string: ');

// const result = countVowel(string);

// console.log(result);