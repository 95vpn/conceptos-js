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

// map
//1. get array of all names
const names = characters.map(character => {
    return character.name;
})
console.log(names)

//2. get characters with height less than 200
const heights = characters.map(character => character.height)
console.log(heights)

//3.get array of objects with just name and height properies
const minifiedRecords = characters.map(character => ({
    name: character.name,
    height: character.height
}))
console.log(minifiedRecords)

//4. get arrays of all first names
const firstNames = characters.map(character => character.name.split(' ')[0])
console.log(firstNames)

// some
//1. Is there at least one male character
const oneMaleCharacter = characters.some(character => {
    return character.gender === 'male'
});

console.log(oneMaleCharacter)

//2. Is there at least one character with blue eyes?
const oneBlueEyes = characters.some(character => character.eye_color === 'blue')
console.log(oneBlueEyes)

//3. Is there at least one character taller than 210?
const oneTaller210 = characters.some(character => character.height > 210)
console.log(oneTaller210)


// is there at least one character that has mass less than 50
const oneMassLessThan50 = characters.some(character => character.mass < 50);
console.log(oneMassLessThan50)

// sort
//1. sort by mass
const byMass = characters.sort((a, b) => {
    return b.mass - a.mass
})
console.log(byMass)

//2. sort by height
const byHeight = characters.sort((a, b) => {
    return a.height - b.height;
})
console.log(byHeight)

//. sort by name
const byName = characters.sort((a, b) => {
    if (a.name < b.name) return 1;
    return -1
})

console.log(byName)

//3. sort by gender
const byGender = characters.sort((a, b) => {
    if (a.gender === 'female') return 1;
    return -1
})


// Reduce
//1. get the total mass of all characters
const totalMass = characters.reduce((acc, cur) => acc + cur.mass, 0);

console.log(totalMass)

// 2. get total height af all characters

const totalHeight = characters.reduce((acc, cur) => acc + cur.height, 0)
console.log(totalHeight)

//3. get total number of characters by eyeColor
const characterByColor = characters.reduce((acc, cur) => {
    const color = cur.eye_color;
    if(acc[color]) {
        acc[color]++
    } else {
        acc[color] = 1;
    }
    return acc;
}, {})

console.log(characterByColor)

//4. get total number of characters in all the character names
const totalNameCharacters = characters.reduce((acc, cur) => acc + cur.name.length, 0)
console.log(totalNameCharacters)

//every

//1. does every character have blue eyers?
const allBlueEyes = characters.every(character => {
    return character.eye_color === 'blue';
})
console.log(allBlueEyes)

//2. does every character have mass more than 40?
const allMassMoreThan40 = characters.every(character => character.mass > 40)

console.log(allMassMoreThan40)

//3. Is every character shorter than 200?
const allShorterThan200 = characters.every(character => character.height < 200)
console.log(allShorterThan200)

//4. is every characters male ?
const allMale = characters.every(character => character.gender === 'male')
console.log(allMale)