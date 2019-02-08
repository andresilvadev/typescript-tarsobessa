/************************* CLASSES *************************/
/**
 * Representação de um objeto do mundo real podem conter caracteristicas 
 * que chamamos de atributos, e ações que chamamos de metodos, classes servem
 * de modelos ou moldes para criação de um objeto, o objeto é portanto uma instancia 
 * da classe
 */
export class Spacecraft {

    constructor(public propulsor: string) {}

    jumpIntoHyperspace() {
        console.log(`Entering hyperspace with ${this.propulsor}`)
    }

}



/************************* INTERFACE *************************/
/**
 * Interfaces definem um contrato que uma classes que implementam devem obedeçer
 * podendo ser um conjunto de atributos, ou comportamento que podem ser comum 
 * a vários objetos, conceito similar a herança mas aqui não há a implementação e
 * apenas o que deve ser implementado
 */
export interface Containership {
    cargoContainers: number
    // cargoContainers?: number // Se caso quiser deixar opçional
}