
const prompt = require('prompt-sync') ()

const size = prompt('Enter array size: ')
const arr = []

console.log('Enter numbers:')

for ( let i = 0; i < size; i++ ) {
   arr[i] = prompt()
   arr.map(Number)
}

function replaceEven(size,arr) {
    for ( let i = 0; i < size; i++ ) {
        if ( arr[i] %2 === 0 ) {
            arr[i] = `$`
        }
    }
    console.log(`\n${arr}`)
}

replaceEven(size,arr)
