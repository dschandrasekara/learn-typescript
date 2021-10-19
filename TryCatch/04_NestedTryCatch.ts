/*
    Syntax:
        try {
            try_statements
            try {
                nested_try_statements
            }
            catch {
                nested_catch_statements
            }
        }
        catch {
            catch_statements
        }
*/
// In Mac OS
//compile command -  FILENAME=04_NestedTryCatch FOLDER=TryCatch npm run compile
//output command -  FILENAME=04_NestedTryCatch FOLDER=TryCatch npm run output

console.log("-----Example of Nested Try Block");
try {
  console.log("In try block 1");
  try {
    console.log("In try block 2");
    throw "Exception in Nested";
  } catch (e2) {
    console.log(e2);
    console.log("In Catch Block 2");
  } finally {
    console.log("In Finally Block 2");
  }
} catch (e) {
  console.log(e);
  console.log("In Catch Block 1"); // this will not be executed, as exception is handled by inner try-catch
} finally {
  console.log("In Finally Block 1");
}

console.log("-----Example of Nested Try Block with Re-Throw");
try {
  console.log("In try block 1");
  try {
    console.log("In try block 2");
    throw "Exception in Nested";
  } catch (e2) {
    console.log("From Inner:", e2);
    console.log("In Catch Block 2");
    throw e2; // Rethrowing for outer try-catch block
  } finally {
    console.log("In Finally Block 2");
  }
} catch (e) {
  console.log("From Outer:", e);
  console.log("In Catch Block 1");
} finally {
  console.log("In Finally Block 1");
}

//Note: using 'return' in nested finally will stop the rethrowing of exception.

function tryCatchWihReturn() {
  console.log(
    "-----Example of Nested Try Block with Re-Throw and return in Finally"
  );
  try {
    console.log("In try block 1");
    try {
      console.log("In try block 2");
      throw "Exception in Nested";
    } catch (e2) {
      console.log("From Inner:", e2);
      console.log("In Catch Block 2");
      throw e2; // Rethrowing for outer try-catch block
    } finally {
      console.log("In Finally Block 2");
      return;
    }
  } catch (e) {
    // this block will not be executed even though nested block rethrows exception.
    // Since use of return in nested block, parent block treats as No excpetion.
    console.log("From Outer:", e);
    console.log("In Catch Block 1");
  } finally {
    console.log("In Finally Block 1");
  }
}
tryCatchWihReturn();
