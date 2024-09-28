const characters = [
    {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: '202',
        mass: '136',
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: '150',
        mass: '49',
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: '188',
        mass: '84',
        eye_color: 'blue',
        gender: 'male',
    },
];

// filter
//1. get characters with mass greater than 100
const greater100Charaters = characters.filter( characters => {
    return characters.mass > 100;
})

console.log(greater100Charaters)

//2. get characters with height less than 200
const shorterCharacters = characters.filter(character => character.height < 200) 

console.log(shorterCharacters)

//3.get all male characters
const maleCharacters = characters.filter(character => character.gender === 'male' )

console.log(maleCharacters)

//4. get all female
const femaleCharacters = characters.filter(character => character.gender === 'female')

console.log(femaleCharacters)