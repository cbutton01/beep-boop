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

function hal (input){
  if (input === 3) {
    return "I'm sorry, Dave.  I'm afraid I can't do that.";
  } else {
    return input;
  }
}

function makeArray (input) {
  var numberArray = (""+input).split('');
  return numberArray;
}
