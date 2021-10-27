// Namespaces are paradigm of organizing code so that variables, 
// functions, interfaces, or classes are 
// grouped together within a local scope in order to avoid naming 
// conflicts between components in the global scope.

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