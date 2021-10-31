/**
 * The RegExp object is used for matching text with a pattern.
 */

//Declare Regexp using slash
let regexp = /abc/
let regexpG = /abc/g
let regexpI = /abc/i
let regexpIG = /abc/ig
//Declare Regexp using class ex: define a regexp using a variable
let regexpV = new RegExp(regexp)
let regexpVG = new RegExp(regexpG)
let regexpVI = new RegExp(regexpI)
let regexpVIG = new RegExp(regexpIG)

//Simple sample string
let sampleString = 'Abc abc abc'
console.log(sampleString.match(regexp)) //["abc"] match only the first and return
console.log(sampleString.match(regexpV)) //["abc"] match only the first and return
console.log(sampleString.match(regexpG)) //["abc","abc"] match all
console.log(sampleString.match(regexpVG)) //["abc","abc"] match all
console.log(sampleString.match(regexpI)) //["Abc"] not case sensitive
console.log(sampleString.match(regexpVI)) //["Abc"] not case sensitive
console.log(sampleString.match(regexpIG)) //["Abc","abc","abc"]
console.log(sampleString.match(regexpVIG)) //["Abc","abc","abc"]

//Regexp with string replace sample
regexp = /(\w+)\s(\w+)/
let sampleString2 = 'John Snow'
console.log(sampleString2.replace(regexp, '$2, $1'))

//Regexp sample on multi line string
regexp = /multi.*you/
let regexp2 = /multi[^]*you/
let multiLineString = 'This is a multi line string test\nThank you!'

console.log(multiLineString.match(regexp)) // [null]
console.log(multiLineString.match(regexp2)) // ["multi line string test\nThank you!"]
