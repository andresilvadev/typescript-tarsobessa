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
