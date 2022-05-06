// Developer Test 

// Basic JavaScript (bonus for efficiency):

// Below are varriables to be used for the below questions
// Global Varriables

var departmentInfo = require('./json/departmentInfo.json'); 
var objectArray = require('./json/objectArray.json');
var people = require('./json/people.json');
var objectF = {
  value: 'f',
  Id: 5
};


// end Global Varriables 

// 1. Write a function that adds two given numbers
const addsTwo = (a,b) => a + b;

// 2. Adding 'objectF' to an 'objectArray'
objectArray.push(objectF);

// 3. Write a function that returns Id 3 from 'objectArray'
const returnsThree = () => {
  return objectArray[2]["ID"];
};

// 4. Write a function that merges 'people' with 'departmentInfo' based on department
 const departmentMerge = () => {
    forEach(people => {
      for(peoplesDept in people){
        if(people.includes('TechOps')){
          people.push(departmentInfo[1].department);
        }else if(people.includes('Reliability')){
          people.push(departmentInfo[2].department);
        }
      }
    })
  };  

//Loop through the array stored in variable 'people' with forEach()
//Loop through the object within the array using a for...in loop
//Use a conditional to evaluate if 'techOps' is in the object
//If 'techOps' IS in the object, push() it into the departmentInfo array
//If instead the object contains 'Reliability', then push() into the object which contains 'Reliability'