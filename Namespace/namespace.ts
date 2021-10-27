namespace Book {
    const name = "Alchemist"
    export function getName () {
        return `${name}`
    }
  }
  
  namespace Writer{
    const name ="Paulo Coelho";
    export function getName (){
      return `${name}`
    }
  }

console.log(Book.getName()," is a book written by ",Writer.getName());  // calling functions from namespace file - refer.ts
