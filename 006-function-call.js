const characterMario = {
    name: "Mario",
    lives: 3,
    increaseLevels() {
        this.lives += 3;
        return `${this.name} : Lives ${this.lives}`;
    }
}

const characterLuigi = {
    name: "Luigi",
    lives: 2
}

characterMario.increaseLevels.call(characterLuigi);

// What is the Output?