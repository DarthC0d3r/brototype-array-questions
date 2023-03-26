
const prompt = require('prompt-sync') ()

const size = prompt('Enter array size: ')
let arr = []

for ( i = 0; i < size; i++ ) {
    arr.push( prompt('Enter a number: ') )
}


function replaceEven(size,arr) {
    for ( i = 0; i < size; i++ ) {
        if ( arr[i] %2 === 0 ) {
            arr[i] = `$`
        }
        console.log( arr[i])
    }
    
}

replaceEven(size,arr)

