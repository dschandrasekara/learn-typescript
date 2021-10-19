/*
    Try Catch statement provides a way to handle some or all of the errors(exception) that may occur in our code.
    If the Exception is not handled will lead to Run Time Error.

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

    Statements within try block is to be executed.
    Catch Statement will be executed if any exception occurs.
    Statement in finally will be executed regardless of exception occurs or not.

    Note:
        1. Statements after exception raised in Try Blocks will not be executed.
        2. try should be followed by either catch or finally or both.
*/
// In Mac OS
//compile command -  FILENAME=01_TryCatch FOLDER=TryCatch npm run compile
//output command -  FILENAME=01_TryCatch FOLDER=TryCatch npm run output

console.log("-----Example of try...catch");
try {
  console.log("In try block");
  throw "New Exception"; // generates an exception
  console.log("After Exception Raised"); // This statement will not be executed, as excpetion is thrown before this step
} catch (e) {
  // statements to handle any exceptions
  console.log(e);
  console.log("In Catch Block");
}
