
const prompt = require('prompt-sync') ()

const size = prompt('Enter array size: ')
const arr = []
let arr1 = []

console.log('Enter numbers:')

for ( i = 0; i < size; i++ ) {
    arr.push( prompt() )
    arr1 = arr.map(Number)
}

function replaceOdd(size,array) {
    for ( i = 0; i < size; i++ ) {
        if ( array[i] %2 !== 0 ) {
            array[i] = `$`
        }
    }
    console.log(`\n${array}`)
}

replaceOdd(size,arr1)
