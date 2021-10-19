/*
    Syntax:
        try {
            try_statements
        }
        catch (exception) {
            catch_statements
        }
        finally {
            finally_statements
        }

*/
// In Mac OS
//compile command -  FILENAME=02_TryCatchFinally FOLDER=TryCatch npm run compile
//output command -  FILENAME=02_TryCatchFinally FOLDER=TryCatch npm run output

console.log("-----Example of try...catch...finally when No-Exception is thrown");
try {
  console.log("In try block");
} catch (e) {
  console.log(e);
  console.log("In Catch Block"); // This statement will not be executed, as no excpetion is thrown
} finally {
  console.log("In Finally Block");
}

console.log("-----Example of try...catch...finally when exception is thrown");
try {
  console.log("In try block");
  throw "New Exception"; // generates an exception
  console.log("After Exception Raised"); // This statement will not be executed, as excpetion is thrown before this step
} catch (e) {
  // statements to handle any exceptions
  console.log(e);
  console.log("In Catch Block");
} finally {
  console.log("In Finally Block");
}
