
const prompt = require('prompt-sync') ()

const size = prompt('Enter array size: ')
const arr = []

console.log("Enter numbers: ")

for ( i = 0; i < size; i++ ) {
    arr.push( prompt() )
}

console.log(`\nArray in reverse: `)

console.log( arr.reverse() )

arr.sort( function(a,b){return b - a} )

console.log(`\n2nd largest number: ${arr[1]}`)
