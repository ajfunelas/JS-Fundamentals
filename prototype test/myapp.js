class player {
    constructor(name, energy) {
        this.name = name
        this.energy = energy
    }
    eat(amount) {
        console.log(`${this.name} is eating.`)
        this.energy += amount
    }
    sleep(length) {
        console.log(`${this.name} is sleeping.`)
        this.energy += length
    }
    play(length) {
        console.log(`${this.name} is playing.`)
        this.energy += length
    }
}

function archer(name, energy, level){
    player.call(this, name, energy)

    this.level = level
}

const aj = new player('Abner', 100, 99)
const kim = new player('Kim', 200, 98)

const archer1 = new player ('archer', 100, 99)