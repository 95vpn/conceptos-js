//every de los array es muy interesante -> devuelve un boolean
//
const numbers = [1, 2, 'hola', 3, 4, ]


const result = numbers.every((number, index) => {
    console.log(index)
    return typeof number === 'number'
})

console.log(result)

console.log('-------------------')

const resultSome = numbers.some((number, index) => {
    console.log(index)
    return typeof number === 'number'
})

console.log(resultSome )