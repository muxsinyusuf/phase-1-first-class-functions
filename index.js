function receivesAFunction(callback) {
  callback(); 
}

function returnsANamedFunction() {
  return function namedFunction() {
    console.log("This is a named function.");
  };
}

function returnsAnAnonymousFunction() {
  return function() {
    console.log("This is an anonymous function.");
  };
}


receivesAFunction(function() {
  console.log("Callback function called.");
});

const namedFunc = returnsANamedFunction();
namedFunc();  

const anonymousFunc = returnsAnAnonymousFunction();
anonymousFunc();  
