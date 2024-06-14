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
    //set variable male customers to the invocation of filter, passing arguments of the input array and a function that checks if the input customer's gender property is equal to 'male'
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







    // ### 2: `femaleCount`
    // - **Objective**: Find the number of female customers
    // - **Input**: `Array`
    // - **Output**: `Number`
    // - **Constraints**: use `reduce`



var femaleCount = function(array){
    //set variable femalecustss to the invocation of reduce, passing arguments of the input array and a function taking an accumulation and current index parameters
    let femaleCusts = _.reduce(array, (acc, current) =>{
        if (current.gender === 'female'){
            acc += 1;
        }
        return acc;
    
        }, 0)
        return femaleCusts;
    };

    



    //     return customer.gender === 'female'
    // });
    // return femaleCusts.length;


    // ### 3: `oldestCustomer`
    // - **Objective**: Find the oldest customer's name
    // - **Input**: `Array`
    // - **Output**: `String`
    // - **Constraints**:


//     let oldestCustomer = (array) => {
        
//         let oldest = _.reduce(array, function(acc, curr){

//             console.log(`curr: ${curr} \n curr.age: ${curr.age} \n acc:  ${acc} \n acc.age: ${acc.age}`)

//             if (curr.age > acc.age){
//                 return curr;
//             } else {
//                 return acc;
//             }
//         })
//         return oldest;

// }



var oldestCustomer = function(array){
    let oldest = _.reduce(array, function(accumulator, current){
        if (current.age > accumulator.age){
            return current;
        } else {
            return accumulator;

        }
    })
    return oldest.name;
};

//reduce takes in an array and cb function

    //check if typeof seed (which has no value) is strictly equal to "undefined"
        //assign the object name: stephanie cooper, age: 37 to seed
        //Last result is assigned to stephanie cooper
        //loop through the remainder of the input customers array starting at index 1
            //assign lastRes to {stephanie}

            //checking if 
       


// _.reduce = function(arr, func, seed){
    
//     //if the seed isn't a number, set seed to the value of the 0th array
//     if (typeof seed === "undefined"){
//         seed = arr[0];
//         //create a previous result variable lastRes and set it to seed
//         let lastRes = seed;
//         //loop thgrough the array, skipping the 0th index
//         for (let i = 1; i < arr.length; i++){
//             //for each iterated value, assign prevRes to the invoked func which is passed the arguments: prevRes, the indexed element, and the index
//             lastRes = func(lastRes, arr[i], i);
        
//         }
//         //return lastRes
//         return lastRes
//     }
//     //create a previous result variable prevRes and set it to seed
//     let prevRes = seed;

//     //iterate through the array
//     for (let i = 0; i < arr.length; i++){
//         //for each iterated value, assign prevRes to the invoked func which is passed the arguments: prevRes, the indexed element, and the index
//         prevRes = func(prevRes, arr[i], i);

//     }
//     return prevRes;
// }



// var oldestCustomer = function(array){
//     //age tracker and an empty string to return later
//     let currentElderAge = 0;
//     let currentElder = ''
//     //loop through the array
//     for (let i = 0; i < array.length; i++){
//         //check if the currently iterated person is older or not
//         if (array[i].age > currentElderAge){
//             currentElderAge = array[i].age;
//             currentElder = array[i].name
//         }
//     }
//     return currentElder;
// }

// const customers = [
//     { name: 'Stephanie Cooper', age: 37 },
//     { name: 'Bethany Joseph', age: 35 },
//     { name: 'Vickie Lee', age: 69 },
//     { name: 'Nathan Coen', age: 36 }
//   ];


//   ### 4: `youngestCustomer`
//   - **Objective**: Find the youngest customer's name
//   - **Input**: `Array`
//   - **Output**: `String`
//   - **Constraints**:


  let youngestCustomer = array => {
    let youngest = _.reduce(array, function (acc, current){
        if (current.age < acc.age){
            return current;
        } else {
            return acc;
        }


    })
    return youngest.name
  }










// var youngestCustomer = function(array){
//     //age tracker and an empty string to return later
//     let currentBabyAge = 99999999;
//     let currentBaby = ''
//     //loop through the array
//     for (let i = 0; i < array.length; i++){
//         //check if the currently iterated person is older or not
//         if (array[i].age < currentBabyAge){
//             currentBabyAge = array[i].age;
//             currentBaby = array[i].name
//         }
//     }
//     return currentBaby;
// }



















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


//firstLetter count is assigned to a funciton that takes parameters array and string
let firstLetterCount = (array, letter) =>{

    //create a return counter and set it to filter called with the array and a function returning the truthiness of the input letter checked against the first index of the customer's name property
    let counter = _.filter(array, customer => {
        return customer.name[0].toLowerCase() === letter.toLowerCase();


    })
    return counter.length;
}

// //firstLetterCount is assigned to a function that takes parameters array and string
// var firstLetterCount = (array, letter) => {
//     //create a counter variable number to use and return later
//     let counter = 0;

//     //swap out our argument variable for a lowercased version to check against
//     let char = letter.toLowerCase()

//     //loop through the array
//     for (let i = 0; i < array.length; i++){

//         //check if the lowercased 0th index of the string contained in the current iterated array element's name property equals the input char
//         if (array[i].name[0].toLowerCase() === char){
            
//             //increment counter
//             counter += 1;

//         }
//     }
//     //return counter
//     return counter;

// };


// ### 7: `friendFirstLetterCount`
//  - **Objective**: Find how many friends of a given customer have names that start with a given letter
//  - **Input**: `Array`, `Customer`, `Letter`
//  - **Output**: `Number`
//  - **Constraints**:


let friendFirstLetterCount = (array, custNam, char) => {

    let customer = array.reduce((acc, curr) => {
      if (curr.name === custNam) {
        acc = curr;
      }
      return acc;
    }, {})
  
    // console.log("customer:   ", customer)
  
   let custFrList = customer.friends;
    // console.log("custFrList:   ", custFrList)
  
    let output = custFrList.reduce((count, currFriend) => {
    //   console.log("first letter:  ", currFriend.name[0]);
    //   console.log("carh:  ", char);
      if (currFriend.name[0].toLowerCase() === char.toLowerCase()) {
        count += 1;
        // console.log("count:  ", count);
      }
    //   console.log("count outside:   ", count);
      return count;
  
    }, 0)

    return output;
  }
  
//   console.log(friendFirstLetterCount(customers, "Adele Mullen", 'J'));











// //assigned to a function that takes values of array, customer (presumably a string name of a customer), and a letter as parameters
// var friendFirstLetterCount = (array, customer, letter) => {

//     //create a counter variable for later use and return
//     let counter = 0;

//     //swap out the argument variable for for its lowercased version to check against
//     let char = letter.toLowerCase();

//     //loop through the array to look for customer
//     for (let i = 0; i < array.length; i++){
        
//         //check if the current iterated array's object's name property is euqal to the input customer
//         if (array[i].name === customer){

//             //loop through the current iterated array-object's friends array
//             for (let subI = 0; subI < array[i].friends.length; subI++){

//                 //check if the lowercased 0th index of the string contained in the current iterated array-object's current friends-array-object's name property equals the input char
//                 if (array[i].friends[subI].name[0].toLowerCase() === char){

//                     //increment counter
//                     counter += 1;
//                 }

//             }

//         }
//     }
//     //return counter
//     return counter;
// }



// ### 8: `friendsCount`
//  - **Objective**: Find the customers' names that have a given customer's name in their friends list
//  - **Input**: `Array`, `Name`
//  - **Output**: `Array`
//  - **Constraints**:


let friendsCount = (array, custName) => {


    //iterate through each customer object's friends array
  
  
    // console.log("AllFriends:   ", allFriends);
  
    return array.reduce((acc, curr) => {
      for (let i = 0; i < curr.friends.length; i++) {
        // console.log(curr[i].name);
        if (curr.friends[i].name === custName) {
          acc.push(curr.name);
          // console.log(acc);
        }
      }
    //   console.log(acc)
      return acc;
    }, [])
  }
  
  
  
//   console.log("***   ", friendsCount(customers, "Olga Newton"));




// //sets to a function that takes an array and a name string as parameters
// var friendsCount = (array, name) => {

//     //create an empty array to return later
//     let friendsWith = [];

//     //iterate through the array
//     for (let i = 0; i < array.length; i++){

//         //iterate through the friends array in each object
//         for (let j = 0; j <  array[i].friends.length; j++){

//             //check if the iterated friends array name property equals the input name string
//             if (array[i].friends[j].name === name){

//                 //if true, push the outer array-object's name property value to friendsWith
//                 friendsWith.push(array[i].name);


//             }
//         }
//     }

//     return friendsWith;
// };


// ### 9: `topThreeTags`
//  - **Objective**: Find the three most common tags among all customers' associated tags
//  - **Input**: `Array`
//  - **Output**: `Array`
//  - **Constraints**:


//set to a function that takes an array as its parameter
//function takes an array param
let topThreeTags = array => {


    //reduce all the tags into an array of combined tags
    let tagList = array.reduce((acc, curr) => {
      // console.log(curr.tags);
      for (let i = 0; i < curr.tags.length; i++){
        acc.push(curr.tags[i]);
      }
  
      return acc.sort();
  
    }, [])
  
  
  
  
  
  
  //redice the taglist into an array of only unique tags
    let uniqueTags = tagList.reduce((accum, current) => {
      if (!accum.includes(current)){
        accum.push(current);
      }
      return accum;
    }, [])
  
  
    // console.log("TAGLIST:   ", tagList);
    // console.log("Unique Tags:  ", uniqueTags);
  
  
  
    //create output array
    let output = [];
  
    //create a counter variable
    //let count = 0;
  
    //create a record counter variable
    let record = 0;
  
  
    //for each tag in unique tags
    for (let i = 0; i < uniqueTags.length; i++){
  
      //filter through the all the tags in the combined tagList to return the length of the output array matching the iterated uniqueTag value
  
      let currCount = tagList.reduce((acc, curr ) => {
        if (uniqueTags[i] === curr)
          acc++
        return acc
      }, 0);
  
  
      //check if the current count is greater than the record\
      if (currCount >= record){
        record = currCount;
        output.push(uniqueTags[i]);
      }
  
    //   console.log("OUTPUT:   ", output)
  
      
      
  
  
    }
    return output;

}

// ### 10: `genderCount`
//  - **Objective**: Create a summary of genders, the output should be:
// ```javascript
// {
//     male: 3,
//     female: 4,
//     non-binary: 1
// }
// ```
//  - **Input**: `Array`
//  - **Output**: `Object`
//  - **Constraints**: Use `reduce`

var genderCount = array => {
    return array.reduce((acc, curr) => {
        if(acc[curr.gender]){ //does this access a truthy piece of data? 
            acc[curr.gender] += 1

        } else {
            acc[curr.gender] = 1
        }
        return acc;
    }, {})
};




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
