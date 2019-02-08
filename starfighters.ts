import { Spacecraft, Containership } from "./base-ships";

/************************* HERANÇA *************************/
/**
 * Herda atributos que são básicos entre outros objetos, o construtor não precisa ter parametro
 * mas eu preciso informar um 'propulsor' toda vez que eu criar uma nave básica, por que o construtor
 * da classe base exige isto, faço isso usando super(), super() também é usado quando eu quero
 * invocar a implementação original do metodo e sub-escrever o metodo
 */
export class MillenniumFalcon extends Spacecraft implements Containership {

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


