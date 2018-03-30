function beep (input){
  if (input === 0) {
    return 'beep';
  } else {
    return input;
  }
}

function boop (input) {
  if (input === 1) {
    return 'boop';
  } else {
    return input;
  }
}

function hal (){
  return "I'm sorry, Dave.  I'm afraid I can't do that.";
}

function makeArray (input) {
  var currentNumber = 0;
  var arrayForOtherNumbers = []; //array to check for numbers containing zero's and one's
  for (var i = 0; i < input; i++) { //recieve input and push all numbers until input as a string to numberArray
    numberArray.push(''+currentNumber);
    currentNumber++; //increase currentNumber by one
  }
  numberArray.push(''+input); //push input as string to numberArray
  for (var index = 0; index <= numberArray.length; index++){
    var numberArray = numberArray[index].split('') //split current string into new array to look for ones and zero's

    for (var j = 0; j <= arrayForOtherNumbers.length; j++) {
      arrayForOtherNumbers[j]
    } //nested for loop
  } // parent for loop
} // end of makeArray function

function finalOutput (input) {
  if (input % 3 === 0){ //if the input is divisible by 3 then HAL will respond
    return  hal();
  } else { //else feed the input to the makeArray function
    return makeArray(input);
  }
}
