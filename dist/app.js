var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * Trabahando com string
 */
var message = "Help me, Obi-Wan Kenobi. You're my only hope!";
console.log(message);
/**
 * Trabalhando com numeros
 */
var episode = 4;
console.log("This is episode " + 4);
episode = episode + 1;
console.log("Next episode is " + episode);
var favoriteDroid;
favoriteDroid = 'BB-8';
console.log("My favorite droid is " + favoriteDroid);
/**
 * Trabalhando com funções e tipos de parametros
 * @param parsecs
 */
var isEnoughToBeatMF = function (parsecs) {
    return parsecs < 12;
};
var distance = 14;
console.log("Is " + distance + " parsecs enough to beat Millennium Falcon? " + (isEnoughToBeatMF(distance) ? 'YES' : 'NO'));
/**
 * Trabalhando com arrow function, lado esquerdo fica a declaração dos parametros, no direito fica a implementação
 * @param name
 */
var call = function (name) { return console.log("Do you copy, " + name + "?"); };
call('R2');
/**
 * Trabalhando com parametros padrões
 * @param speed
 * @param inc
 */
function inc(speed, inc) {
    if (inc === void 0) { inc = 1; }
    return speed + inc;
}
console.log("inc (5,1) = " + inc(5, 1));
console.log("inc (5,1) = " + inc(5));
/************************* CLASSES *************************/
/**
 * Representação de um objeto do mundo real podem conter caracteristicas
 * que chamamos de atributos, e ações que chamamos de metodos, classes servem
 * de modelos ou moldes para criação de um objeto, o objeto é portanto uma instancia
 * da classe
 */
var Spacecraft = /** @class */ (function () {
    function Spacecraft(propulsor) {
        this.propulsor = propulsor;
    }
    Spacecraft.prototype.jumpIntoHyperspace = function () {
        console.log("Entering hyperspace with " + this.propulsor);
    };
    return Spacecraft;
}());
var ship = new Spacecraft('hyperdrive');
ship.jumpIntoHyperspace();
/************************* HERANÇA *************************/
/**
 * Herda atributos que são básicos entre outros objetos, o construtor não precisa ter parametro
 * mas eu preciso informar um 'propulsor' toda vez que eu criar uma nave básica, por que o construtor
 * da classe base exige isto, faço isso usando super(), super() também é usado quando eu quero
 * invocar a implementação original do metodo e sub-escrever o metodo
 */
var MillenniumFalcon = /** @class */ (function (_super) {
    __extends(MillenniumFalcon, _super);
    function MillenniumFalcon() {
        var _this = _super.call(this, 'hyperdrive') || this;
        _this.cargoContainers = 2;
        return _this;
    }
    MillenniumFalcon.prototype.jumpIntoHyperspace = function () {
        if (Math.random() >= 0.5) {
            _super.prototype.jumpIntoHyperspace.call(this);
        }
        else {
            console.log("Failed to jump into hyperspace");
        }
    };
    return MillenniumFalcon;
}(Spacecraft));
var falcon = new MillenniumFalcon();
falcon.jumpIntoHyperspace();
/**
 *
 * @param ship
 */
var goodForTheJob = function (ship) { return ship.cargoContainers > 2; };
console.log("Is falcon good for the job? " + (goodForTheJob(falcon) ? 'yes' : 'no'));
