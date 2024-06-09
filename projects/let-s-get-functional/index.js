// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require('underbar');

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./let-s-get-functional.github.io/projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

// var maleCount = function(array) {
//     return _.filter(array, customer => customer.gender === 'male' ).length


// _.filter = function(arr, func){
//     //create an empty array to return later
//     let retArr = [];
//     //loop through the array
//     for (let i = 0; i < arr.length; i++){
//         //check if called input func for each array element is true
//         if (func(arr[i], i, arr)){
//             //push this array value to our retArr
//             retArr.push(arr[i]);
//         }

//     }
//     //returns retArr
//     return retArr;
// }


let maleCount = function(array){
    //set variable male customers to the invocation of filter, passing arguments of the input array and a function that checks if the 
    let maleCusts = _.filter(array, function(customer){
        return customer.gender === 'male'
    });
    return maleCusts.length;


}
    //     let males = _.reduce(array, function(accumulator, current){
    //         if (current.gender === 'male'){
    //             accumulator += 1;
    //         }
    //         return accumulator
    //     }, 0);
    //     return males;
    // }


    // //create return array
    // let retArr = [];
    // //iterate through the array
    // for (let i = 0; i < array.length; i++){
    //     if (array[i].gender === 'male'){
    //         retArr.push(array[i]);
    //     }
    // }
    // return retArr;
    //}


var femaleCount = function(array){
    //set variable male customers to the invocation of filter, passing arguments of the input array and a function that checks if the 
    let maleCusts = _.filter(array, function(customer){
        return customer.gender === 'female'
    });
    return maleCusts.length;


};




var oldestCustomer = function(array){
    //age tracker and an empty string to return later
    let currentElderAge = 0;
    let currentElder = ''
    //loop through the array
    for (let i = 0; i < array.length; i++){
        //check if the currently iterated person is older or not
        if (array[i].age > currentElderAge){
            currentElderAge = array[i].age;
            currentElder = array[i].name
        }
    }
    return currentElder;
}

// var oldestCustomer = function(array){
//     let oldest = _.reduce(array, function(accumulator, current){
//         if (current.age > accumulator.age){
//             return current;
//         } else {
//             return accumulator;

//         }
//     })
//     return oldest;
// };



var youngestCustomer = function(array){
    //age tracker and an empty string to return later
    let currentBabyAge = 99999999;
    let currentBaby = ''
    //loop through the array
    for (let i = 0; i < array.length; i++){
        //check if the currently iterated person is older or not
        if (array[i].age < currentBabyAge){
            currentBabyAge = array[i].age;
            currentBaby = array[i].name
        }
    }
    return currentBaby;
}

var averageBalance = array => {
    let totBal = 0;
    let avgBal = 0;
    //loop through the array to access the balance properties
    for (let i = 0; i < array.length; i++){

        //set totBal to equal the itself plus current array's balance converted to a number
        totBal += Number(array[i].balance.slice(1, array[i].length).replace(',',''));
    }


    return Number((totBal / array.length));
};



// ### 6: `firstLetterCount`
//  - **Objective**: Find how many customer's names begin with a given letter
//  - **Input**: `Array`, `Letter`
//  - **Output**: `Number`
//  - **Constraints**:


//firstLetterCount is assigned to a function that takes parameters array and string
var firstLetterCount = (array, letter) => {
    //create a counter variable number to use and return later
    let counter = 0;

    //swap out our argument variable for a lowercased version to check against
    let char = letter.toLowerCase()

    //loop through the array
    for (let i = 0; i < array.length; i++){

        //check if the lowercased 0th index of the string contained in the current iterated array element's name property equals the input char
        if (array[i].name[0].toLowerCase() === char){
            
            //increment counter
            counter += 1;

        }
    }
    //return counter
    return counter;

};


// ### 7: `friendFirstLetterCount`
//  - **Objective**: Find how many friends of a given customer have names that start with a given letter
//  - **Input**: `Array`, `Customer`, `Letter`
//  - **Output**: `Number`
//  - **Constraints**:



//assigned to a function that takes values of array, customer (presumably a string name of a customer), and a letter as parameters
var friendFirstLetterCount = (array, customer, letter) => {

    //create a counter variable for later use and return
    let counter = 0;

    //swap out the argument variable for for its lowercased version to check against
    let char = letter.toLowerCase();

    //loop through the array to look for customer
    for (let i = 0; i < array.length; i++){
        
        //check if the current iterated array's object's name property is euqal to the input customer
        if (array[i].name === customer){

            //loop through the current iterated array-object's friends array
            for (let subI = 0; subI < array[i].friends.length; subI++){

                //check if the lowercased 0th index of the string contained in the current iterated array-object's current friends-array-object's name property equals the input char
                if (array[i].friends[subI].name[0].toLowerCase() === char){

                    //increment counter
                    counter += 1;
                }

            }

        }
    }
    //return counter
    return counter;
}



// ### 8: `friendsCount`
//  - **Objective**: Find the customers' names that have a given customer's name in their friends list
//  - **Input**: `Array`, `Name`
//  - **Output**: `Array`
//  - **Constraints**:


var friendsCount;













var topThreeTags;

var genderCount;

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
