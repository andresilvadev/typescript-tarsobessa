/**
 * Trabahando com string
 */
let message: string = "Help me, Obi-Wan Kenobi. You're my only hope!"
console.log(message);

/**
 * Trabalhando com numeros
 */
let episode: number = 4
console.log("This is episode " + 4)

episode = episode + 1
console.log("Next episode is " + episode)

let favoriteDroid: string;
favoriteDroid = 'BB-8'

console.log("My favorite droid is " + favoriteDroid)

/**
 * Trabalhando com funções e tipos de parametros
 * @param parsecs 
 */
let isEnoughToBeatMF = function ( parsecs: number) : boolean {
    return parsecs < 12;
}

let distance = 14
console.log(`Is ${distance} parsecs enough to beat Millennium Falcon? ${isEnoughToBeatMF(distance) ? 'YES' : 'NO'}`)

/**
 * Trabalhando com arrow function, lado esquerdo fica a declaração dos parametros, no direito fica a implementação
 * @param name 
 */
let call = (name: string) => console.log(`Do you copy, ${name}?`)
call('R2')

/**
 * Trabalhando com parametros padrões
 * @param speed 
 * @param inc 
 */
function inc (speed: number, inc: number = 1): number {
    return speed + inc
}

console.log(`inc (5,1) = ${inc(5,1)}`)
console.log(`inc (5,1) = ${inc(5)}`)

/************************* CLASSES *************************/
/**
 * Representação de um objeto do mundo real podem conter caracteristicas 
 * que chamamos de atributos, e ações que chamamos de metodos, classes servem
 * de modelos ou moldes para criação de um objeto, o objeto é portanto uma instancia 
 * da classe
 */
class Spacecraft {

    constructor(public propulsor: string) {}

    jumpIntoHyperspace() {
        console.log(`Entering hyperspace with ${this.propulsor}`)
    }

}

let ship = new Spacecraft('hyperdrive')
ship.jumpIntoHyperspace();


/************************* HERANÇA *************************/
/**
 * Herda atributos que são básicos entre outros objetos, o construtor não precisa ter parametro
 * mas eu preciso informar um 'propulsor' toda vez que eu criar uma nave básica, por que o construtor
 * da classe base exige isto, faço isso usando super(), super() também é usado quando eu quero
 * invocar a implementação original do metodo e sub-escrever o metodo
 */
class MillenniumFalcon extends Spacecraft implements Containership {

    cargoContainers: number;
    
    constructor() {
        super('hyperdrive');
        this.cargoContainers = 2;
    }

    jumpIntoHyperspace() {
        if (Math.random() >= 0.5) {
            super.jumpIntoHyperspace()
        } else {
            console.log(`Failed to jump into hyperspace`)
        }
    }
}

let falcon = new MillenniumFalcon()
falcon.jumpIntoHyperspace()


/************************* INTERFACE *************************/
/**
 * Interfaces definem um contrato que uma classes que implementam devem obedeçer
 * podendo ser um conjunto de atributos, ou comportamento que podem ser comum 
 * a vários objetos, conceito similar a herança mas aqui não há a implementação e
 * apenas o que deve ser implementado
 */
interface Containership {
    cargoContainers: number
    // cargoContainers?: number // Se caso quiser deixar opçional
}

/**
 * 
 * @param ship 
 */
let goodForTheJob = ( ship: Containership ) => ship.cargoContainers > 2
console.log(`Is falcon good for the job? ${goodForTheJob(falcon) ? 'yes' : 'no'}`)

