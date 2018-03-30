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
  var numberArray = (""+input).split(' ');
  for (var i = 0; i < input; i++) {

  }
}

function finalOutput (input) {
  if (input % 3 === 0){
    return  hal();
  } else {
    return makeArray(input);
  }
}
