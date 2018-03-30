function hal (){
  return "I'm sorry, Dave.  I'm afraid I can't do that.";
}

function makeArray (input) {
  // debugger;
  var currentNumber = 0;
  var numberArray = [];
  for (var i = 0; i < input; i++) { //recieve input and push all numbers until input as a string to numberArray
    numberArray.push(''+currentNumber);
    currentNumber++; //increase currentNumber by one
  }
  numberArray.push(''+input); //push input as string to numberArray



  numberArray.forEach(function(string){
    var parsed = parseInt(string);
    var splitString = string.split('');
    if (parsed % 3 === 0 && parsed != 0) {
      numberArray.splice(string, 1, "I'm sorry, Dave.  I'm afraid I can't do that");
    } else if (splitString.indexOf('1') > -1) {
      numberArray.splice(string, 1, 'boop');
    } else if (splitString.indexOf('0') > -1) {
      numberArray.splice(string, 1, 'beep');
    }
  });

  var finalString = numberArray.toString(' ');
  return finalString;
} // end of makeArray function

function finalOutput (input) {
  if (input % 3 === 0){ //if the input is divisible by 3 then HAL will respond
    return  hal();
  } else { //else feed the input to the makeArray function
    return makeArray(input);
  }
}

$(document).ready(function(){
  $('#input').submit(function (event) {
    event.preventDefault();
    var input = finalOutput($('#numbers').val());
    $('#string-input').hide().text(input).fadeIn();

  })
});
