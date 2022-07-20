function book(title, author, pageNum, haveYouRead) {
    this.title = title
    this.author = author
    this.pageNum = pageNum
    this.haveYouRead= haveYouRead
    this.info = function(){ 
        return console.log(`${this.title} by ${this.author}, ${this.pageNum} pages, read (y/n): ${this.haveYouRead}`);
    }
};

const bookTest = new book('Harry Potter', 'J.K Rowling', 765, 'yes');
bookTest.info();

function monsterBuilder(name, planet, ability) {
    this.name = name
    this.planet = planet 
    this.ability = ability
    this.result = function() {
        return console.log(`The monster you created, ${this.name}, is from ${this.planet} and comes with the ability to ${this.ability}... Proceed with caution.`);
    }
};

const monster1 = new monsterBuilder('Merlin', 'Uranus', 'incinerate');
monster1.result();
console.log(monster1.planet);