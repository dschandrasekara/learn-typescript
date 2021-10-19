/*
    Syntax:
        try {
            try_statements
        }
        finally {
            finally_statements
        }
*/
// In Mac OS
//compile command -  FILENAME=03_TryFinally FOLDER=TryCatch npm run compile
//output command -  FILENAME=03_TryFinally FOLDER=TryCatch npm run output

console.log("-----Example of try...finally when No-Exception is thrown");
try {
  console.log("In try block");
} finally {
  console.log("In Finally Block");
}

console.log("-----Example of try...finally when exception is thrown");
try {
  console.log("In try block");
  throw "New Exception"; // generates an exception
  console.log("After Exception Raised"); // This statement will not be executed, as excpetion is thrown before this step
} finally {
  console.log("In Finally Block");
  // after this step, runtime error will occur
}

console.log("This code will not be executed");
