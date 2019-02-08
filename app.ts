import { Spacecraft, Containership } from "./base-ships";
import { MillenniumFalcon } from "./starfighters";


/*------------------------------------|
|------------ Call modules -----------|
|------------------------------------*/

let ship = new Spacecraft('hyperdrive')
ship.jumpIntoHyperspace();

let falcon = new MillenniumFalcon()
falcon.jumpIntoHyperspace()

let goodForTheJob = ( ship: Containership ) => ship.cargoContainers > 2
console.log(`Is falcon good for the job? ${goodForTheJob(falcon) ? 'yes' : 'no'}`)




/*------------------------------------|
|---------- Remenber basic -----------|
|------------------------------------*/

/**
 * Work with string
 */
let message: string = "Help me, Obi-Wan Kenobi. You're my only hope!"
console.log(message);

/**
 * Work with numbers
 */
let episode: number = 4
console.log("This is episode " + 4)

episode = episode + 1
console.log("Next episode is " + episode)

let favoriteDroid: string;
favoriteDroid = 'BB-8'

console.log("My favorite droid is " + favoriteDroid)

/**
 * Work with functions and parameters types
 * @param parsecs 
 */
let isEnoughToBeatMF = function ( parsecs: number) : boolean {
    return parsecs < 12;
}

let distance = 14
console.log(`Is ${distance} parsecs enough to beat Millennium Falcon? ${isEnoughToBeatMF(distance) ? 'YES' : 'NO'}`)

/**
 * Work with arrow function, left is declarations parameters and right is implementation
 * @param name 
 */
let call = (name: string) => console.log(`Do you copy, ${name}?`)
call('R2')

/**
 *Work is default parameters
 * @param speed 
 * @param inc 
 */
function inc (speed: number, inc: number = 1): number {
    return speed + inc
}

console.log(`inc (5,1) = ${inc(5,1)}`)
console.log(`inc (5,1) = ${inc(5)}`)


/** run comands in terminal for test */
/**
 * $ node dist/app
 */
