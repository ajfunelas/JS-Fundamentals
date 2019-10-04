class player {
    constructor(name, energy, level) {
        this.name = name
        this.energy = energy
        this.level = level
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


const aj = new player('Abner', 100, 99)
const kim = new player('Kim', 200, 98)
