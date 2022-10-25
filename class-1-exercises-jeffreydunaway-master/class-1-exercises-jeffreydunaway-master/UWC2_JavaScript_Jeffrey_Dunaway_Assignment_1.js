/**
 * MATH
 */

// 1. Pagliacci charges $16.99 for a 13” pizza and $19.99 for a 17” pizza.
// What is the area for each of these pizzas?
// (radius would be the listed size - i.e. 13" - divided by 2)

const radius_Pizza_1 = (13/2)
const radius_Pizza_2 = (17/2)

// 2. What is the cost per square inch of each pizza?

function areaOfPizza() {
    let Pizza1 =(Math.PI / radius_Pizza_1 **2)
let Pizza2 = (Math.PI / radius_Pizza_2 **2)
}
console.log(Pizza1)
console.log(Pizza2)

// 3. Using the Math object, put together a code snippet
// that allows you to draw a random card with a value
// between 1 and 13 (assume ace is 1, jack is 11…)

let Ace = 1
let Two = 2
let Three = 3
let Five = 5
let Six = 6
let Seven = 7
let Eight = 8
let Nine = 9
let Ten = 10
let Jack = 11
let Queen = 12
let King = 13

function getRandomIntInclusive (min, max) {
        min = 1
        Math.ceil(min); 
        max = 13
        Math.floor(max)
        return
        Math.floor(Math.random() * (max - min + 1) + min); 
    }
}
// 4. Draw 3 cards and use Math to determine the highest
// card

Math.random() * (max - min + 1) + min)
console.log(Math.max('1, 13'))

/**
 * ADDRESS LINE
 */

// 1. Create variables for firstName, lastName,
// streetAddress, city, state, and zipCode. Use
// this information to create a formatted address block
// that could be printed onto an envelope.

const firstName = jeffrey
const lastName = dunaway
const streetAddress = 123 Best Street
const city = Seattle 
const state = Washingston 
const zipCode = 98101


// 2. You are given a string in this format:
// firstName lastName(assume no spaces in either)
// streetAddress
// city, state zip(could be spaces in city and state)
// 
// Write code that is able to extract the first name from this string into a variable.
// Hint: use indexOf, slice, and / or substring

let fullName = '${firstName} ${lastName}'
let result = text.slice(0,15)
const jeffrey = firstName
console.log(str.substring(1,7)



/**
 * FIND THE MIDDLE DATE
 */
// On your own find the middle date(and time) between the following two dates:
// 1/1/2020 00:00:00 and 4/1/2020 00:00:00
//
// Look online for documentation on Date objects.

// Starting hint:
const startDate = new Date(2020, 0, 1);
const endDate = new Date(2020, 4, 1);
var midpoint = new Date((date.1getTime() + date2.getTime())/2);
console.log(midpoint)