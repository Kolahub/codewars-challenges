/*
//// **** ONE *******
// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present). 
// For example,
// [true,  true,  true,  false,
// true,  true,  true,  true ,
// true,  false, true,  false,
// true,  false, false, true ,
// true,  true,  true,  true ,
// false, false, true,  true]
function countSheeps(sheep) {
    let count = "";
for (let i of sheep) {
    if (i === true) {
      count++
  }
}
return console.log (`Number of sheeps: ${count || 0}`)
}
countSheeps([true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, null, true ,
  true,  true,  true,  true ,
  false, false, true,  true])
  countSheeps([])
  countSheeps([null, undefined])
*/

/*
/// *** TWO ********
/// debugging
const getPlanetName = function (id) {
    var name;
    switch(id) {
      case 1:
        name = 'Mercury'
        break
      case 2:
        name = 'Venus'
        break
      case 3:
        name = 'Earth'
        break
      case 4:
        name = 'Mars'
        break
      case 5:
        name = 'Jupiter'
        break
      case 6:
        name = 'Saturn'
        break
      case 7:
        name = 'Uranus'
        break
      case 8:
        name = 'Neptune'
        break
    }
    
    return name;
  }
getPlanetName(undefined)
*/

function greet(language) {
  const database = {
    english: "Welcome",
    czech:"Vitejte",
    danish:"Velkomst",
    dutch:"Welkom",
    estonian: "Tere tulemast",
    finnish:"Tervetuloa",
    flemish:"Welgekomen" ,
    french: "Bienvenue",
    german : "Willkommen",
    irish: "Failte",
    italian: "Benvenuto",
    latvian: "Gaidits",
    lithuanian: "Laukiamas",
    polish: "Witamy",
    spanish: "Bienvenido",
    swedish: "Valkommen",
    welsh: "Croeso",
  }
  const result = language in database
  const databaseEntries = Object.entries(database)
  for (const [i,k] of databaseEntries) {
  if (language.toLowerCase() === i) {
    console.log(`${k}, Your function should return '${k}'`);
  }
} 
if (!result) {
  console.log(database.english);
}
}
greet("fygu")




