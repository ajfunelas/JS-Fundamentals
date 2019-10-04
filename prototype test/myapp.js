class player {
    constructor(name, energy) {
        this.name = name
        this.energy = energy
    }
    eat(amount) {
        console.log('${this.name} is eating.')
        this.energy += amount
    }
    sleep(length) {
        console.log('${this.name} is sleeping.')
        this.energy += length
    }
    play(length) {
        console.log('${this.name} is playing.')
        this.energy += length
    }
}

const aj = new player('Abner', 100)
const kim = new player('Kim', 200)