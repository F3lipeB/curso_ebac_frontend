function Player(persona, sexo) {
    this.persona = persona;
    this.sexo = sexo;
}

function TimeA(persona, sexo, classe) {
    Player.call(this, persona, sexo, classe);
    this.classe = classe;
}

function TimeB(persona, sexo, classe) {
    Player.call(this, persona, sexo, classe);
    this.classe = classe;
}

const Character1 = new TimeB("Orc", "M", "Guerreiro");
const Character2 = new TimeA("Elfo", "F", "Caçador");
const Character3 = new TimeA("Humano", "F", "Mago");

console.log(Character1);
console.log(Character2);
console.log(Character3);