// an async function which first prints 'calling', then it waits for resolveAfter2Seconds() to be resolved and after two seconds, it prints 'resolved'

function resolveAfter2Seconds() {
    // define a Promise 
    return new Promise(resolve => {
        // a resolved promise after certain time
      setTimeout(() => {
        resolve('resolved');
      }, 2000); // resolves after 2 seconds 
    });
  }
  
  // async/await will always return a Promise, even if you omit the Promise keyword
  async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds(); // here we wait for the resolveAfter2Seconds() -function to resolve the Promise and print the result
    console.log(result);
    // expected output: "resolved"
  }
  
  asyncCall();