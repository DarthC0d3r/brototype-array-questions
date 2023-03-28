
const prompt = require('prompt-sync') ()

const size = prompt('Enter array size: ')
const arr = []
let arr1 = []

console.log('Enter numbers:')

for ( i = 0; i < size; i++ ) {
    arr.push( prompt() )
    arr1 = arr.map(Number)
}

let even = []
let odd = []

function separateArray(array) {
    let k = 0
    let j = 0 

    for( i = 0; i < array.length; i++ ) {
        if( array[i] % 2 === 0 ){
            even[j] = array[i]
            j++
        }else {
            odd[k] = array[i]
            k++
        }
    }
}

separateArray(arr1)

console.log(`Even array: ${even}`)
console.log(`Odd array: ${odd}`)
